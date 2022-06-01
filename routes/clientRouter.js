const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("Client router")
})

module.exports = router
