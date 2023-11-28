const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://oliverquaye:brainy1234@main.qwltuls.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin',
  }
);

// Connection event handlers
const db = mongoose.connection;

// Event handler for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Event handler for connection error
db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Event handler for disconnected
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

const dbSchema = new mongoose.Schema({
  Student_name:{type:String, required: true},
  Student_Id:{type:String, required:true},
});

const School_DB = new mongoose.model('School_DB',dbSchema);

const new_data = new School_DB({
  Student_name: 'Oliver Quaye',
  Student_Id: '10966166',
});
 
new_data.save()
   .then(()=>{
      console.log("Data saved succesfully to Database.")
   })
   .catch((err)=>{
     console.log("Error saving to Database.",err)
   });
     
   