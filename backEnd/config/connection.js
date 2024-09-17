const mongoose = require ('mongoose');

const mongoURI = 'mongodb://localhost:27017/limitless'; 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || mongoURI);
        console.log('MongoDB connected successfully');

    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
