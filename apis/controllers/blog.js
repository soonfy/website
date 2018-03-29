import * as Router from 'koa-router'
import Blog from '../models/blog'
import * as _ from 'lodash'


let router = Router({
  prefix: '/apis'
});

router.get('/blogs', async (ctx, next) => {
  try {
    console.log(ctx.request.query);
    let { types } = ctx.request.query;
    let docs = [];
    if (typeof types === 'undefined') {
      docs = await Blog.find({ status: 0, isPublic: true });
    } else {
      types = types.split(',');
      docs = await Blog.find({ status: 0, isPublic: true, type: { $in: types } });
    }
    console.log(docs);
    let _types = [], tags = [];
    docs.map(x => {
      x.tags ? tags = _.concat(tags, x.tags) : '';
      x.type ? _types.push(x.type) : '';
    })
    _types = _.uniq(_types);
    tags = _.uniq(tags);
    ctx.body = {
      status: 'success',
      blogs: docs,
      types: _types,
      tags
    }
  } catch (error) {
    console.error(error);
    ctx.body = {
      status: 'error',
      name: error.name,
      message: error.message,
    }
  }
});

router.get('/drafts', async (ctx, next) => {
  try {
    console.log(ctx.request.query);
    let docs = await Blog.find({ status: 1, isPublic: true });
    console.log(docs);
    ctx.body = {
      status: 'success',
      blogs: docs
    }
  } catch (error) {
    console.error(error);
    ctx.body = {
      status: 'error',
      name: error.name,
      message: error.message,
    }
  }
});

router.get('/types', async (ctx, next) => {
  try {
    console.log(ctx.request.query);
    let docs = await Blog.distinctType({ status: 0, isPublic: true });
    console.log(docs);
    ctx.body = {
      status: 'success',
      types: docs
    }
  } catch (error) {
    console.error(error);
    ctx.body = {
      status: 'error',
      name: error.name,
      message: error.message,
    }
  }
});

router.get('/blog/detail', async (ctx, next) => {
  try {
    console.log(ctx.request.query);
    let { id } = ctx.request.query;
    let doc = await Blog.findById(id);
    console.log(doc);
    ctx.body = {
      status: 'success',
      blog: doc
    }
  } catch (error) {
    console.error(error);
    ctx.body = {
      status: 'error',
      name: error.name,
      message: error.message,
    }
  }
});

router.get('/blog/marked', async (ctx, next) => {
  try {
    console.log(ctx.request.query);
    let { id } = ctx.request.query;
    let doc = await Blog.findById(id);
    console.log(doc);
    ctx.body = doc.contentMarked;
  } catch (error) {
    console.error(error);
    ctx.body = {
      status: 'error',
      name: error.name,
      message: error.message,
    }
  }
});

router.post('/blog/publish', async (ctx, next) => {
  console.log(ctx.request.body);
  try {
    let { title, tags, type, content, isPublic, status = 0, storeAt = new Date(), updateAt = new Date() } = ctx.request.body;
    let doc = await Blog.create({ title, tags, type, content, isPublic, status, storeAt, updateAt });
    console.log(doc);
    ctx.body = {
      status: 'success',
      blog: doc
    }
  } catch (error) {
    console.error(error);
    ctx.body = {
      status: 'error',
      name: error.name,
      message: error.message,
    }
  }
});

router.post('/blog/draft', async (ctx, next) => {
  console.log(ctx.request.body);
  try {
    let { title, tags, type, content, isPublic, status = 1, storeAt = new Date(), updateAt = new Date() } = ctx.request.body;
    let doc = await Blog.create({ title, tags, type, content, isPublic, status, storeAt, updateAt });
    console.log(doc);
    ctx.body = {
      status: 'success',
      doc
    }
  } catch (error) {
    ctx.body = {
      status: 'error',
      name: error.name,
      message: error.message,
    }
  }
});

module.exports = router;
