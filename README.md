# MHF Venetian Finishes website

Single-page website for **MHF Venetian Finishes**: hand-applied Venetian plaster and marble finishes in Calgary, Alberta.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## View it locally

Double-click `index.html`, or serve the folder:

```bash
python -m http.server 5173
```

then open http://localhost:5173.

## Structure

```
index.html            page content
assets/css/styles.css all styling (colour tokens at the top, taken from the logo)
assets/js/main.js     mobile menu, gallery lightbox, scroll reveals
assets/img/           project photos from the MHF Instagram (+ og.jpg for link previews)
assets/column.svg     column-capital mark, redrawn from the logo
assets/favicon.svg
```

## Updating content

- **WhatsApp:** every "Book Now" / "Enquire" button opens WhatsApp chat with +1 (587) 547-8032 (`https://wa.me/15875478032`) and a pre-filled message. To change the number, find and replace `15875478032` in `index.html`.
- **Gallery:** the `#work` section. Tiles are placed with the `g-a` to `g-g` grid areas in `styles.css`.
- **Socials:** Instagram, Facebook and TikTok links are in the contact section and the footer.
- After editing CSS/JS, bump the `?v=` number on the links in `index.html` so browsers fetch the new version.
