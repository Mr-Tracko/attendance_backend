const mongoose = require("mongoose");
const Student = require("./models/Student"); 
require("dotenv").config();
console.log("Mongo URI loaded:", !!process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// ✅ Sample student data
const sampleStudents = [
  { rollNo: 1, name: "Aarav Mehta", section: "CSE-A", year: "2nd" },
  { rollNo: 2, name: "Ishita Kapoor", section: "CSE-A", year: "1st" },
  { rollNo: 3, name: "Rohit Sharma", section: "CSE-A", year: "3rd" },
  { rollNo: 4, name: "Priya Singh", section: "CSE-A", year: "2nd" },
  { rollNo: 5, name: "Karan Patel", section: "CSE-B", year: "1st" },
  { rollNo: 6, name: "Neha Verma", section: "CSE-B", year: "2nd" },
  { rollNo: 7, name: "Ananya Gupta", section: "CSE-B", year: "3rd" },
  { rollNo: 8, name: "Vikram Joshi", section: "CSE-B", year: "2nd" },
  { rollNo: 9, name: "Sanya Yadav", section: "IT-A", year: "3rd" },
  { rollNo: 10, name: "Manish Kumar", section: "IT-A", year: "1st" },
  { rollNo: 11, name: "Sneha Reddy", section: "IT-A", year: "2nd" },
  { rollNo: 12, name: "Arjun Mehta", section: "IT-A", year: "1st" },
  { rollNo: 13, name: "Maya Sharma", section: "IT-B", year: "3rd" },
  { rollNo: 14, name: "Amit Bhatt", section: "IT-B", year: "2nd" },
  { rollNo: 15, name: "Pooja Arora", section: "IT-B", year: "1st" },
  { rollNo: 16, name: "Rajiv Singh", section: "IT-B", year: "2nd" },
  { rollNo: 17, name: "Tanya Verma", section: "CSE-A", year: "3rd" },
  { rollNo: 18, name: "Shivansh Gupta", section: "CSE-B", year: "1st" },
  { rollNo: 19, name: "Simran Kaur", section: "IT-A", year: "2nd" },
  { rollNo: 20, name: "Gaurav Chauhan", section: "IT-B", year: "3rd" },
  { rollNo: 21, name: "Divya Malhotra", section: "CSE-A", year: "1st" },
  { rollNo: 22, name: "Aryan Kapoor", section: "CSE-A", year: "2nd" },
  { rollNo: 23, name: "Meera Chopra", section: "CSE-A", year: "3rd" },
  { rollNo: 24, name: "Kabir Sharma", section: "CSE-A", year: "1st" },
  { rollNo: 25, name: "Nisha Patel", section: "CSE-B", year: "2nd" },
  { rollNo: 26, name: "Rohan Verma", section: "CSE-B", year: "3rd" },
  { rollNo: 27, name: "Anika Gupta", section: "CSE-B", year: "1st" },
  { rollNo: 28, name: "Varun Joshi", section: "CSE-B", year: "2nd" },
  { rollNo: 29, name: "Tanvi Yadav", section: "IT-A", year: "3rd" },
  { rollNo: 30, name: "Harsh Kumar", section: "IT-A", year: "1st" },
  { rollNo: 31, name: "Aditi Reddy", section: "IT-A", year: "2nd" },
  { rollNo: 32, name: "Vihan Mehta", section: "IT-A", year: "3rd" },
  { rollNo: 33, name: "Anushka Sharma", section: "IT-B", year: "1st" },
  { rollNo: 34, name: "Kunal Bhatt", section: "IT-B", year: "2nd" },
  { rollNo: 35, name: "Ishaan Arora", section: "IT-B", year: "3rd" },
  { rollNo: 36, name: "Samaira Singh", section: "IT-B", year: "1st" },
  { rollNo: 37, name: "Dev Verma", section: "CSE-A", year: "2nd" },
  { rollNo: 38, name: "Aisha Gupta", section: "CSE-B", year: "3rd" },
  { rollNo: 39, name: "Rahul Kaur", section: "IT-A", year: "1st" },
  { rollNo: 40, name: "Zara Chauhan", section: "IT-B", year: "2nd" },
  { rollNo: 41, name: "Shivam Khanna", section: "CSE-A", year: "3rd" },
  { rollNo: 42, name: "Navya Bhatia", section: "CSE-A", year: "1st" },
  { rollNo: 43, name: "Rishi Ahuja", section: "CSE-A", year: "2nd" },
  { rollNo: 44, name: "Anika Singh", section: "CSE-A", year: "3rd" },
  { rollNo: 45, name: "Arnav Malhotra", section: "CSE-B", year: "1st" },
  { rollNo: 46, name: "Suhana Desai", section: "CSE-B", year: "2nd" },
  { rollNo: 47, name: "Rehan Khan", section: "CSE-B", year: "3rd" },
  { rollNo: 48, name: "Myra Saxena", section: "CSE-B", year: "1st" },
  { rollNo: 49, name: "Krish Menon", section: "IT-A", year: "2nd" },
  { rollNo: 50, name: "Advika Shah", section: "IT-A", year: "3rd" },
  { rollNo: 51, name: "Vivaan Mishra", section: "IT-A", year: "1st" },
  { rollNo: 52, name: "Dia Agarwal", section: "IT-A", year: "2nd" },
  { rollNo: 53, name: "Kabir Lal", section: "IT-B", year: "3rd" },
  { rollNo: 54, name: "Anvi Puri", section: "IT-B", year: "1st" },
  { rollNo: 55, name: "Yuvan Roy", section: "IT-B", year: "2nd" },
  { rollNo: 56, name: "Mira Srivastava", section: "IT-B", year: "3rd" },
  { rollNo: 57, name: "Aarav Mehta", section: "CSE-A", year: "1st" },
  { rollNo: 58, name: "Ishita Kapoor", section: "CSE-B", year: "2nd" },
  { rollNo: 59, name: "Rohit Sharma", section: "IT-A", year: "3rd" },
  { rollNo: 60, name: "Priya Singh", section: "IT-B", year: "1st" },
  { rollNo: 61, name: "Shanaya Agarwal", section: "CSE-A", year: "2nd" },
  { rollNo: 62, name: "Virat Sharma", section: "CSE-B", year: "3rd" },
  { rollNo: 63, name: "Saanvi Mittal", section: "IT-A", year: "1st" },
  { rollNo: 64, name: "Aaditya Khanna", section: "IT-B", year: "2nd" },
  { rollNo: 65, name: "Misha Gupta", section: "CSE-A", year: "3rd" },
  { rollNo: 66, name: "Dhruv Chadha", section: "CSE-B", year: "1st" },
  { rollNo: 67, name: "Ahana Kapoor", section: "IT-A", year: "2nd" },
  { rollNo: 68, name: "Arnav Singh", section: "IT-B", year: "3rd" },
  { rollNo: 69, name: "Kyra Patel", section: "CSE-A", year: "1st" },
  { rollNo: 70, name: "Advait Verma", section: "CSE-B", year: "2nd" }
];

Student.insertMany(sampleStudents)
  .then(() => {
    console.log("Sample students inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(" Error inserting students:", err);
    mongoose.connection.close();
  });
