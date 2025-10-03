const express = require("express");
const router = express.Router()
const Attendance = require("../models/MarkAttendance");

router.post('/mark-Attendance' , async(req , res) => {
    const { attendance } = req.body;

    try{
        // const newSubmission = new Attendance({rollNo , name , status});
        // await newSubmission.save();
        //The above method is good if we only have to insert one input at a time
        
        //But now , as we have to insert all the elements of that array , So ,
        await Attendance.insertMany(attendance);
        res.status(201).json({message : "Attendance Data Saved Successfully"});
    } catch(error){
        console.log("error on saving data" , error);
        res.status(500).json({message : "Failed to save the data"});
    }
});

module.exports = router;