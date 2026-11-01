# -*- coding: utf-8 -*-
from pathlib import Path
from collections import Counter

files = list(Path('.').glob('*.html')) + list(Path('services').glob('*.html'))
c = Counter()
for f in files:
    for line in f.read_text(encoding='utf-8').splitlines():
        for ch in line:
            if ord(ch) >= 0x1F000 and ch != '\uFE0F':
                c[ch] += 1
for ch, n in c.most_common():
    print(f'{ch} U+{ord(ch):04X} x{n}')
