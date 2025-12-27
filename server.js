const express = require("express");
const cors = require("cors");
const path = require("path");

// Import your route files
const auth = require("./routes/auth");
const checkin = require("./routes/checkin");
const otp = require("./routes/otp");
const setup = require("./routes/setup");
const close = require("./routes/close");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/auth", auth);
app.use("/api/checkin", checkin);
app.use("/api/otp", otp);
app.use("/api/setup", setup);
app.use("/api/close", close);

// Test GET endpoints for each API
app.get("/api/auth", (req, res) => {
  res.json({ 
    message: "Auth API is working!",
    methods: ["POST /api/auth"],
    description: "Use POST method for authentication"
  });
});

app.get("/api/checkin", (req, res) => {
  res.json({ 
    message: "Checkin API is working!",
    methods: ["POST /api/checkin"],
    description: "Use POST method for checkin operations"
  });
});

app.get("/api/otp", (req, res) => {
  res.json({ 
    message: "OTP API is working!",
    methods: ["POST /api/otp"],
    description: "Use POST method for OTP operations"
  });
});

app.get("/api/setup", (req, res) => {
  res.json({ 
    message: "Setup API is working!",
    methods: ["POST /api/setup"],
    description: "Use POST method for setup operations"
  });
});

app.get("/api/close", (req, res) => {
  res.json({ 
    message: "Close API is working!",
    methods: ["POST /api/close"],
    description: "Use POST method for close operations"
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running successfully!",
    endpoints: [
      { path: "/", method: "GET", description: "API Documentation" },
      { path: "/health", method: "GET", description: "Health Check" },
      { path: "/api/auth", method: ["GET", "POST"], description: "Authentication" },
      { path: "/api/checkin", method: ["GET", "POST"], description: "Checkin Operations" },
      { path: "/api/otp", method: ["GET", "POST"], description: "OTP Operations" },
      { path: "/api/setup", method: ["GET", "POST"], description: "Setup Operations" },
      { path: "/api/close", method: ["GET", "POST"], description: "Close Operations" }
    ],
    instructions: "Use GET to test endpoints, POST to submit data"
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({
    error: `Endpoint '${req.method} ${req.originalUrl}' not found`,
    availableEndpoints: [
      "GET /",
      "GET /health",
      "GET /api/auth (for testing)",
      "POST /api/auth",
      "GET /api/checkin (for testing)",
      "POST /api/checkin",
      "GET /api/otp (for testing)",
      "POST /api/otp",
      "GET /api/setup (for testing)",
      "POST /api/setup",
      "GET /api/close (for testing)",
      "POST /api/close"
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: "Internal Server Error",
    message: err.message 
  });
});

// Use Render's port or default to 5000 for local
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`\n📋 Test these URLs in your browser:`);
  console.log(`   http://localhost:${PORT}/`);
  console.log(`   http://localhost:${PORT}/health`);
  console.log(`   http://localhost:${PORT}/api/auth`);
  console.log(`   http://localhost:${PORT}/api/checkin`);
  console.log(`   http://localhost:${PORT}/api/otp`);
  console.log(`   http://localhost:${PORT}/api/setup`);
  console.log(`   http://localhost:${PORT}/api/close`);
});