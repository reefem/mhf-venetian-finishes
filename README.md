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

- **Booking buttons:** every "Book Now" / "Enquire" button currently opens an Instagram DM (`https://ig.me/m/mhfvenetianfinishes`). Once the WhatsApp number is confirmed, replace that link in `index.html` with `https://wa.me/<number, digits only, e.g. 1403...>?text=Hi%20MHF%20Venetian%20Finishes%2C%20I%27d%20like%20a%20free%20quote.`
- **Gallery:** the `#work` section. Tiles are placed with the `g-a` to `g-g` grid areas in `styles.css`.
- **Socials:** Instagram, Facebook and TikTok links are in the contact section and the footer.
- After editing CSS/JS, bump the `?v=` number on the links in `index.html` so browsers fetch the new version.
