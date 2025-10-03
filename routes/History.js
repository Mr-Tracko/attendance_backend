const express = require('express');
const router = express.Router();
const MarkAttendance = require('../models/MarkAttendance');

router.get("/student/:rollNo/subject/:subject/present-dates", async (req, res) => {
    const rollNo = Number(req.params.rollNo);
    const subject = req.params.subject;
    try {
        const records = await MarkAttendance.find({ rollNo, subject, status: "present" });
        const presentDates = records.map(r => r.date);
        res.json({ presentDates });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch present dates" });
    }
});

module.exports = router;