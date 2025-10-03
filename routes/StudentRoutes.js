//this file is for filtering students based on year and section/branchSection for marking attendance based on year and section
const express = require("express");
const router = express.Router();
const Student = require('../models/Student');

// Fetch students with optional filtering by year and section/branchSection
router.get('/getStudents', async (req, res) => {
  try {
    const { year, branchSection } = req.query;
    const filter = {};
    if (year) filter.year = year;
    if (branchSection) filter.section = branchSection;
    const students = await Student.find(filter);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Error fetching students" });
  }
});

// Optional: Fetch all students (testing only)
router.get('/all', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Error fetching students" });
  }
});

module.exports = router;
