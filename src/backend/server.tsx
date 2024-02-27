const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your_database_uri' with your actual MongoDB URI)
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your MongoDB schema and model here

// Define routes for searching subjects
app.get('/search/:subjectId', async (req, res) => {
  // Implement your MongoDB query here to fetch data based on subjectId
  // Example: const result = await YourModel.find({ subjectId: req.params.subjectId });

  // Replace the following line with sending the actual result
  res.json({ result: 'Sample Result' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
