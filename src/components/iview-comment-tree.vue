<template>
  <div>
    <i-input
      v-model="inputComment"
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 5 }"
      :placeholder="placeholders"
    >
    </i-input>
    <div style="text-align: right; margin-top: 10px">
      <Button @click="cancel" style="margin-right: 10px">取消</Button>
      <Button type="primary" round @click="commitComment">确定</Button>
    </div>
    <iview-comment-tree-inner :comments="comments" />
  </div>
</template>

<script>
import IviewCommentTreeInner from "./iview-comment-tree-inner";

export default {
  name: "IviewCommentTree",
  components: {
    IviewCommentTreeInner
  },
  props: {
    pageSize: {
      type: Number,
      default: 10,
      validate: value => !isNaN(value) && value > 0
    },
    comments: {
      type: Array,
      default: () => [
        {
          _id: "aaa",
          username: "userA",
          content: "hello",
          createTime: Date.now(),
          replyComments: [
            {
              _id: "bbb",
              username: "userB",
              content: "How are you",
              createTime: Date.now(),
              replyComments: []
            }
          ]
        },
        {
          _id: "zzz",
          username: "userB",
          content: "test",
          createTime: Date.now(),
          replyComments: []
        }
      ]
    },
    defaultPlaceholder: {
      type: String,
      default: "写下你的评论"
    },
    RenderTime: {
      type: Function,
      default: function(date) {
        date = new Date(date);
        let ms = (new Date() - date) / 1000;
        if (ms < 1) {
          return "刚刚";
        } else if (ms < 60) {
          return Math.round(ms) + "秒前";
        } else if (ms < 60 * 60) {
          return Math.round(ms / 60) + "分钟前";
        } else if (ms < 60 * 60 * 24) {
          return Math.round(ms / 3600) + "小时前";
        } else {
          return date.toLocaleDateString();
        }
      }
    },
    avatarSize: {
      type: [Number, String],
      default: "small"
    }
  },
  computed: {
    placeholders: function() {
      if (this.reply?.username != null) {
        return "@" + this.reply.username + ":";
      } else {
        return this.defaultPlaceholder;
      }
    }
  },
  data() {
    return {
      inputComment: "",
      pageIndex: 1,
      reply: null
    };
  },
  provide() {
    return {
      pageSize: this.pageSize,
      RenderTime: this.RenderTime,
      showCommentInput: this.showCommentInput,
      avatarSize: this.avatarSize
    };
  },
  methods: {
    cancel() {
      this.inputComment = "";
      this.reply = null;
    },
    commitComment() {
      if (!this.inputComment) {
        if (this.$warning) {
          this.$Message.warning({
            background: true,
            content: "评论信息不能为空！"
          });
        }
      } else {
        this.$emit("on-comment", {
          content: this.inputComment,
          reply: this.reply
        });
      }
      this.inputComment = "";
    },
    showCommentInput(reply) {
      this.reply = reply;
    }
  }
};
</script>
