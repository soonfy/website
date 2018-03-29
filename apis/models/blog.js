import * as moment from 'moment'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

import * as marked from 'marked'
import * as highlight from 'highlight'
marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
})

import Config from '../config/index'

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

// 实例方法
blogSchema.methods.findSimilarType = async function () {
  return await this.model('BLOG').find({ type: this.type });
};

// 模型方法
blogSchema.statics.findSimilarType = async function (type) {
  return await this.find({ type: type });
};
blogSchema.statics.distinctType = async function (params) {
  let _types = await this.distinct('type', params);
  return _types.map(x => {
    let temp = null;
    Config.types.map(y => {
      if (y.value === x) {
        temp = y
      }
    })
    return temp;
  })
};

blogSchema.virtual('calendar').get(function () {
  return moment(this.updateAt).format('YYYY-MM-DD HH:mm:ss');
})
blogSchema.virtual('statusName').get(function () {
  let _status_name = '';
  switch (this.status) {
    case 0:
      _status_name = '已发表';
      break;
    case 1:
      _status_name = '草稿';
      break;
    case 2:
      _status_name = '已删除';
      break;
    default:
      _status_name = '未知状态';
      break;
  }
  return _status_name;
});
blogSchema.virtual('contentMarked').get(function () {
  return marked(this.content);
})

const blogModel = mongoose.model('BLOG', blogSchema, 'blogs');

export default blogModel;