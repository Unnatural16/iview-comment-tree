import Vue from "vue";
import App from "./App.vue";
import ViewUI from "view-design";
// import "view-design/dist/styles/iview.css"; 已用CDN引入
import IViewCommentTree from "../index";
Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.use(IViewCommentTree);
new Vue({
  render: h => h(App)
}).$mount("#app");
