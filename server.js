const express = require("express");
const cors = require("cors");

const auth = require("./routes/auth");
const checkin = require("./routes/checkin");
const otp = require("./routes/otp");
const setup = require("./routes/setup");
const close = require("./routes/close");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", auth);
app.use("/api/checkin", checkin);
app.use("/api/otp", otp);
app.use("/api/setup", setup);
app.use("/api/close", close);

// Add a root route to avoid "Cannot GET /"
app.get("/", (req, res) => {
  res.json({
    message: "API is running",
    endpoints: [
      "/api/auth",
      "/api/checkin", 
      "/api/otp",
      "/api/setup",
      "/api/close"
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));