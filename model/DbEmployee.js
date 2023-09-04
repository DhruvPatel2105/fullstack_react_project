const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  joiningDate: String,
  title: String,
  department: String,
  empType: String,
  CurrentStatus: {
    type: Number,
    default: 1,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
