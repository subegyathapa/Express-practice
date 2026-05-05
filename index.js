import express from 'express'
import mongoose from 'mongoose'
import { connectDB } from './Config/db.js'
import { Category } from './model/category.js'
import cors from "cors"
import { Blog } from "./model/blog.js"
import categoryRoutes from './routes/categoryRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import authRoutes from './routes/authRoutes.js'
import dotenv from "dotenv"
import multer from 'multer'
import path from 'path'
import { upload } from './middlewares/file.js'
const app = express()
//const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://admin:admin@bloghub.jcajuku.mongodb.net/?appName=Bloghub');
// const connectDB = async () => {
//     try{
//         const res = await mongoose.connect('mongodb+srv://admin:admin@bloghub.jcajuku.mongodb.net/?appName=Bloghub')
//         console.log("connection successful")
//     }
//     catch (err){

//         console.log("error in connection", err)
//     }
// }

dotenv.config()



app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))
app.use(express.json()) // always good to have

// // ADD IT HERE (before routes)
// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; img-src 'self' data:;"
//   );
//   next();
// });

connectDB()
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


app.post('/upload-image',upload.single('image'),function (req, res) {
  try{
    console.log("image from multer",req.file)
    res.json("subegya")
  }
  catch(error){
    console.log(err)
  }
})

app.get('/', (req, res) => {
    res.send('Backened is running')
})
app.get('/subegya', (req, res) => {
    res.json(products)
})

const products = [{
    id: 1,
    name: "product 1"
},
{
    id: 2,
    name: "product 2"
}]
app.get('/product/:id', (req, res) => {
    const id = req.params.id
    console.log(req.params.id)
    res.json(`this is of id ${id}`)
    const newvalue = products.find((item, index) => (
        item.id == id
    ))
})

app.use("/category",categoryRoutes)
app.use("/blog",blogRoutes)
app.use("/auth",authRoutes)

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})