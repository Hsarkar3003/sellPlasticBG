
import mongoose, { Types } from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/meenaplasticDATABASE");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    password: String,
    name: String,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        }
    ]
});

const UserModule = mongoose.model("user", userSchema); 
export default UserModule; 

 