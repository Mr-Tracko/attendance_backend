const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
    rollNo: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },

    subject: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    totalLectures : {
        type : Number,
        required : true,
        default : 0,
    },
    attendedLectures : {
        type : Number,
        required : true,
        default : 0,
    }
});

module.exports = mongoose.model("Student", studentSchema);
