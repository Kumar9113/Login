const mongoose=require('mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb');
mongoose.connect('mongodb+srv://Kumar:Kumar%409113@cluster0.bprqnop.mongodb.net/',
{useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1} )
.then(()=>{
    console.log('db connecct')
}).catch(err=>console.log(err))

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection