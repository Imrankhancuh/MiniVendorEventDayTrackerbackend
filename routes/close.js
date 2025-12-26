const router = require("express").Router();

router.post("/", (req, res) => {
  if (req.body.otp === "1234") {
    res.json({ message: "Event Closed Successfully" });
  } else {
    res.status(400).json({ error: "Invalid OTP" });
  }
});

module.exports = router;
