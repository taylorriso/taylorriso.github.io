# T. Riso Consulting Website

A modern React website for T. Riso Consulting - Marketing for AEC professionals.

## Setup

1. Install Node.js (v18 or higher recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Adding Images

### Taylor's Headshot
Place the headshot image at:
```
public/images/taylor-headshot.jpg
```

### Client Logos
Place client logos in:
```
public/images/clients/
```
Name them `client-1.png` through `client-10.png` (or update the array in `src/components/Clients.jsx`).

Recommended format: PNG with transparent background, ~200x80px.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for traditional hosting.

## Project Structure

```
├── public/
│   ├── images/
│   │   ├── taylor-headshot.jpg
│   │   └── clients/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
