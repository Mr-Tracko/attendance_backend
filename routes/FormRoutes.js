const express = require('express');
const router = express.Router();
const FormSubmission = require('../models/FormSubmission');

router.post('/submit-form', async (req, res) => {
  const { section, year, date } = req.body;
//   req.body contains the data sent from your frontend form.
//    We are destructuring these 3 fields from the body:

  try {
    const newSubmission = new FormSubmission({ section, year, date });
    // This creates a new document/object using your Mongoose model FormSubmission.
    await newSubmission.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form submission:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

module.exports = router;
// This code defines a route for submitting a form. It uses the FormSubmission model to save the data to the database. If successful, it returns a success message; otherwise, it returns an error message.


// Because you're sending (or submitting) new data from the frontend (form) to the backend — specifically to store that data in the MongoDB database.