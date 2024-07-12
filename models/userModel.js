import mongoose from 'mongoose';

const { Schema }= mongoose;

const userSchema= new Schema({
    adSoyad:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    telefon:{
        type: String,
        required: true,
    },
    adres:{
        type: String,
        required: true,
    },
},
{ 
    timestamps:true
}
);

const User = mongoose.model('User', userSchema);

export default User;