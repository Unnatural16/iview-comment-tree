<template>
  <div id="app">
    <iview-comment-tree
      class="middle"
      :comments="comments"
      @on-comment="reply"
      avatarSize="large"
    />
  </div>
</template>

<script>
// import IviewCommentTree from "../index";

export default {
  name: "App",
  // components: {
  //   IviewCommentTree
  // },
  data() {
    return {
      comments: [
        {
          username: "userA",
          content: "hello",
          createTime: Date.now()
        },
        {
          username: "userB",
          content: "test",
          createTime: Date.now(),
          replyComments: [
            {
              username: "userB",
              content: "How are you",
              createTime: Date.now()
            }
          ]
        }
      ]
    };
  },
  methods: {
    reply: function(event) {
      const reply = {
        content: event.content,
        username: "anonymous",
        createTime: Date.now()
      };
      if (event.reply != null) {
        if (!Array.isArray(event.reply.replyComments)) {
          this.$set(event.reply, "replyComments", []);
        }
        event.reply.replyComments.push(reply);
      } else {
        this.comments.push(reply);
      }
      //缓存
      if (window.localStorage) {
        window.localStorage.setItem(
          "IviewCommentExample",
          JSON.stringify(this.comments)
        );
      }
    }
  },
  created: function() {
    if (window.localStorage) {
      const comments = JSON.parse(
        window.localStorage.getItem("IviewCommentExample")
      );
      if (comments != null) {
        this.comments = comments;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.middle {
  margin: 0 auto;
  padding: 20px;
  background: #F0F0F0;
  max-width: 600px;
}
</style>
