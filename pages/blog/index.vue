<template>
  <div class="blog-container">
    <div class="tag">
      <div>标签</div>
      <div>
        <el-tag class="tag-label" v-for="item in tags" :key="item" type="success"><a href="">{{item}}</a></el-tag>
      </div>

    </div>
    <div class="list">
      <div class="type">
        <el-checkbox-group v-model="blogType" @change="checkType">
          <el-checkbox-button v-for="item in allTypes" :label="item.value" :key="item.value" :disabled="!checkedTypes.includes(item.value)">{{item.label}}</el-checkbox-button>
        </el-checkbox-group>
      </div>

      <div class="content">
        <div class="blog" v-for="item in blogs">
          <h3>
            <router-link :to="{ path: '/apis/blog/', query: { id: item._id }}">{{item.title}}</router-link>
          </h3>
          <label>{{item.type}}</label>
          <div class="article">{{item.content}}</div>
          <div class="article-status">
            <span class="article-big"><i class="fa fa-tags"></i>{{item.tags.join(', ')}}</span>
            <span class="article-big"><i class="fa fa-calendar"></i>{{item.calendar}}</span>
            <span class="article-small"><i class="fa fa-thumbs-o-up up"></i></span>
          </div>
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
        x.calendar = moment(x.updateAt).format('YYYY-MM-DD HH:mm:ss')
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
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-content: flex-start;
    align-content: flex-start;
  }

  .tag>div:first-child {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 10px 0;
    border-bottom: solid 1px #666;
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

  .blog {
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 160px;
    padding: 10px 0 0 40px;
  }

  .blog+.blog {
    margin: 10px 0 0 0;
  }

  .blog>h3 {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  h3+label {
    padding: 0 0 0 10px;
  }

  .article {
    height: 60px;
    padding: 20px 0;
    font-size: 14px;
  }

  .article-status {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row;
    flex-flow: row;
    justify-content: space-around;
  }

  .article-small {
    flex: 1
  }

  .article-big {
    flex: 2
  }

  .up {
    cursor: pointer;
  }
</style>