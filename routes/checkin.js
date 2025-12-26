const router = require("express").Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("photo"), (req, res) => {
  res.json({
    message: "Vendor checked in",
    location: req.body,
    photo: req.file.filename,
    timestamp: new Date()
  });
});

module.exports = router;
