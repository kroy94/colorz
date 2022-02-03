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

//take this code and add something on the front end, here is every color made
//create db colors
//get it running, get it working, and see if you can make ac omponent that sks for all the colors on the database 

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

