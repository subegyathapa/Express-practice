import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  FullName: {
    type: String,
   
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    
  }
  
}, {
  timestamps: true
});

export const User= mongoose.model("User", userSchema);