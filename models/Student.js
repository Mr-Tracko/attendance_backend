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
    year: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Student", studentSchema);
