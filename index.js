// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const studentRoutes = require('./routes/StudentRoutes');
// const cors = require("cors");
// const app = express();
// const formRoutes = require("./routes/FormRoutes");
// const AttendanceRoutes = require("./routes/AttendanceRoutes");
// const Atttendance = require("./routes/Atttendance");
// const MarkAttendanceRoutes = require("./routes/MarkAttendance");
// const userRoutes = require("./routes/UserdataRoutes");
// const historyRoutes = require('./routes/History');

// const DB_URL = process.env.MONGODB_URI;

// app.use(cors({
//   origin: "https://attendance-frontend-sooty.vercel.app/",
//   credentials: true
// }));
// app.use(express.json());
// app.use("/api", formRoutes);
// app.use("/api", AttendanceRoutes);
// app.use("/api", Atttendance);
// app.use("/api", MarkAttendanceRoutes);

// // MongoDB Connection
// mongoose.connect(DB_URL, {
//   serverSelectionTimeoutMS: 15000,
//   socketTimeoutMS: 45000,
// })
//   .then(() => console.log(" MongoDB Atlas connected successfully"))
//   .catch(err => {
//     console.error(" Connection error:", err.message);
//   });

// // Use student routes
// app.use('/api/students', studentRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api", historyRoutes);


// // Start server
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });

require('dotenv').config();

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

const DB_URL = process.env.MONGODB_URI;

app.use(cors({
  origin: [
    "https://attendance-frontend-sooty.vercel.app",
    "http://localhost:5173"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use("/api", formRoutes);
app.use("/api", AttendanceRoutes);
app.use("/api", Atttendance);
app.use("/api", MarkAttendanceRoutes);

// MongoDB Connection
mongoose.connect(DB_URL, {
  serverSelectionTimeoutMS: 15000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log(" MongoDB Atlas connected successfully"))
  .catch(err => {
    console.error(" Connection error:", err.message);
  });

// Use student routes
app.use('/api/students', studentRoutes);
app.use("/api/user", userRoutes);
app.use("/api", historyRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});