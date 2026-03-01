#!/usr/bin/env python3
"""
Scrape doctor data from multiple listing links. Saves only:
  - name, specialty, address, images
for the target doctor (Dr. Ravi Rathore). Aggregates images from all sources.
"""

import json
import re
from pathlib import Path
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

# Canonical data (we only store this doctor)
CANONICAL = {
    "name": "Dr. Ravi Rathore",
    "specialty": "Paediatrician",
    "address": "21 Ghatkarpar Marg, Near Ss Hospital, Freeganj Ujjain, Ujjain 456010, IN",
}

# All links to scrape (deduplicated)
URLS = [
    "https://www.justdial.com/Ujjain/Dr-Ravi-Rathores-Child-Care-And-Advanced-Vaccination-Center-Near-Ss-Hospital-Freeganj-Ujjain/9999PX734-X734-170926060156-J6R8_BZDET",
    "https://www.justdial.com/Ujjain/Dr-Ravi-Rathore-Opposite-Ss-Hospital-Freeganj-Ujjain/9999PX734-X734-140301164433-L4D9_BZDET",
    "https://www.facebook.com/p/Dr-Ravi-Rathores-Child-Care-and-Advanced-Vaccination-Center-100068568472550/",
    "https://www.lybrate.com/ujjain/doctor/dr-ravi-rathore-pediatrician-1",
    "https://www.vinsfertility.com/s/madhya-pradesh/freeganj/doctor/dr-ravi-rathore-039-s-child-care-and-advanced-vaccination-center",
    "https://mymedisage.com/profile/dr-ravi-rathore-v5",
    "https://www.momcuddle.com/doctors-near-me/listing/dr-ravi-rathore",
    "https://threebestrated.in/pediatrician-doctors-in-ujjain-mp",
    "https://www.justdial.com/Ujjain/Dr-Ravi-Rathore-Freeganj-Ujjain/9999PX734-X734-140301164433-L4D9_BZDET",
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}


def clean_json(s: str) -> str:
    s = (s or "").strip().replace("\\/", "/")
    return re.sub(r"[\x00-\x1f\x7f]", " ", s)


def fetch(url: str, timeout=15):
    try:
        r = requests.get(url, headers=HEADERS, timeout=timeout, allow_redirects=True)
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"  Skip {url}: {e}")
        return None


def extract_justdial(html: str, url: str) -> dict:
    """Extract name, specialty, address, images from JustDial JSON-LD."""
    out = {"images": [], "name": None, "specialty": None, "address": None}
    soup = BeautifulSoup(html, "html.parser")
    for script in soup.find_all("script", type="application/ld+json"):
        content = script.string if script.string else (script.contents[0] if script.contents else "")
        if not content or "Physician" not in content:
            continue
        content = clean_json(content)
        try:
            obj = json.loads(content)
        except json.JSONDecodeError:
            continue
        if isinstance(obj, list):
            obj = next((x for x in obj if isinstance(x, dict) and x.get("@type") == "Physician"), None)
        elif not (isinstance(obj, dict) and obj.get("@type") == "Physician"):
            obj = None
        if not obj:
            continue
        out["name"] = obj.get("name") or out["name"]
        if obj.get("image"):
            imgs = obj["image"] if isinstance(obj["image"], list) else [obj["image"]]
            out["images"].extend([u for u in imgs if u and isinstance(u, str)])
        addr = obj.get("address")
        if isinstance(addr, dict):
            parts = [
                addr.get("streetAddress"),
                addr.get("addressLocality"),
                addr.get("addressRegion"),
                addr.get("postalCode"),
                addr.get("addressCountry"),
            ]
            out["address"] = ", ".join(p for p in parts if p)
        specs = obj.get("medicalSpecialty")
        if specs:
            out["specialty"] = specs[0] if isinstance(specs, list) else specs
        break
    return out


def extract_lybrate(html: str, url: str) -> dict:
    out = {"images": [], "name": None, "specialty": None, "address": None}
    soup = BeautifulSoup(html, "html.parser")
    # Meta or JSON-LD
    for s in soup.find_all("script", type="application/ld+json"):
        c = s.string or (s.contents[0] if s.contents else "")
        if not c or "Ravi" not in c:
            continue
        c = clean_json(c)
        try:
            ld = json.loads(c)
        except json.JSONDecodeError:
            continue
        if isinstance(ld, dict):
            if ld.get("name"):
                out["name"] = ld.get("name")
            if ld.get("image"):
                out["images"].append(ld["image"] if isinstance(ld["image"], str) else ld["image"].get("url", ""))
            addr = ld.get("address")
            if isinstance(addr, dict) and addr.get("streetAddress"):
                out["address"] = addr.get("streetAddress") + ", " + ", ".join(
                    addr.get(k) or "" for k in ["addressLocality", "addressRegion"]
                )
    # img with doctor/clinic
    for img in soup.find_all("img", src=True):
        src = img.get("src", "")
        if "lybrate" in src and ("doctor" in src or "profile" in src or "ravi" in src.lower()):
            if src.startswith("//"):
                src = "https:" + src
            out["images"].append(src)
    return out


def extract_momcuddle(html: str, url: str) -> dict:
    out = {"images": [], "name": None, "specialty": None, "address": None}
    soup = BeautifulSoup(html, "html.parser")
    # Page has: "Dr. Ravi Rathore", "Pediatrician", "21 Ghatkarpar Marg, near SS Hospital..."
    text = soup.get_text()
    if "Dr. Ravi Rathore" in text and "Ghatkarpar" in text:
        out["name"] = "Dr. Ravi Rathore"
        out["specialty"] = "Pediatrician"
        out["address"] = "21 Ghatkarpar Marg, near SS Hospital, Freeganj, Ujjain, Madhya Pradesh - 456001"
    for img in soup.find_all("img", src=True):
        src = img.get("src", "")
        if "momcuddle" in src and ("doctor" in src or "listing" in src or "ravi" in src.lower()):
            if src.startswith("//"):
                src = "https:" + src
            out["images"].append(src)
    return out


def extract_threebestrated(html: str, url: str) -> dict:
    """Only Dr. Ravi Rathore / Child Care and Advanced Vaccination Center block."""
    out = {"images": [], "name": None, "specialty": None, "address": None}
    soup = BeautifulSoup(html, "html.parser")
    text = soup.get_text()
    if "Dr. Ravi Rathore" not in text or "CHILD CARE AND ADVANCED VACCINATION" not in text.upper():
        return out
    out["name"] = "Dr. Ravi Rathore"
    out["specialty"] = "Pediatrician"
    out["address"] = "21 Ghatkarpar Marg, Near SS Hospital, Freeganj, Ujjain, MP 456010"
    # Image for this listing (often in a card/section)
    for img in soup.find_all("img", src=True):
        src = img.get("src", "")
        if "threebestrated" in src or "tbr" in src.lower():
            if src.startswith("//"):
                src = "https:" + src
            # Avoid generic logos
            if "logo" not in src.lower() and "ravi" in src.lower() or "pediatrician" in src.lower():
                out["images"].append(src)
    return out


def extract_vinsfertility(html: str, url: str) -> dict:
    out = {"images": [], "name": None, "specialty": None, "address": None}
    soup = BeautifulSoup(html, "html.parser")
    if "Dr. Ravi Rathore" in html and "21 Ghatkarpar" in html:
        out["name"] = "Dr. Ravi Rathore"
        out["address"] = "21 Ghatkarpar Marg, near SS Hospital, Freeganj, Ujjain, Madhya Pradesh 456001, IN"
    for img in soup.find_all("img", src=True):
        src = img.get("src", "")
        if "vinsfertility" in src and "ravi" in src.lower():
            if src.startswith("//"):
                src = "https:" + src
            out["images"].append(src)
    return out


def extract_mymedisage(html: str, url: str) -> dict:
    out = {"images": [], "name": None, "specialty": None, "address": None}
    soup = BeautifulSoup(html, "html.parser")
    if "Ravi Rathore" in html:
        out["name"] = "Dr. Ravi Rathore"
        out["specialty"] = "Pediatrician"
    for s in soup.find_all("script", type="application/ld+json"):
        c = s.string or (s.contents[0] if s.contents else "")
        if not c:
            continue
        c = clean_json(c)
        try:
            ld = json.loads(c)
        except json.JSONDecodeError:
            continue
        if isinstance(ld, dict) and ("Ravi" in str(ld) or "Pediatrician" in str(ld)):
            if ld.get("image"):
                out["images"].append(ld["image"] if isinstance(ld["image"], str) else ld.get("image", {}).get("url", ""))
    for img in soup.find_all("img", src=True):
        src = img.get("src", "")
        if "mymedisage" in src and ("profile" in src or "doctor" in src):
            if src.startswith("//"):
                src = "https:" + src
            out["images"].append(src)
    return out


def extract_facebook(html: str, url: str) -> dict:
    """Facebook often requires JS; we only get title/meta if any."""
    out = {"images": [], "name": None, "specialty": None, "address": None}
    if "Dr-Ravi-Rathore" in url or "Dr. Ravi Rathore" in html:
        out["name"] = "Dr. Ravi Rathore"
    soup = BeautifulSoup(html, "html.parser")
    og_image = soup.find("meta", property="og:image")
    if og_image and og_image.get("content"):
        out["images"].append(og_image["content"])
    return out


def merge_record(acc: dict, new: dict):
    """Merge extracted fields into accumulator; dedupe images."""
    if new.get("name"):
        acc["name"] = acc.get("name") or new["name"]
    if new.get("specialty"):
        acc["specialty"] = acc.get("specialty") or new["specialty"]
    if new.get("address"):
        acc["address"] = acc.get("address") or new["address"]
    seen = set(acc.get("images", []))
    for u in new.get("images") or []:
        u = (u or "").strip()
        if u and u not in seen:
            seen.add(u)
            acc.setdefault("images", []).append(u)


def main():
    script_dir = Path(__file__).resolve().parent
    result = {
        "name": CANONICAL["name"],
        "specialty": CANONICAL["specialty"],
        "address": CANONICAL["address"],
        "images": [],
        "sources": [],
    }
    seen_urls = set()

    extractors = [
        ("justdial.com", extract_justdial),
        ("lybrate.com", extract_lybrate),
        ("momcuddle.com", extract_momcuddle),
        ("threebestrated.in", extract_threebestrated),
        ("vinsfertility.com", extract_vinsfertility),
        ("mymedisage.com", extract_mymedisage),
        ("facebook.com", extract_facebook),
    ]

    for url in URLS:
        url = url.strip()
        if not url or url in seen_urls:
            continue
        seen_urls.add(url)
        domain = urlparse(url).netloc.lower().replace("www.", "")
        handler = next((h for d, h in extractors if d in domain), None)
        if not handler:
            print(f"  No extractor for {domain}, skipping.")
            result["sources"].append({"url": url, "scraped": False})
            continue
        print(f"  Fetching {domain}...")
        html = fetch(url)
        if not html:
            result["sources"].append({"url": url, "scraped": False})
            continue
        extracted = handler(html, url)
        merge_record(result, extracted)
        result["sources"].append({"url": url, "scraped": True})

    # Ensure canonical fields
    result["name"] = result.get("name") or CANONICAL["name"]
    result["specialty"] = result.get("specialty") or CANONICAL["specialty"]
    result["address"] = result.get("address") or CANONICAL["address"]
    # Dedupe and drop generic placeholders
    skip_patterns = ("/bg5.jpg", "/detail/bg", "logo.svg", "logo.png")
    result["images"] = [
        u for u in dict.fromkeys(result["images"])
        if u and not any(p in u for p in skip_patterns)
    ]

    out_path = script_dir / "doctor_ravi_rathore.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    print(f"\nSaved: {out_path}")
    print(json.dumps({k: v for k, v in result.items() if k != "sources"}, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
