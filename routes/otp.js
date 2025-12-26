const router = require("express").Router();

router.post("/send", (req, res) => {
  res.json({ otp: "1234" }); // mocked
});

router.post("/verify", (req, res) => {
  if (req.body.otp === "1234") {
    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Invalid OTP" });
  }
});

module.exports = router;
