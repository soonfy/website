<template>
  <div class="blog-container">
    <div class="tag">
      <div>标签</div>
      <div v-if="tags && tags.length > 0">
        <el-tag class="tag-label" v-for="item in tags" :key="item" size="mini" color="#66CCCC"><a href="">{{item}}</a></el-tag>
      </div>
    </div>
    <div class="list">
      <el-checkbox-group v-model="blogType" @change="checkType" fill="#009a61" size="mini">
        <el-checkbox-button v-for="item in allTypes" :label="item.value" :key="item.value" :disabled="!checkedTypes.includes(item.value)">{{item.label}}</el-checkbox-button>
      </el-checkbox-group>

      <div class="content">
        <div v-if="blogs && blogs.length > 0">
          <div class="blog" v-for="item in blogs">
            <h3>
              <router-link :to="{ path: 'detail', query: { id: item._id }}">{{item.title}}</router-link>
            </h3>
            <label>{{item.type}}</label>
            <div class="article">{{item.content}}</div>
            <div class="article-status">
              <span class="article-big"><i class="fa fa-tags"></i>{{item.tags.join(', ')}}</span>
              <span class="article-big"><i class="fa fa-calendar"></i>{{item.calendar}}</span>
              <span class="article-small"><i class="fa fa-thumbs-o-up up" title="点赞"></i><i class="fa fa-comment-o comment" title="评论"></i></span>
            </div>
          </div>
        </div>
        <div v-else class="info">
          没有文章
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';

  export default {
    async asyncData() {
      let [res_types, res_blogs] = await Promise.all([
        axios.get(`/apis/types`),
        axios.get(`/apis/blogs`),
      ]);
      let checkedTypes = res_types.data.types.map(x => x.value),
        blogType = checkedTypes.slice(0);
      res_blogs.data.blogs.map(x => {
        x.calendar = moment(x.updateAt).format('YYYY-MM-DD HH:mm:ss');
      })
      return {
        types: res_types.data.types,
        blogs: res_blogs.data.blogs,
        tags: res_blogs.data.tags,
        checkedTypes,
        blogType
      }
    },
    data() {
      return {
        allTypes: this.allTypes
      }
    },
    head: {
      title: '博客列表',
    },
    methods: {
      async checkType(val) {
        let res = await axios.get(`/apis/blogs`, {
          params: {
            'types': this.blogType.join(',')
          }
        })
        if (res.data.status === 'success') {
          this.blogs = res.data.blogs;
        } else {
          this.$message({
            message: '查询失败',
            type: 'error',
          });
        }
      },
    },
  }

</script>

<style scoped lang="less">
  .blog-container {
    min-height: 600px;
    padding: 20px 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: stretch;
    align-items: stretch;
  }

  .tag {
    flex: 1;
    margin: 0 20px 0 0;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-content: flex-start;
    align-content: flex-start;
    border-right: solid 1px #c0c0c0;
  }

  .tag>div:first-child {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 10px 0;
    border-bottom: solid 1px #c0c0c0;
  }

  .tag-label {
    margin: 0 5px 2px 0;
  }


  .list {
    -webkit-flex: 4;
    flex: 4;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: column;
    flex-flow: column;
  }

  .content {
    margin: 10px 0 0 0;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: column;
    flex-flow: column;
  }

  .info {
    color: #c0c0c0;
    margin: 40px;
  }

  .blog {
    border: 1px solid #c0c0c0;
    border-radius: 10px;
    height: 160px;
    padding: 20px 40px 0 40px;
  }

  .blog+.blog {
    margin: 10px 0 0 0;
  }

  h3 {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  h3>a:hover {
    color: #FFCC00;
  }

  h3+label {
    padding: 0 0 0 10px;
    color: #909090;
  }

  .article {
    border-top: 1px dashed #c0c0c0;
    height: 60px;
    margin: 10px 0;
    padding: 10px 0;
    font-size: 14px;
  }

  .article-status {
    margin: 10px 0 0 0;
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