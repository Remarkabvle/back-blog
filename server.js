const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploads folder statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/posts", require("./routes/posts"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
