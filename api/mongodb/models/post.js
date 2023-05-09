import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {type: String, require: true},
    prompt: {type: String, require: true},
    photo: {type: String, require: true},
})

const PostSchema = mongoose.model('PostAI', Post)

export default PostSchema;