const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
const api = require("./routers/api");

app.use(cors({ origin: "http://54.227.55.135:8000/" }));
app.use(morgan("combined"));
app.use(express.json());

app.use("/v1", api);

app.use(express.static(path.join(__dirname, ".", "public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "public", "index.html"));
});

module.exports = app;
