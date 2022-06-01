const express = require("express")
require("dotenv").config()
const app = express()

// routers
const authRouter = require("./routes/authRouter")
const clientRouter = require("./routes/clientRouter")

app.use("/auth", authRouter)
app.use("/client", clientRouter)

// TODO: remove later. just a test
app.get("/", (req, res) => {
  res.send("Hello World")
})

console.log(process.env.PORT)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
