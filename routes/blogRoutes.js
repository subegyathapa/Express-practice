import express from 'express'
import { createBlog, getAllBlogs,getBlogsByCategory} from '../controller/blogController.js';
import { authMiddleWare } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/file.js';




const router= express.Router()
router.post('/create',upload.single('image'),createBlog)
router.get('/get',authMiddleWare,getAllBlogs)
router.get('/getByCat/:categoryId',getBlogsByCategory)
//router.get('/getById/:Id',getBlogsByCategory) //yesley chai id bata dinxa
//router.get('/getByCat',getBlogsByCategory) //category ko id bata value diyo jasma eutai cat id  xa
export default router;
