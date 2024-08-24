const  mongoose  = require("mongoose")

const mongodbURL="mongodb+srv://mbilalnaeem69:1kbaQAP0MYtQbjn7@cluster0.tapm0vt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = ()=>{
    return mongoose.connect(mongodbURL).then(()=>console.log("DB connected")).catch((e)=>{console.log("Failed to connect" + e)})
}

module.exports = {connectDb}