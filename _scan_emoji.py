# -*- coding: utf-8 -*-
from pathlib import Path

files = list(Path('.').glob('*.html')) + list(Path('services').glob('*.html'))
for f in files:
    for i, line in enumerate(f.read_text(encoding='utf-8').splitlines(), 1):
        chars = [c for c in line if ord(c) >= 0x1F000 or c in '☼☾✓✔☰']
        if chars:
            joined = ''.join(chars)
            print(f'{f}:{i}: {joined} | {line.strip()[:160]}')
