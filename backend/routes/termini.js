const express = require("express");
const router = express.Router();
const terminiController = require("../controllers/terminiController")

router.get("/a", terminiController.getTermini);


module.exports = router; 
