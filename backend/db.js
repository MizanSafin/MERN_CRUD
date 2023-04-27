const mongoose = require("mongoose");

const connectToDB = async()=>{
    try{
       await mongoose.connect(`mongodb+srv://drmizanurrahman452:dIBtB6tXUeN8moqk@cluster0.xq5bmfn.mongodb.net/?retryWrites=true&w=majority`);
       console.log(`Db is connected`)
    }
    catch(error){
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectToDB;