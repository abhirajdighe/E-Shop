const express = require('express');
require('./db/config')
const User = require('./db/Users')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(cors());

app.post("/register",async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
})

app.post("/login",async (req,resp)=>{
    let user = await User.findOne(req.body).select("-password")
    if(req.body.password && req.body.email){
        if(user){
            resp.send(user)
        }
        else{
            resp.send({result:"NO user found"})
        }
    }
    else{
        resp.send({result:"NO user found"})
    }
    
    
})


app.listen(4000)










// const connectdb = async ()=>{
//     await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
//     const productSchema = new mongoose.Schema({})
//     const product = new mongoose.model('products',productSchema)
//     const data = await product.find();
//     console.warn(data);

// }

// connectdb();

