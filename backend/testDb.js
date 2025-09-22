const pool = require("./db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("Ne mogu da se povežem:", err);
  else console.log("Uspješno povezano:", res.rows);
  pool.end();
})