const Termini = require("../models/termini.js");

const getTermini = async (req, res) => {
  try {
    const termini = await Termini.findAll();
    res.json(termini);
  } catch (err) {
    console.error("Greška pri dohvacanju termina:", err);
    res.status(500).json({ error: "Greška pri dohvacanju termina" });
  }
};

module.exports = { getTermini };