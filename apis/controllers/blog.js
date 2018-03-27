import * as Router from 'koa-router'
import Blog from '../models/blog'


let router = Router({
  prefix: '/apis'
});

router.get('/blog/publish', async (ctx, next) => {
  console.log(ctx.request);
  ctx.body = {
    status: 'success'
  }
});

router.post('/blog/publish', async (ctx, next) => {
  console.log(ctx.request.body);
  let { title, tags, type, content, isPublic, status = 0, storeAt = new Date(), updateAt = new Date() } = ctx.request.body;
  let doc = await Blog.create({ title, tags, type, content, isPublic, status, storeAt, updateAt });
  ctx.body = {
    status: 'success',
    doc
  }
});


router.post('/blog/draft', async (ctx, next) => {
  console.log(ctx.request.body);
  let { title, tags, type, content, isPublic, status = 1, storeAt = new Date(), updateAt = new Date() } = ctx.request.body;
  let doc = await Blog.create({ title, tags, type, content, isPublic, status, storeAt, updateAt });
  ctx.body = {
    status: 'success',
    doc
  }
});

module.exports = router;