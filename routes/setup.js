const router = require("express").Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post(
  "/",
  upload.fields([
    { name: "prePhotos", maxCount: 10 },
    { name: "postPhotos", maxCount: 10 }
  ]),
  (req, res) => {
    res.json({
      success: true,
      prePhotos: req.files.prePhotos,
      postPhotos: req.files.postPhotos,
      preNotes: req.body.preNotes,
      postNotes: req.body.postNotes
    });
  }
);

module.exports = router;
