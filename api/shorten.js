const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");

const app = express();

const baseUrl = "http:localhost:3000";

app.post("/api/shorten", (req, res) => {
  console.log(req);
  const { longUrl } = req.body; // destructure the longUrl from req.body.longUrl

  // check base url if valid using the validUrl.isUri method
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base URL");
  }

  const urlCode = shortid.generate();
  const shortUrl = baseUrl + "/" + urlCode;
  console.log(shortUrl);
  res.send(shortUrl);
});

module.exports = {
  path: "/api/shorten",
  handler: app
};
