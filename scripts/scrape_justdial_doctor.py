#!/usr/bin/env python3
"""
Scrape doctor/business listing data from a JustDial URL.
Uses requests + BeautifulSoup; extracts JSON-LD (Physician, Review summary).
No browser required. Run: python scrape_justdial_doctor.py [url]
"""

import json
import re
import sys
from pathlib import Path

import requests
from bs4 import BeautifulSoup

DEFAULT_URL = (
    "https://www.justdial.com/Ujjain/"
    "Dr-Ravi-Rathores-Child-Care-And-Advanced-Vaccination-Center-Near-Ss-Hospital-Freeganj-Ujjain/"
    "9999PX734-X734-170926060156-J6R8_BZDET"
)


def scrape_justdial_listing(url: str) -> dict:
    """Fetch and parse a JustDial listing page; return combined doctor data."""
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    r = requests.get(url, headers=headers, timeout=15)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "html.parser")

    result = {"source_url": url}

    # Fix JSON with invalid control characters
    def clean_json_string(s: str) -> str:
        s = s.strip().replace("\\/", "/")
        return re.sub(r"[\x00-\x1f\x7f]", " ", s)

    for script in soup.find_all("script", type="application/ld+json"):
        content = script.string if script.string else (script.contents[0] if script.contents else "")
        if not content:
            continue
        content = clean_json_string(content)
        try:
            obj = json.loads(content)
        except json.JSONDecodeError:
            continue

        if isinstance(obj, dict):
            if obj.get("@type") == "Physician":
                result["physician"] = obj
            elif obj.get("@type") == "Review" and "itemReviewed" in obj:
                result["review_summary"] = obj
            elif obj.get("@type") == "BreadcrumbList":
                result["breadcrumbs"] = obj
        elif isinstance(obj, list):
            for item in obj:
                if isinstance(item, dict) and item.get("@type") == "Physician":
                    result["physician"] = item
                    break

    # Title from page
    title = soup.find("title")
    if title:
        result["page_title"] = title.get_text().strip()
    h1 = soup.find("h1")
    if h1:
        result["heading"] = h1.get_text().strip()

    return result


def main():
    url = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_URL
    print("Scraping:", url)
    data = scrape_justdial_listing(url)
    out_path = Path(__file__).parent / "justdial_doctor_data.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Saved to:", out_path)
    print(json.dumps(data, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
