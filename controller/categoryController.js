import { Category } from "../model/category.js"

//export const  getfunction=async (req, res) => {
export const  getAllCategory =async (req, res) => {
    // const category= await Category.find().populate("category")
    const category= await Category.find()
    res.json(category)

}