const express = require('express');
const mongoose = require('mongoose');
const Grievance = require('./models/Grievance');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/grievance', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// app.route('/api/grievance', async (req, res) => {
//     try {
//         const { name, location, comments, phone, email } = req.body;
//         const newGrievance = new Grievance({ name, location, comments, phone, email });
//         await newGrievance.save();
//         res.status(201).send('Grievance submitted successfully');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// });

app.post('/api/grievance', async (req, res) => {
    try {
      const { name, location, comments, phone, email } = req.body;
  
      // Validate the input
      if (!name ||!location ||!comments ||!phone ||!email) {
        return res.status(400).send('Missing required field');
      }
  
      // Create and save the new grievance
      const newGrievance = new Grievance({ name, location, comments, phone, email });
      await newGrievance.save();
  
      // Send a success response
      res.status(201).send('Grievance submitted successfully');
    } catch (err) {
      // Log and send an error response
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
