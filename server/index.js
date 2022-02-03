const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

const { db, Color } = require("./db");

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/data/colors", async (req, res, next) => {
  try {
    const colors = await Color.findAll();
    res.json(colors);
  } catch (err) {
    next(err);
  }
});

app.post("/data/new-color", async (req, res, next) => {
  try {
    const newColor = await Color.create({ r: req.body.red, g: req.body.green, b: req.body.blue });
    res.json(newColor);
  } catch (err) {
    next(err);
  }
});

const PORT = 8080;

(async () => {
  await db.sync();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})();

