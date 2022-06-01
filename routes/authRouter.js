const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("Auth router")
})

module.exports = router
