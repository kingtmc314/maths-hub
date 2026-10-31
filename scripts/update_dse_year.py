#!/usr/bin/env python3
"""Synchronise the displayed DSE analysis year with the DSE Maths Hub data bundle."""
from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
SOURCE = "https://dsemathshubstat.kingaihome.org/"
SOURCE_ORIGIN = "https://dsemathshubstat.kingaihome.org"


def fetch(url: str) -> str:
    request = Request(url, headers={"User-Agent": "maths-hub-dse-year-sync/1.0"})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8")


def latest_year() -> int:
    html = fetch(SOURCE)
    bundle_match = re.search(r'<script[^>]+src="([^"]*assets/index-[^"]+\.js)"', html)
    if not bundle_match:
        raise RuntimeError("Could not find the DSE Hub JavaScript bundle")
    bundle_url = SOURCE_ORIGIN + bundle_match.group(1)
    bundle = fetch(bundle_url)
    years_match = re.search(r"(?:[A-Za-z_$][\w$]*)=\{paper1:\[(.*?)\],paper2:", bundle)
    if not years_match:
        raise RuntimeError("Could not find available_years in the DSE Hub bundle")
    years = [int(value) for value in re.findall(r'"(20\d{2})"', years_match.group(1))]
    if not years:
        raise RuntimeError("No DSE years were found")
    return max(years)


def main() -> int:
    year = latest_year()
    replacement = f"2012–{year}"
    changed = False
    for filename in ("index.html", "guide.html", "guide.md"):
        path = ROOT / filename
        text = path.read_text(encoding="utf-8")
        updated, count = re.subn(r"2012(?:-|–)20\d{2}", replacement, text)
        if updated != text:
            path.write_text(updated, encoding="utf-8")
            changed = True
            print(f"{filename}: updated {count} year range(s) to {replacement}")
        else:
            print(f"{filename}: already at {replacement}")
    print(f"Latest DSE year detected: {year}; changed={changed}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
