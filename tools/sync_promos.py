#!/usr/bin/env python3
import json
import re
from pathlib import Path
from urllib.request import Request, urlopen

SITE_URL = "https://mcwpromo.com/"
OUT_FILE = Path(__file__).resolve().parents[1] / "data" / "promos.json"

def fetch_html(url: str) -> str:
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="ignore")

def extract_images(html: str):
    found = re.findall(r'https://[^"\']+\.(?:png|jpg|jpeg|webp)', html, re.I)
    seen = []
    for url in found:
      if url not in seen:
        seen.append(url)
    return seen[:6]

def main():
    data = json.loads(OUT_FILE.read_text(encoding="utf-8"))
    html = fetch_html(SITE_URL)
    images = extract_images(html)
    for idx, promo in enumerate(data.get("promos", [])):
        if idx < len(images):
            promo["banner"] = images[idx]
        promo["updated"] = "Synced from public page"
    OUT_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Updated {len(data.get('promos', []))} promos")

if __name__ == "__main__":
    main()
