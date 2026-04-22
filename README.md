# new-kevenparent-site

Express starter for a personal landing page with server-rendered views.

## Run locally

```bash
npm install
npm run dev
```

Or run it without watch mode:

```bash
npm start
```

The app listens on `PORT` if provided, otherwise `3000`.

## Structure

- `server.js` - Express entry point
- `views/` - EJS templates
- `public/` - static assets like CSS, images, and scripts

## Routes

- `/` - landing page view
- `/health` - JSON health check
