const express = require("express");
const router = express.Router();
const MarkAttendance = require("../models/MarkAttendance");
const Student = require("../models/Student");

router.post('/mark-attendance', async (req, res) => {
    const { attendance, mode } = req.body;
    try {
        if (mode === "upsert") {
            // Upsert: Insert new records or update existing ones based on rollNo, date, and subject
            for (const record of attendance) {
                const { rollNo, date, subject, status } = record;
                await MarkAttendance.updateOne(
                    { rollNo, date, subject },
                    record,
                    { upsert: true }
                );

                await Student.updateOne(
                    { rollNo, subject },
                    {
                        $inc: { totalLectures: 1 },
                        $set: { subject },
                    },
                    { upsert: true }
                );

                //{ $inc: { totalLectures: 1 } }:  This is the update operation.
                // $inc is a MongoDB operator that increments the value of a field. 
                // Here, it increases the totalLectures field by 1 for the matched student.
                if (status === "present") {
                    await Student.updateOne(
                        { rollNo, subject },
                        {
                            $inc: { attendedLectures: 1 },
                            $set: { subject }
                        },
                        { upsert: true }
                    );
                }
            }
        }
        res.status(200).json({ message: "Attendance marked successfully" });
    }
    catch (error) {
        console.error("Error marking attendance:", error);
        res.status(500).json({ message: "Failed to mark attendance" });
    }
});

router.get('/student-attendance/:rollNo', async (req, res) => {
    try {
        const { rollNo } = req.params;
        
        // Fetch attendance data for this student across all subjects
        const attendanceData = await Student.find({ rollNo: parseInt(rollNo) });
        
        if (!attendanceData || attendanceData.length === 0) {
            return res.status(200).json([]); // Return empty array instead of 404
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

// Add this in your attendance routes file
router.get('/student-attendance/:rollNo', async (req, res) => {
    try {
        const { rollNo } = req.params;
        console.log("Fetching attendance for roll number:", rollNo); // Debug log
        
        // Fetch attendance data for this student across all subjects
        const attendanceData = await Student.find({ rollNo: parseInt(rollNo) });
        
        console.log("Found attendance data:", attendanceData); // Debug log
        
        if (!attendanceData || attendanceData.length === 0) {
            console.log("No attendance data found, returning empty array");
            return res.status(200).json([]);
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
        
        console.log("Sending formatted data:", formattedData); // Debug log
        res.status(200).json(formattedData);
    } catch (error) {
        console.error("Error fetching student attendance:", error);
        res.status(500).json({ message: "Failed to fetch attendance data" });
    }
});

//Upsert is not just for frontend
// Upsert is a database operation. It affects how data is stored in the database, not just how it is shown on the frontend.
// It ensures your database does not have duplicate attendance records for the same student/date/subject.
module.exports = router;