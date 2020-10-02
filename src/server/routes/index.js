const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ response: "Now, be here a fantastic Tetris ..." }).status(200);
});

module.exports = router;