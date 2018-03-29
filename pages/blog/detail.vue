<template>
  <section>
    <h3>
      {{blog.title}}
    </h3>
    <label>{{blog.type}}</label>
    <div class="article" v-html="compiledMarkdown"></div>
    <div class="article-status">
      <span class="article-big"><i class="fa fa-tags"></i>{{blog.tags.join(', ')}}</span>
      <span class="article-big"><i class="fa fa-calendar"></i>{{blog.calendar}}</span>
      <span class="article-small"><i class="fa fa-thumbs-o-up up" title="点赞"></i><i class="fa fa-comment-o comment" title="评论"></i></span>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  import marked from 'marked'
  import highlight from 'highlight'
  import 'highlight.js/styles/github.css'

  export default {
    async asyncData(context) {
      let res = await axios.get('/apis/blog/detail/', { params: { id: context.query.id } });
      return res.data;
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.blog.content, { sanitize: true });
      }
    }
  }

</script>

<style scoped lang="less">
  h3 {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  h3+label {
    padding: 0 0 0 10px;
    color: #909090;
  }

  .article {
    border-top: 1px dashed #c0c0c0;
    padding: 40px;
  }

  .article-status {
    margin: 0 40px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row;
    flex-flow: row;
    justify-content: space-around;
    color: #909090;
  }

  .article-small {
    flex: 1;
  }

  .article-big {
    flex: 2;
  }

  .fa+.fa {
    margin: 0 5px 0 10px;
  }
</style>