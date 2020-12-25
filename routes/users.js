var express = require("express");
var router = express.Router();
const { logger } = require("../config/logger");
/* GET users listing. */
router.get("/", function(req, res, next) {
    try {
        throw Error("Error is not found");
    } catch (err) {
        logger.error(`error message!, ${err.stack}`);
    }
    console.log("errore");
    res.send("respond with a resource");
});

module.exports = router;
