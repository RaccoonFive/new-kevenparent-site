const http = require("http");

const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Keven Parent | Coming Soon</title>
    <style>
      :root {
        --bg: #0f172a;
        --bg-accent: #1e293b;
        --text: #e2e8f0;
        --muted: #94a3b8;
        --line: rgba(148, 163, 184, 0.25);
        --card: rgba(15, 23, 42, 0.72);
        --highlight: #f59e0b;
        --highlight-soft: rgba(245, 158, 11, 0.15);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        font-family: Georgia, "Times New Roman", serif;
        color: var(--text);
        background:
          radial-gradient(circle at top left, rgba(245, 158, 11, 0.22), transparent 30%),
          radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.18), transparent 35%),
          linear-gradient(135deg, var(--bg), var(--bg-accent));
        display: grid;
        place-items: center;
        padding: 24px;
      }

      .card {
        width: min(720px, 100%);
        background: var(--card);
        border: 1px solid var(--line);
        border-radius: 24px;
        padding: 48px 32px;
        box-shadow: 0 24px 80px rgba(15, 23, 42, 0.45);
        backdrop-filter: blur(12px);
      }

      .eyebrow {
        display: inline-block;
        padding: 8px 12px;
        border-radius: 999px;
        background: var(--highlight-soft);
        color: #fbbf24;
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h1 {
        margin: 20px 0 16px;
        font-size: clamp(2.5rem, 7vw, 4.75rem);
        line-height: 0.96;
      }

      p {
        margin: 0;
        color: var(--muted);
        font-size: 1.1rem;
        line-height: 1.7;
        max-width: 42rem;
      }

      .divider {
        width: 100%;
        height: 1px;
        margin: 32px 0 24px;
        background: linear-gradient(90deg, transparent, var(--line), transparent);
      }

      .status {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        color: var(--text);
        font-size: 0.95rem;
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--highlight);
        box-shadow: 0 0 16px rgba(245, 158, 11, 0.65);
      }

      code {
        padding: 2px 8px;
        border-radius: 999px;
        background: rgba(148, 163, 184, 0.12);
        color: var(--text);
      }

      @media (max-width: 640px) {
        .card {
          padding: 36px 22px;
          border-radius: 20px;
        }

        p {
          font-size: 1rem;
        }
      }
    </style>
  </head>
  <body>
    <main class="card">
      <span class="eyebrow">Server Check</span>
      <h1>New kevenparent website coming soon.</h1>
      <p>
        This lightweight Node.js app is live and ready for VPS testing. If you can see this page,
        your server, port routing, and app process are all working together.
      </p>
      <div class="divider"></div>
      <div class="status">
        <span class="dot" aria-hidden="true"></span>
        <span>Node app online on <code>PORT ${port}</code></span>
      </div>
    </main>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: true, port }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
