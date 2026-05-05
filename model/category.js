import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  title: String, // String is shorthand for {type: String}
  // title:{
  //   type:String,
  //   required:true,
  // },
  description:String,
  status:Boolean,
  product: String,
  category:String,
  
});
export const Category=mongoose.model('Category',categorySchema)