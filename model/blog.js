import mongoose from "mongoose"
const { Schema } = mongoose;
const blogSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  // category: String,
  category:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  author: String,
  // Date:{
  //   type: Date, 
  //   default: date.now 
  //  },
   //timestamp:true

});

export const Blog = mongoose.model("Blog", blogSchema)