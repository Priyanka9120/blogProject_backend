const express = require('express')
const router = express.Router()
const { createUser, loginUser } = require("../controller/userController")
const { CreateAuthor, AuthorLogin } = require("../controller/authorController")
const { CreateBlog, GetDataBlog, UpdateBlog, DeleteBlog, DeleteByQuery } = require("../controller/blogController")
const { Authentication, Authorisation } = require("../Middleware/auth")


//----------------------user's APIs ----------------------//

//===================== User Registration (Post API) =====================//
router.post("/register", createUser)
//===================== User Login (Post API) =====================//
router.post("/login", loginUser)


//=====================Create Authors(Post API)=====================//
router.post("/authors", CreateAuthor)

//=====================Login Authors(Post API)=====================//
router.post("/login", AuthorLogin)

//=====================Create Blogs(Post API)=====================//
router.post("/blogs", Authentication, CreateBlog)

//=====================Fetch All Blogs Data(Get API)=====================//
router.get("/blogs", Authentication, GetDataBlog)

//=====================Update Blogs Data(Put API)=====================//
router.put("/blogs/:blogId", Authentication, Authorisation, UpdateBlog)

//=====================Delete Blogs Data(Delete API)=====================//
router.delete("/blogs/:blogId", Authentication, Authorisation, DeleteBlog)

//=====================Delete Blog Data By Query Param(Delete API)=====================//
router.delete("/blogs", Authentication, Authorisation, DeleteByQuery)












//---------------------- It will Handle error When You input Wrong Route =====================>>>//
router.all("/**", (req, res) => { return res.status(404).send({ status: false, msg: "This API request is not available!" }) })
//<<<------------------------------------------------------------------->>>//



//----------------------Module Export----------------------//
module.exports = router;
//<<<------------------------------------------------------------------->>>//