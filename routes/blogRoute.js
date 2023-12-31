/*
 *
 *
 ------->Title: blogs router
 ->Description: this file is to handle all blogs related routes
 ------>Author: Shawon Talukder
 -------->Date: 06/25/2023
 *
 *
 */

// Dependencies
const express = require("express");
const {
    getBlogs,
    getBlogById,
    getBlogByUserId,
    createBlog,
    updateBlog,
    removeBlog,
    blogToDraft
} = require("../controller/blogController");
const checkLogin = require("../middleware/checkLogin");

// Model Scaffolding
const blogRouter = express.Router();

// middleware

// Model Structure

// @ROUTE: GET 
// Read all blogs
blogRouter.get('/', getBlogs);

// @ROUTE: GET 
// Read single blogs
blogRouter.get('/:id', getBlogById);

// @ROUTE: GET 
// Read single blogs
blogRouter.get('/user/:userId', getBlogByUserId);

// @ROUTE: POST 
// CREATE a blog
blogRouter.post('/', checkLogin, createBlog);

// @ROUTE: PATCH 
// CREATE a blog
blogRouter.patch('/:id', checkLogin, updateBlog);

// @ROUTE: DELETE 
// DELETE a blog
blogRouter.delete('/:id', checkLogin, removeBlog);

// admin will change the status if needed
// ROUTE: PATCH
// if there is any issue admin has rights to send mail and change the blog status 
blogRouter.patch('/report/:id', checkLogin, blogToDraft)


// Export Model
module.exports = blogRouter;