<template>
  <div>
    <List item-layout="vertical" size="small" :split="false">
      <ListItem v-for="item in pageComments" :key="item._id">
        <ListItem>
          <Avatar size="small" :src="item.avatar" icon="ios-person"></Avatar
          >&nbsp;<span style="color: #2d9aff">{{ item.username }}</span>
          <li style="margin-left: 26px">{{ item.content }}</li>
          <template slot="action">
            <li style="cursor: default">
              <Icon type="ios-calendar-outline" />
              {{ RenderTime(item.createTime) }}
            </li>
            <li
              v-if="item.replyComments && item.replyComments.length > 0"
              class="action-button"
            >
              <span class="button" @click="unfold(item)"
                ><Icon
                  :type="
                    unfoldItem == item ? 'md-arrow-dropup' : 'md-arrow-dropdown'
                  "
                />{{
                  unfoldItem == item
                    ? "隐藏"
                    : "显示" + item.replyComments.length + "条"
                }}回复</span
              >
            </li>
            <li class="action-button">
              <span class="button" @click="showCommentInput(item)"
                ><Icon type="ios-chatbubbles-outline" /> 回复</span
              >
            </li>
          </template>
        </ListItem>

        <div
          v-if="item.replyComments && unfoldItem == item"
          style="margin: 0 0 0 30px"
        >
          <iview-comment-tree-inner
            :comments="item.replyComments"
          ></iview-comment-tree-inner>
        </div>
        <Divider />
      </ListItem>
    </List>
    <Page
      :total="comments ? comments.length : 0"
      v-if="comments && comments.length > pageSize"
      :page-size="pageSize"
      :current.sync="pageIndex"
      style="textAlign: center"
    />
  </div>
</template>

<script>
export default {
  name: "IviewCommentTreeInner",
  inject: ["pageSize", "RenderTime", "showCommentInput"],
  props: {
    comments: Array
  },
  data() {
    return {
      unfoldItem: {},
      pageIndex: 1
    };
  },
  computed: {
    pageComments: function() {
      const index = this.pageIndex,
        size = this.pageSize;
      return this.comments?.slice((index - 1) * size, index * size) || [];
    }
  },
  methods: {
    unfold(item) {
      this.unfoldItem = item;
    }
  }
};
</script>

<style lang="stylus" scoped>
.button
  padding 5px
  border-radius 5px
  &:hover
    background #DDDDDD
  &:active
    background #CCCCCC
</style>
