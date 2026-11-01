# -*- coding: utf-8 -*-
"""Apply the canonical header/footer and normalize CSS includes across pages."""
import re
from pathlib import Path

ROOT = Path(__file__).parent

HEADER = '''<header class="navbar glass">
    <div class="container nav-inner">
      <a href="{p}index.html" class="brand" aria-label="iComputer Urban Tech DZ">
        <img src="{p}images/logo-mark.svg" alt="" class="brand-logo" width="34" height="34" />
        <span class="brand-text" dir="ltr">iComputer <em>Urban Tech DZ</em></span>
      </a>

      <nav class="nav-links" id="navLinks" aria-label="التنقل الرئيسي">
        <a href="{p}index.html#home" data-nav="home" data-i18n="nav.home">الرئيسية</a>
        <a href="{p}services.html" data-nav="services" data-i18n="nav.services">الخدمات</a>
        <a href="{p}services/office-support.html" data-nav="solutions" data-i18n="nav.solutions">حلول المكاتب</a>
        <a href="{p}index.html#sectors" data-nav="sectors" data-i18n="nav.sectors">القطاعات</a>
        <a href="{p}index.html#about" data-nav="about" data-i18n="nav.about">من نحن</a>
        <a href="{p}knowledge.html" data-nav="knowledge" data-i18n="nav.knowledge">المعرفة</a>
        <a href="{p}booking.html" data-nav="booking" data-i18n="nav.booking">طلب خدمة</a>
      </nav>

      <div class="nav-actions">
        <a href="https://wa.me/rai.med.elamine" target="_blank" rel="noopener" class="nav-wa-btn"
          data-whatsapp-link aria-label="WhatsApp">
          <span aria-hidden="true"><svg class="icon"><use href="#i-whatsapp"></use></svg></span>
          <span data-i18n="nav.whatsapp">واتساب</span>
        </a>

        <div class="lang-switch" role="group" aria-label="Language">
          <button type="button" data-lang="ar" class="active" aria-pressed="true" lang="ar">ع</button>
          <button type="button" data-lang="fr" aria-pressed="false" lang="fr">FR</button>
          <button type="button" data-lang="en" aria-pressed="false" lang="en">EN</button>
        </div>

        <button class="theme-toggle" type="button" data-theme-toggle aria-label="تبديل الوضع اللوني" aria-pressed="true">
          <svg class="icon icon-sun" aria-hidden="true"><use href="#i-sun"></use></svg>
          <svg class="icon icon-moon" aria-hidden="true"><use href="#i-moon"></use></svg>
        </button>

        <button class="menu-btn" id="menuBtn" type="button" aria-label="فتح القائمة" aria-controls="navLinks"
          aria-expanded="false">
          <svg class="icon icon-menu" aria-hidden="true"><use href="#i-menu"></use></svg>
          <svg class="icon icon-close" aria-hidden="true"><use href="#i-close"></use></svg>
        </button>
      </div>
    </div>
  </header>'''

FOOTER = '''<footer class="footer-extended">
    <div class="container footer-extended-grid">
      <div class="footer-col">
        <a href="{p}index.html" class="brand" aria-label="iComputer Urban Tech DZ">
          <img src="{p}images/logo-mark.svg" alt="" class="brand-logo" width="34" height="34" />
          <span class="brand-text" dir="ltr">iComputer <em>Urban Tech DZ</em></span>
        </a>
        <p class="footer-brand-bio" data-i18n="footer.bio">
          دعم تقني للمكاتب والمؤسسات الصغيرة في الجزائر العاصمة: أجهزة، شبكات، طابعات، نسخ احتياطي وتنسيق مستندات.
        </p>
        <div class="footer-social-links">
          <a href="https://wa.me/rai.med.elamine" target="_blank" rel="noopener" class="footer-social-link"
            aria-label="WhatsApp" data-whatsapp-link>
            <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"></use></svg>
          </a>
          <a href="https://www.facebook.com/iComputer.MH" target="_blank" rel="noopener" class="footer-social-link"
            aria-label="Facebook">
            <svg class="icon" aria-hidden="true"><use href="#i-facebook"></use></svg>
          </a>
          <a href="https://www.instagram.com/icomputer.urban_tech_dz/" target="_blank" rel="noopener"
            class="footer-social-link" aria-label="Instagram">
            <svg class="icon" aria-hidden="true"><use href="#i-instagram"></use></svg>
          </a>
          <a href="https://www.tiktok.com/@icomputer_dz" target="_blank" rel="noopener" class="footer-social-link"
            aria-label="TikTok">
            <svg class="icon" aria-hidden="true"><use href="#i-tiktok"></use></svg>
          </a>
          <a href="https://maps.app.goo.gl/o3BeYZaTyHqvPLf27" target="_blank" rel="noopener" class="footer-social-link"
            aria-label="Google Maps">
            <svg class="icon" aria-hidden="true"><use href="#i-map-pin"></use></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4 data-i18n="footer.services">الخدمات</h4>
        <ul>
          <li><a href="{p}services/office-support.html" data-i18n="svc.support.title">دعم المكاتب والمؤسسات</a></li>
          <li><a href="{p}services/computer-maintenance.html" data-i18n="svc.maintenance.title">صيانة وإصلاح الحواسيب</a></li>
          <li><a href="{p}services/office-network.html" data-i18n="svc.network.title">الشبكة وWi-Fi</a></li>
          <li><a href="{p}services/printer-setup.html" data-i18n="svc.printer.title">الطابعات والماسحات</a></li>
          <li><a href="{p}services/new-computer-setup.html" data-i18n="svc.setup.title">تجهيز حاسوب جديد</a></li>
          <li><a href="{p}services/backup-files.html" data-i18n="svc.backup.title">النسخ الاحتياطي والملفات</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 data-i18n="footer.sectors">القطاعات</h4>
        <ul>
          <li><a href="{p}services/accounting-offices.html" data-i18n="sector.accounting.title">مكاتب المحاسبة</a></li>
          <li><a href="{p}services/law-offices.html" data-i18n="sector.law.title">مكاتب المحاماة</a></li>
          <li><a href="{p}services/notary-offices.html" data-i18n="sector.notary.title">الموثقون</a></li>
          <li><a href="{p}services/design-offices.html" data-i18n="sector.design.title">مكاتب الدراسات</a></li>
          <li><a href="{p}services/memoires-etudiants.html" data-i18n="studentService.title">تنسيق مذكرات الطلبة</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 data-i18n="footer.quick">روابط سريعة</h4>
        <ul>
          <li><a href="{p}index.html#home" data-i18n="nav.home">الرئيسية</a></li>
          <li><a href="{p}services.html" data-i18n="nav.services">الخدمات</a></li>
          <li><a href="{p}booking.html" data-i18n="nav.booking">طلب خدمة</a></li>
          <li><a href="{p}knowledge.html" data-i18n="nav.knowledge">المعرفة</a></li>
          <li><a href="{p}index.html#faq">FAQ</a></li>
          <li><a href="{p}quran.html">القرآن الكريم</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom-bar">
      <p>© <span id="year"></span> iComputer Urban Tech DZ — <span data-i18n="footer.rights">جميع الحقوق محفوظة</span></p>
      <div class="footer-legal-links">
        <span data-i18n="footer.location">الجزائر العاصمة</span>
        <a href="{p}booking.html" data-i18n="nav.booking">طلب خدمة</a>
        <a href="{p}knowledge.html" data-i18n="nav.knowledge">المعرفة</a>
      </div>
    </div>
  </footer>'''

SKIP = '<a class="skip-link" href="#main">تخطي إلى المحتوى</a>'
FLOATING = '''<a class="floating-whatsapp"
    href="https://wa.me/rai.med.elamine?text=مرحبًا،%20أرغب%20في%20الاستفسار%20عن%20دعم%20تقني%20لمكتبي."
    target="_blank" rel="noopener" aria-label="WhatsApp" data-whatsapp-link>
    <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"></use></svg>
  </a>'''

pages = [p for p in ROOT.glob("*.html") if p.name != "index.html"] + list((ROOT / "services").glob("*.html"))

for path in pages:
    text = path.read_text(encoding="utf-8")
    is_sub = path.parent.name == "services"
    prefix = "../" if is_sub else ""

    # 1. Replace header
    text = re.sub(
        r'<header class="navbar glass">.*?</header>',
        HEADER.format(p=prefix),
        text,
        count=1,
        flags=re.S,
    )

    # 2. Replace footer
    text = re.sub(
        r'<footer class="(?:footer-extended|footer glass)">.*?</footer>',
        FOOTER.format(p=prefix),
        text,
        count=1,
        flags=re.S,
    )

    # 3. Remove decorative orbs
    text = re.sub(r'[ \t]*<div class="bg-orb[^"]*"></div>\s*\n?', "", text)

    # 4. Skip link + main id
    if 'class="skip-link"' not in text:
        text = text.replace("<body>", "<body>\n  " + SKIP + "\n", 1)
    text = re.sub(r"<main>", '<main id="main">', text, count=1)
    if '<main id="main">' not in text:
        text = re.sub(r'<main\s+([^>]*)>', r'<main id="main" \1>', text, count=1)

    # 5. Remove scroll3d assets
    text = re.sub(r'[ \t]*<link rel="stylesheet" href="[^"]*scroll3d\.css" />\s*\n?', "", text)
    text = re.sub(r'[ \t]*<script src="[^"]*scroll3d\.js"[^>]*></script>\s*\n?', "", text)
    text = text.replace(' data-scroll3d="tilt"', "")

    # 6. Normalize CSS order
    link_re = re.compile(r'[ \t]*<link rel="stylesheet" href="([^"]+)" />\s*\n?')
    links = link_re.findall(text)
    if links:
        page_css = []
        for href in links:
            name = href.rsplit("/", 1)[-1]
            if name in ("style.css", "responsive.css", "b2b.css", "homepage.css"):
                continue
            page_css.append(href)
        ordered = [f'{prefix}css/style.css', f'{prefix}css/b2b.css'] + page_css + [f'{prefix}css/responsive.css']
        block = "\n".join(f'  <link rel="stylesheet" href="{h}" />' for h in ordered) + "\n"
        first = link_re.search(text)
        # remove all then insert at first location
        text = link_re.sub("", text)
        idx = first.start()
        # Recompute index after removals: find insertion point near theme.js
        marker = f'<script src="{prefix}js/theme.js"></script>\n'
        if marker in text:
            text = text.replace(marker, marker + block, 1)
        else:
            text = text[:idx] + block + text[idx:]

    # 7. Floating WhatsApp canonical
    text = re.sub(
        r'<a class="floating-whatsapp".*?</a>',
        FLOATING,
        text,
        count=1,
        flags=re.S,
    )

    # 8. Ensure script.js included
    if 'js/script.js' not in text:
        text = text.replace("</body>", f'  <script src="{prefix}js/script.js"></script>\n</body>', 1)

    path.write_text(text, encoding="utf-8")
    print("updated", path.relative_to(ROOT))
