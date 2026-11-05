# Maple & Ember – Next.js (App Router) + Tailwind v4

## Run
    npm install
    npm run dev        # http://localhost:3000

Put a short muted loop at `public/videos/hero.mp4` for the home hero.

## Structure
    app/            one folder per page: / /menu /reservation /gift-card /gallery /about /contact
    components/     reusable pieces (Navbar, PageHero, MenuTabs, GalleryGrid, ...)
    data/site.js    ALL text, hours, menu, reviews, gallery images - edit here
    app/globals.css colors (@theme) and base styles

Forms are design only (no backend). Images come from Unsplash; swap the URLs in data/site.js
or put your own photos in public/images and use "/images/name.jpg".
