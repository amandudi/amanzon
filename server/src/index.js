require("dotenv").config({path:__dirname+"/config/.env"})
require("./config/db")
const express   = require("express");
const app       = express();
app.use(express.json());
app.listen(process.env.PORT)