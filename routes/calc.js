const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  let { a, b, operation } = req.body;
  a = parseInt(a);
  b = parseInt(b);
  if (!a || !b || !operation) {
    return res.status(500).send("Please give all the values");
  }
  switch (operation) {
    case "+":
      return res.status(200).json({
        res: a + b,
      });
    case "-":
      return res.status(200).json({
        res: a - b,
      });
    case "*":
      return res.status(200).json({
        res: a * b,
      });
  }
});

module.exports = router;
