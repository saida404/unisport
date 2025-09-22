const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

//ruteri - routes
const terminiRoutes = require("./routes/termini");
const landingpageRoutes = require("./routes/landingpage");

app.use("/",landingpageRoutes);
//api rute
app.use("/api/termini", terminiRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server radi na portu ${PORT}`));