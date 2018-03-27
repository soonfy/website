import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  tags: Array,
  type: String,
  content: String,
  isPublic: Boolean,
  status: Number, // 0 - blog, 1 - draft, 2 - delete
  storeAt: Date,
  updateAt: Date,
})

const blogModel = mongoose.model('BLOG', blogSchema, 'blogs');

export default blogModel;