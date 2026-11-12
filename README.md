# Yahya Drapery — Website (Phase 1: Showcase)

A static showcase website for the shop, in **English and Farsi (فارسی)** with a
language toggle in the header (Persian visitors are auto-detected). Live at:

**https://jasonsmith-individual.github.io/drapery-yahya/**

It is intentionally *not* a working online store yet — no payments, no
orders, no server. That comes later (Phase 2). What works today:

- The full visual site (hero, story, collection, services, visit, footer)
- EN / فا toggle with full right-to-left layout in Farsi
- Collection gallery with category filters and a detail popup per fabric
- WhatsApp / phone / email buttons (using the numbers below)
- "Notify me" email capture (saved in the visitor's own browser for now —
  not sent anywhere until Phase 2 adds a server)

## How to update your shop information

- **Contact details & address/hours (both languages):** the `CONFIG` object
  at the top of [`js/script.js`](js/script.js) — it has an `en:` and `fa:`
  block for address/hours.
- **Fabrics:** the `FABRICS` list in the same file. Each fabric has English
  fields plus a `fa:` block with the Farsi name/description. Add, remove or
  edit fabrics and the gallery updates itself in both languages. Each
  fabric's `swatch` value is the name of a CSS swatch style in
  `css/styles.css` (later these can be replaced with real photos).
- **All other site text:** the `I18N.en` / `I18N.fa` dictionaries in
  [`js/i18n.js`](js/i18n.js) — keep both languages in sync.

| Setting (in CONFIG) | What it is                                      |
|---------------------|-------------------------------------------------|
| `phoneDisplay`      | Phone number shown on the site                  |
| `phoneDial`         | Number used when someone taps it (`tel:` link)  |
| `whatsappNumber`    | WhatsApp number, digits only with country code  |
| `email`             | Email shown on the site                         |
| `en.address` / `fa.address` | Shop address (English / Farsi)        |
| `en.hours` / `fa.hours`     | Opening hours (English / Farsi)       |

## How changes go live

Every commit pushed to the `main` branch is published automatically by
GitHub Pages (usually within a minute or two).

## Tech

Plain HTML + CSS + JavaScript. No build step, no dependencies to install —
which makes moving it to a real web server later (Phase 2: actual selling,
accounts, database) straightforward. Farsi uses the
[Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) font; English uses
Fraunces + Manrope.

