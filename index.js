const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/StudentRoutes');
const cors = require("cors");
const app = express();
const formRoutes = require("./routes/FormRoutes");
const AttendanceRoutes = require("./routes/AttendanceRoutes"); 
const Atttendance = require("./routes/Atttendance"); 
const MarkAttendanceRoutes = require("./routes/MarkAttendance"); 
const userRoutes = require("./routes/UserdataRoutes"); 
const historyRoutes = require('./routes/History');

app.use(cors({
  origin: "http://localhost:5173",  // <-- Frontend origin
  credentials: true
}));
app.use(express.json());
app.use("/api", formRoutes);
app.use("/api", AttendanceRoutes);
app.use("/api", Atttendance);
app.use("/api", MarkAttendanceRoutes);

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Tracko", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });


// Use student routes
app.use('/api/students', studentRoutes);
app.use("/api/user", userRoutes);
app.use("/api", historyRoutes);


// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
