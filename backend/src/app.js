const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./routes")

app.use(cors({ origin: "*" }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

module.exports = app
