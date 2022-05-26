const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    // _id: ObjectId
    userId: {type:Number, required:true},
    title: {type:String, required:true},
    body: {type:String, required:true}
})

const commentSchema = new Schema({
    // _id: ObjectId
    postId: {type:mongoose.Schema.Types.ObjectId, ref:'posts'},
    name: {type:String, required:true},
    email: {type:String, required:true},
    body: {type:String, required:true},
})

const Posts = mongoose.model('posts', postSchema, 'posts');
const Comments = mongoose.model('comments', commentSchema, 'comments');

const mySchemas = {'Posts':Posts, 'Comments':Comments};

module.exports = mySchemas;