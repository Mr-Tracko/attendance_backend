const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const attendanceSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    rollNo: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['present', 'absent'],
        required: true,
    },
});

module.exports = mongoose.model("MarkAttendance", attendanceSchema);
