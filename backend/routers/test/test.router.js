const express = require("express");
const { httpGetTestInfo } =  require("./test.contoller")
const testRouter = express.Router();

testRouter.get("/", httpGetTestInfo);

module.exports = testRouter;