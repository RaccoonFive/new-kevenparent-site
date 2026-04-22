const path = require("path");
const express = require("express");

const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (_req, res) => {
  res.json({ ok: true, port });
});

app.get("/", (_req, res) => {
  res.render("home", {
    title: "Keven Parent",
    port,
  });
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
