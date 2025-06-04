const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/posts", require("./routes/posts"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
