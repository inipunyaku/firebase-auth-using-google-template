var express = require("express");
var router = express.Router();
const decodeToken = require("./../middleware");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/loginwithgoogle", decodeToken, function (req, res, next) {
  console.log(req.user);
  return res.json({ data: req.user });
});

module.exports = router;
