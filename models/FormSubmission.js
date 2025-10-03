const mongoose = require("mongoose");

const formSubmissionSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
} , {timestamps : true});

module.exports = mongoose.model("FormSubmission", formSubmissionSchema);