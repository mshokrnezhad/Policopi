const { getTestInfo } = require("../../models/test.model")

async function httpGetTestInfo (req, res) {
    return res.status(200).json(getTestInfo());
}

module.exports = { httpGetTestInfo };