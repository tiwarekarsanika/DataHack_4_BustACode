import mongoose from 'mongoose';

const connectDB = async() => {
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser : true,
    }).then(console.log("Connected To MongoDB"))
    .catch(err => {console.error(err)})
}

export default connectDB;