import mongoose from "mongoose";




const contactSchema = mongoose.Schema({
    user_name:{type:String },
    phone_number:{type:String },
    email:{type:String },
    date_of_birth:{type:String},
    designation:{type:String}
},{timestamps:true})


const Contact = mongoose.model('contact',contactSchema);


export default Contact;