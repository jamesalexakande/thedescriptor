# Site updates — The Descriptor

## What changed

### 1. Poetry — each poem on its own page
- `poetry.html` is now a clean index with cards that link out.
- New pages:
  - `poem-demeter.html`
  - `poem-dear-saviour.html`
- "Untitled I" (placeholder excerpt) has been removed.

### 2. Placeholders removed / cleaned
- Removed the "Untitled I" poem card and its placeholder text.
- Removed the word "placeholder" from the Infinite Now cover block on the Poetry page.
- On other pages you still have a few "Untitled …" book/story cards and "Cover placeholder" labels (Books, Fiction, homepage reviews note). Those were left for you to replace with real titles/covers when ready. If you want those stripped too, say the word and I’ll clean them.

### 3. Navbar improvements (same aesthetic)
- Slightly tighter spacing and smaller brand/link type so more items fit cleanly on desktop.
- Proper hamburger / close icons on mobile (instead of the word "Menu").
- Mobile menu closes when you tap a link.
- Dropdown for "Poetry & Essays" is now a real button and works reliably on touch devices (tap to open/close on mobile; hover still works on desktop).
- Small chevron indicator on the dropdown label.
- Poem pages use the same updated header.

## Files to upload / replace
Replace these in your project root (or wherever the static files live):

- `style.css`
- `script.js`
- `poetry.html`
- `poem-demeter.html`  *(new)*
- `poem-dear-saviour.html`  *(new)*

Then update the **header** on every remaining page (`index.html`, `books.html`, `essays.html`, `fiction.html`, `mentorship.html`, `the-vantage.html`, `newsletter.html`, `contact.html`, `publishing-house.html`) using the snippet in `NAV_SNIPPET.html`.

Alternatively, if you have the repo linked to Vercel, just commit these files and push.

## Optional next steps
- Replace remaining "Untitled" book/story cards with real titles or remove the cards until content is ready.
- Swap cover placeholder blocks for actual cover images when you have them.
- Wire the newsletter / contact forms to a real service (Formspree, Buttondown, etc.).
