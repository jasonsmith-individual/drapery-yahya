# Yahya Drapery — Website (Phase 1: Showcase)

A static showcase website for the shop. Live at:

**https://jasonsmith-individual.github.io/drapery-yahya/**

It is intentionally *not* a working online store yet — no payments, no
orders, no server. That comes later (Phase 2). What works today:

- The full visual site (hero, story, collection, services, visit, footer)
- Collection gallery with category filters and a detail popup per fabric
- WhatsApp / phone / email buttons (using the numbers below)
- "Notify me" email capture (saved in the visitor's own browser for now —
  not sent anywhere until Phase 2 adds a server)

## How to update your shop information

Almost everything editable lives in **one place**: the `CONFIG` object at
the top of [`js/script.js`](js/script.js):

| Setting          | What it is                                          |
|------------------|-----------------------------------------------------|
| `phoneDisplay`   | Phone number shown on the site                      |
| `phoneDial`      | Number used when someone taps it (`tel:` link)      |
| `whatsappNumber` | WhatsApp number, digits only with country code      |
| `email`          | Email shown on the site                             |
| `address`        | Shop address                                        |
| `hours`          | Opening hours                                       |

The fabric catalogue is the `FABRICS` list in the same file — add, remove
or edit fabrics and the gallery updates itself. Each fabric's `swatch`
value is the name of a CSS swatch style in `css/styles.css` (later these
can be replaced with real photos).

## How changes go live

Every commit pushed to the `main` branch is published automatically by
GitHub Pages (usually within a minute or two).

## Tech

Plain HTML + CSS + JavaScript. No build step, no dependencies to install —
which makes moving it to a real web server later (Phase 2: actual selling,
accounts, database) straightforward.
