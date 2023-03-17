const express = require("express");
const testRouter = require("./test/test.router");
const api = express.Router();

api.use("/test", testRouter);

module.exports = api;