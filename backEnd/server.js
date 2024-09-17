const express = require('express');

const connectDB = require('./config/connection');
connectDB();

const app = express();

const PORT =  process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});