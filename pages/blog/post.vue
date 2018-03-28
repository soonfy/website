<template>
  <div class="post-container">
    <el-form class="blog-form" ref="form" :model="blog" label-width="60px" label-position="left">
      <el-form-item label="标题: ">
        <el-col :span="span">
          <el-input v-model="blog.title" placeholder="标题" clearable></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="分类: ">
        <el-select v-model="blog.type" filterable clearable placeholder="分类">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标签: ">
        <el-col :span="span">
          <el-tag class="tag" :key="tag" v-for="tag in blog.tags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="add-input" v-if="inputVisible" placeholder="回车添加标签" v-model="inputValue" ref="saveTagInput" size="small"
            @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
          <el-button v-else class="add-tag" size="small" @click="showInput">+ 标签</el-button>
        </el-col>
      </el-form-item>

      <markdown-editor v-model="blog.content" preview-class="markdown-body" :highlight="true" :configs="configs"></markdown-editor>

      <el-form-item label="公开: ">
        <el-switch v-model="blog.isPublic" inactive-color="#aaa"></el-switch>
      </el-form-item>

      <el-button-group>
        <el-button type="primary" @click="publish"><i class="fa fa-envelope-open-o"></i>发布</el-button>
        <el-button type="info" plain @click="draft"><i class="fa fa-address-book-o"></i>草稿</el-button>
      </el-button-group>

    </el-form>
  </div>
</template>

<script>
  import axios from 'axios';
  import css from 'simplemde/dist/simplemde.min.css'
  import { markdownEditor } from 'vue-simplemde';
  // import hljs from 'highlight.js';
  // window.hljs = hljs;

  export default {
    data() {
      return {
        span: 12,
        inputVisible: false,
        inputValue: '',
        options: this.allTypes,
        blog: {
          title: '',
          tags: [],
          type: '',
          content: '',
          isPublic: true,
        },
        configs: {
          status: true,
          initialValue: '',
          autoDownloadFontAwesome: false,
          autofocus: true,
          autosave: {
            enabled: false,
            uniqueId: 'soonfy',
            delay: 1000 * 10
          },
          lineWrapping: true,
          placeholder: '支持 markdown 语法',
          spellChecker: false,
          forceSync: true,
          indentWithTabs: true,
          tabSize: 2,
          toolbarTips: true,
          renderingConfig: {
            codeSyntaxHighlighting: true,
            highlightingTheme: 'atom-one-light'
          },
          status: ['autosave', 'lines', 'words', 'cursor', {
            className: 'keystrokes',
            defaultValue: function (el) {
              this.keystrokes = 0
              el.innerHTML = '0 Keystrokes'
            },
            onUpdate: function (el) {
              el.innerHTML = ++this.keystrokes + ' Keystrokes'
            }
          }],
        }
      }
    },
    components: {
      markdownEditor
    },
    methods: {
      handleClose(tag) {
        this.blog.tags.splice(this.blog.tags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.blog.tags.push(inputValue);
          this.blog.tags = _.uniq(this.blog.tags);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      async publish() {
        let res = await axios.post('/apis/blog/publish', this.blog);
        if (res.data.status === 'success') {
          this.$message({
            message: '发布成功，5s 后跳转',
            type: 'success',
          });
          await this.sleep(5);
          this.$router.push('/blog');
        } else {
          this.$message({
            message: '发布失败',
            type: 'error',
          });
        }
      },
      async draft() {
        let res = await axios.post('/apis/blog/draft', this.blog);
        if (res.data.status === 'success') {
          this.$message({
            message: '保存草稿成功，5s 后跳转',
            type: 'success',
          });
          await this.sleep(5);
          this.$router.push('/blog/');
        } else {
          this.$message({
            message: '保存草稿失败',
            type: 'error',
          });
        }
      }
    },
    head: {
      title: '写博客',
    }
  }

</script>

<style scoped lang="less">
  @import '~simplemde/dist/simplemde.min.css';
  /* @import '~github-markdown-css';
  @import '~highlight.js/styles/atom-one-dark.css'; */

  .post-container {
    margin: 0 auto;
    padding: 40px 20px;
  }

  .blog-form {
    padding: 20px 10px;
    background: #ddd;
    border-radius: 10px;
    border: solid 1px #ccc;
    box-shadow: 4px 4px 4px #888;
  }

  .tag+.tag {
    margin: 0 0 0 10px;
  }

  .add-input {
    width: 120px;
  }

  .tag+.add-input {
    margin: 0 0 0 10px;
  }

  .tag+.add-tag {
    margin: 0 0 0 10px;
    width: 90px;
  }
</style>