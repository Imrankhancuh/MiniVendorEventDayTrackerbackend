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

app.listen(5000, () => console.log("Backend running on 5000"));
