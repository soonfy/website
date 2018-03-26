<template>
  <div class="blog-container">
    <el-form ref="form" :model="blog" label-width="60px" label-position="left">
      <el-form-item label="标题: ">
        <el-col :span="span">
          <el-input v-model="blog.name" placeholder="标题" clearable></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="标签: ">
        <el-col :span="span">
          <el-tag class="tag" :key="tag" v-for="tag in blog.tags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="add-input" v-if="inputVisible" placeholder="标签" clearable v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
          <el-button v-else class="add-tag" size="small" @click="showInput">+ 标签</el-button>
        </el-col>
      </el-form-item>

      <!-- <textarea ref="editor"></textarea> -->
      <markdown-editor :content="content" preview-class="markdown-body" :highlight="true" :configs="configs" ref="markdownEditor"></markdown-editor>
    </el-form>
  </div>
</template>

<script>
// import SimpleMDE from 'simplemde'
// import markdownEditor from 'vue-simplemde/src/markdown-editor'
import { markdownEditor } from 'vue-simplemde'; // 导入markdownEditor组件
// import Vue from 'vue'
// import VueSimplemde from 'vue-simplemde'

// Vue.use(VueSimplemde)
import hljs from 'highlight.js';

window.hljs = hljs;

export default {
  data() {
    return {
      span: 12,
      inputVisible: false,
      inputValue: '',
      dynamicTags: [],
      content: '',
      blog: {
        name: '',
        tags: [],
      },
      configs: {              // markdown编辑器配置参数
        status: false,          // 禁用底部状态栏
        initialValue: 'Hello BBK',      // 设置初始值
        renderingConfig: {
          codeSyntaxHighlighting: true,   // 开启代码高亮
          highlightingTheme: 'atom-one-light' // 自定义代码高亮主题
        }
      }
      // configs: {
      //   content: '博文',
      //   element: this.$refs.editor,
      //   autoDownloadFontAwesome: false,
      //   autofocus: true,
      //   autosave: {
      //     enabled: true,
      //     uniqueId: 'soonfy',
      //     delay: 1000 * 10
      //   },
      //   lineWrapping: true,
      //   placeholder: '博文',
      // },


    }
  },
  components: {
    markdownEditor
  },
  mounted() {
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
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  },
  head: {
    title: '写博客',
  }
}

</script>

<style scoped lang="less">
@import '~simplemde/dist/simplemde.min.css';
@import '~github-markdown-css';
@import '~highlight.js/styles/atom-one-dark.css';

.blog-container {
  margin: 0 auto;
  padding: 40px 20px;
}

el-form {
  border-radius: 10px;
  border: solid 1px #333;
  box-shadow: 4px 4px 4px #888;
}

.tag+.tag {
  margin: 0 0 0 10px;
}

.add-input {
  margin: 0 0 0 10px;
  width: 120px;
}

.tag+.add-tag {
  margin: 0 0 0 10px;
  width: 90px;
}
</style>