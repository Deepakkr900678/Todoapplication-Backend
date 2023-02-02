const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/readlinetodoapp")

const express = require("express")
const bodyparse = require("body-parser")
const route = require("./routes/route")
const cors = require("cors")
const app = express()
app.use(bodyparse.json())
app.use(cors());
app.use("/", route)

app.listen(3500, () => console.log("Server is up at 3500 port"))  