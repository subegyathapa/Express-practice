import express from 'express'
import { Category } from '../model/category.js'
import { getAllCategory } from '../controller/categoryController.js'

const router= express.Router()
router.post("/create", async (req, res) => {
    console.log(req.body)
    //res.json("body received successfully")
    const title = req.body.title
    console.log("this is title")

    const existingTitle = await Category.find({ title })
    console.log(existingTitle,"existing")
    //if (existingTitle.length>0) yo logic ley chai title already existed xa vani inform garxa+naya title halyo vani bad request pani dinxa
    if (existingTitle.length > 0) {
        return res.sendStatus(400).json("title already existed")
        //  return res.Status(400).json("title already existed") // stauts + json msg dinxa

    }
    res.json("create operation")

    res.json(category)

    const category = await Category.create(req.body)
    await category.save();

    res.json(category)

})
// app.post("/blog/create", async (req, res) => {
//   const blog = await Blog.create(req.body)
//   res.json(blog)
// })

// router.get("/getAll",getfunction)
router.get("/getAll",getAllCategory)

router.get("/:id", async (req, res) => {
    // console.log(req.params)
    // res.json(req.params)
    const category = await Category.findById(req.params.id)
    res.json(category)
})

router.put("/update/:id", async (req, res) => {
    const existingTitle = await Category.find({ title })
    console.log(existingTitle)
    //if (existingTitle.length>0) yo logic ley chai title already existed xa vani inform garxa+naya title halyo vani bad request pani dinxa
    if (existingTitle.length>0) {
        return res.sendStatus(400).json("title already existed")
        //  return res.Status(400).json("title already existed") // stauts + json msg dinxa

    }

    // const category = await Category.findByIdAndUpdate(req.params.id,req.body)
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })//updated response show garxa
    // res.json("updated successfully")
    res.json(category)
})

router.delete("/delete/:id", async (req, res) => {

    const category = await Category.findByIdAndDelete(req.params.id)
    res.json("deleted successfully")
})

export default router;
