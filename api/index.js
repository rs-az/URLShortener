const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");
const bodyParser = require("body-parser");
const app = express();

const baseUrl = "http://localhost:3000";
// app.use(json)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  try {
    console.log(req.body);
    const { longUrl } = req.body; // destructure the longUrl from req.body.longUrl

    // check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
      return res.status(401).json("Invalid base URL");
    }

    const urlCode = shortid.generate();
    const shortUrl = baseUrl + "/" + urlCode;
    console.log(shortUrl);
    res.send("hello");
  } catch (err) {
    console.log(err);
    res.send("Hi");
  }
});

module.exports = {
  path: "/api",
  handler: app
};
