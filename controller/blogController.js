import { Blog } from "../model/blog.js"

export const createBlog = async (req, res) => {
    try {
        const image=req.file
        console.log(image,"image ayo")
        const createdBlog = await Blog.create({
            ...req.body,
            image:image.path

        })
        res.json(createdBlog)
    }
    catch(err){
        console.log(err)
    }
}
export const getAllBlogs=async(req,res)=>{
    const ok =await Blog.find().populate("category")
    //find.populate("category","status") category vitra ko pani variables find garna lai 
    res.json(ok)
}
export const getBlogsByCategory = async(req,res)=>{
    const categoryFromFrontended = req.params.categoryId
    const blogs = await Blog.find({category:categoryFromFrontended})
    res.json(blogs)
}
// export const getBlogsByCategory=async(req,res)=>{
//     const blogs=await Blog.find({category:"69a9280c0a366b601b1b2de6"})
//     res.json(blogs)
// }