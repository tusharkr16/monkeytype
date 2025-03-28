const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('./db/db.js'); 
const authRoutes = require('./routes/authRoutes.js');
const sessionRoutes = require('./routes/sessionRoutes.js')


const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); 
app.use('/api/sessions', sessionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })