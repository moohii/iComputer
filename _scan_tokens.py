# -*- coding: utf-8 -*-
"""Report custom properties that are referenced but never defined."""
import re
from pathlib import Path

css_files = list(Path("css").glob("*.css"))
defined = set()
used = {}
for path in css_files:
    text = path.read_text(encoding="utf-8")
    defined.update(re.findall(r"(--[a-zA-Z0-9-_]+)\s*:", text))
    for m in re.finditer(r"var\((--[a-zA-Z0-9-_]+)", text):
        used.setdefault(m.group(1), set()).add(path.name)

missing = {k: v for k, v in used.items() if k not in defined}
for name in sorted(missing):
    print(f"{name}: {', '.join(sorted(missing[name]))}")
