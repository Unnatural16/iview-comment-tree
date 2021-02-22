module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/iview-comment-tree/" : "/",
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.externals({
        "vue": "Vue",
        "view-design": "iview"
      });
    }
  }
};
