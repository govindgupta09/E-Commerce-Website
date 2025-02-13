import mongoose from 'mongoose';

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log(`Connected to MongoDB Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`);
    }
};

export default connectDB;