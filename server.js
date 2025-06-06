const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const fs = require("fs");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(cors());
app.use(express.json());

app.use("/api/posts", require("./routes/posts"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
