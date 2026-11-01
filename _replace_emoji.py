# -*- coding: utf-8 -*-
"""Replace legacy emoji glyphs in static HTML with the inline SVG icon sprite."""
from pathlib import Path

ICONS = {
    "💬": "i-whatsapp",
    "📍": "i-map-pin",
    "🖥": "i-monitor",
    "📋": "i-copy",
    "🌐": "i-network",
    "🚀": "i-rocket",
    "🛡": "i-shield",
    "🖨": "i-printer",
    "🔍": "i-search",
    "📜": "i-file-text",
    "📐": "i-ruler",
    "💼": "i-briefcase",
    "💻": "i-laptop",
    "💾": "i-hard-drive",
    "📊": "i-chart",
    "📚": "i-book",
    "🇩🇿": "i-flag",
    "🏢": "i-building",
    "🗂": "i-archive",
    "🌍": "i-globe",
    "📡": "i-radio",
    "🛠": "i-wrench",
    "📁": "i-folder",
    "🔒": "i-lock",
    "✓": "i-check",
    "✔": "i-check",
}


def icon(name: str) -> str:
    return (
        '<svg class="icon icon--inline" aria-hidden="true" focusable="false">'
        f'<use href="#{name}"></use></svg>'
    )


def main() -> None:
    files = list(Path(".").glob("*.html")) + list(Path("services").glob("*.html"))
    total = 0
    for path in files:
        text = path.read_text(encoding="utf-8")
        original = text
        text = text.replace("\ufe0f", "")
        for emoji, name in ICONS.items():
            text = text.replace(emoji, icon(name))
        if text != original:
            path.write_text(text, encoding="utf-8")
            total += 1
            print(f"updated {path}")
    print(f"{total} files updated")


if __name__ == "__main__":
    main()
