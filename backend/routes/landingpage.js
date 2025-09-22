const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from landing page LANDINGGG backend" });
});

module.exports = router;  
