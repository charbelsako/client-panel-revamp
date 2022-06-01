const express = require("express")

const app = express()

// app.use("/auth", authRouter)
// app.use("/client", clientRouter)

app.get("/", (req, res) => {
  res.send("Hello World")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
