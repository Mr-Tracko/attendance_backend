const express = require("express");
const router = express.Router();
const MarkAttendance = require("../models/MarkAttendance");
const Student = require("../models/Student");
// Add this to your routes file (e.g., attendanceRoutes.js)
router.get('/student-attendance/:rollNo', async (req, res) => {
    try {
        const { rollNo } = req.params;
        
        // Fetch attendance data for this student across all subjects
        const attendanceData = await Student.find({ rollNo });
        
        if (!attendanceData || attendanceData.length === 0) {
            return res.status(404).json({ message: "No attendance data found" });
        }
        
        // Format the data for frontend
        const formattedData = attendanceData.map(record => ({
            subject: record.subject,
            totalLectures: record.totalLectures || 0,
            attendedLectures: record.attendedLectures || 0,
            percentage: record.totalLectures > 0 
                ? Math.round((record.attendedLectures / record.totalLectures) * 100) 
                : 0
        }));
        
        res.status(200).json(formattedData);
    } catch (error) {
        console.error("Error fetching student attendance:", error);
        res.status(500).json({ message: "Failed to fetch attendance data" });
    }
});

module.exports = router;