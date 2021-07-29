const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
// string of mongo connection
        const con = await mongoose.connect(process.env.MONGO_URl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log('MongoDB connected');

    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB;