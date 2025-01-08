
import mongoose, { Types } from "mongoose";



const postSchema = mongoose.Schema({
 
    Name:String,
    Email:String,
    Subject:String,
    Massage:String
    
    
});

const UserModule = mongoose.model("post", postSchema); 
export default UserModule; 

 