const express = require("express");
const router = express.Router();

//------------ Importing Controllers ------------//
const ClaudioController = require("../controllers/ClaudioController");

router.get("/", (req, res) => {
  res.send("Claudio API is working! 🚀");
});

router.get("/balances/:address", ClaudioController.getBalance);

module.exports = router;
