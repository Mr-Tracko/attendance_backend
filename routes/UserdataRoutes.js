const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/getUserData", async (req, res) => {
    try {
        const { year, branchSection, rollNo , name} = req.query;
        const filter = {}
        if (year) filter.year = year;
        if (branchSection) filter.section = branchSection;
        if (rollNo) filter.rollNo = Number(rollNo);
        if (name) filter.name = name;
        console.log("Filter Used : " , filter);
        const user = await Student.find(filter);
        res.json(user);
        console.log(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error fetching the user" });
    }
})

module.exports = router;