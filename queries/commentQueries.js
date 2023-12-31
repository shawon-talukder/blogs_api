/*
 *
 *
 ------->Title: comment queries
 ->Description: this file is to contain all queries about comments database.
 ------>Author: Shawon Talukder
 -------->Date: 07/05/2023
 *
 *
 */

// Dependencies


// Model Scaffolding
const commentQueries = {};

// Model Structure

// @SELECT/GET: comments
// get all comments against blog id.
commentQueries.getCommentsByIdQuery =
    `
        SELECT comments.comment_id, comments.comment_text, (
            SELECT 
                CONCAT(users.firstName,' ',users.lastName)  as fullName 
            FROM users 
            WHERE comments.user_id = users.user_id
        ), comments.user_id, comments.created_at 
        FROM comments
        JOIN users using(user_id)
        WHERE comments.blog_id = $1
        ORDER BY comments.created_at DESC;
    `;

// get single comments against blog id.
commentQueries.getSingleCommentByIdQuery =
    `
        SELECT comments.comment_id, comments.comment_text, (
            SELECT 
                CONCAT(users.firstName,' ',users.lastName)  as fullName 
            FROM users 
            WHERE comments.user_id = users.user_id
        ), comments.user_id, comments.created_at 
        FROM comments
        JOIN users using(user_id)
        WHERE comments.blog_id = $1 AND comments.comment_id=$2;
    `;

// @INSERT/CREATE: comment
commentQueries.createCommentQuery =
    `
        INSERT INTO comments(comment_text, user_id, blog_id) VALUES ($1, $2, $3);
    `;

// @UPDATE: comment text
commentQueries.updateCommentQuery =
    `
        UPDATE comments SET comment_text=$1 WHERE blog_id=$2 AND comment_id=$3;
    `

// @DELETE: delete a comment
commentQueries.deleteCommentQuery =
    `   
        DELETE FROM comments WHERE blog_id=$1 AND comment_id=$2;
    `;

// Export Model
module.exports = commentQueries;