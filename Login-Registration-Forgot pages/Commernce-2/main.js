const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

// ✅ Middleware setup
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Import routes
const registerRouter = require("./Register");
const loginRouter = require("./Login");
const logoutRouter = require("./routes/Logout");
const dashboardRouter = require("./routes/Dashboard");
const forgotRouter = require("./forgot");


// ✅ Use routes
app.use("/v1", registerRouter);
app.use("/v1", loginRouter);
app.use("/v1", logoutRouter);
app.use("/v1", dashboardRouter);
app.use("/v1", forgotRouter);


// ✅ Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
