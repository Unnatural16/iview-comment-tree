(function(e){function t(t){for(var o,a,s=t[0],c=t[1],u=t[2],m=0,p=[];m<s.length;m++)a=s[m],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/iview-comment-tree/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push(["deb2","chunk-vendors"]),n()})({"002d":function(e,t){e.exports=iview},"179a":function(e,t,n){},"784b":function(e,t,n){"use strict";n("9e9c")},"8bbf":function(e,t){e.exports=Vue},"9e9c":function(e,t,n){},dc57:function(e,t,n){"use strict";n("179a")},deb2:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("8bbf"),r=n.n(o),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("iview-comment-tree",{staticClass:"middle",attrs:{comments:e.comments},on:{"on-comment":e.reply}})],1)},a=[],s={name:"App",data:function(){return{comments:[{username:"userA",content:"hello",createTime:Date.now()},{username:"userB",content:"test",createTime:Date.now(),replyComments:[{username:"userB",content:"How are you",createTime:Date.now()}]}]}},methods:{reply:function(e){var t={content:e.content,username:"anonymous",createTime:Date.now()};null!=e.reply?(Array.isArray(e.reply.replyComments)||this.$set(e.reply,"replyComments",[]),e.reply.replyComments.push(t)):this.comments.push(t),window.localStorage&&window.localStorage.setItem("IviewCommentExample",JSON.stringify(this.comments))}},created:function(){if(window.localStorage){var e=JSON.parse(window.localStorage.getItem("IviewCommentExample"));null!=e&&(this.comments=e)}}},c=s,u=(n("784b"),n("2877")),l=Object(u["a"])(c,i,a,!1,null,"65e11691",null),m=l.exports,p=n("002d"),d=n.n(p),f=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("i-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:e.placeholders},model:{value:e.inputComment,callback:function(t){e.inputComment=t},expression:"inputComment"}}),n("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[n("Button",{staticStyle:{"margin-right":"10px"},on:{click:e.cancel}},[e._v("取消")]),n("Button",{attrs:{type:"primary",round:""},on:{click:e.commitComment}},[e._v("确定")])],1),n("iview-comment-tree-inner",{attrs:{comments:e.comments}})],1)}),h=[],y=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("List",{attrs:{"item-layout":"vertical",size:"small",split:!1}},e._l(e.pageComments,(function(t){return n("ListItem",{key:t._id},[n("ListItem",[n("Avatar",{attrs:{size:"small",src:t.avatar,icon:"ios-person"}}),e._v(" "),n("span",{staticStyle:{color:"#2d9aff"}},[e._v(e._s(t.username))]),n("li",{staticStyle:{"margin-left":"26px"}},[e._v(e._s(t.content))]),n("template",{slot:"action"},[n("li",{staticStyle:{cursor:"default"}},[n("Icon",{attrs:{type:"ios-calendar-outline"}}),e._v(" "+e._s(e.RenderTime(t.createTime))+" ")],1),t.replyComments&&t.replyComments.length>0?n("li",{staticClass:"action-button"},[n("span",{staticClass:"button",on:{click:function(n){return e.unfold(t)}}},[n("Icon",{attrs:{type:e.unfoldItem==t?"md-arrow-dropup":"md-arrow-dropdown"}}),e._v(e._s(e.unfoldItem==t?"隐藏":"显示"+t.replyComments.length+"条")+"回复")],1)]):e._e(),n("li",{staticClass:"action-button"},[n("span",{staticClass:"button",on:{click:function(n){return e.showCommentInput(t)}}},[n("Icon",{attrs:{type:"ios-chatbubbles-outline"}}),e._v(" 回复")],1)])])],2),t.replyComments&&e.unfoldItem==t?n("div",{staticStyle:{margin:"0 0 0 30px"}},[n("iview-comment-tree-inner",{attrs:{comments:t.replyComments}})],1):e._e(),n("Divider")],1)})),1),e.comments&&e.comments.length>e.pageSize?n("Page",{staticStyle:{textAlign:"center"},attrs:{total:e.comments?e.comments.length:0,"page-size":e.pageSize,current:e.pageIndex},on:{"update:current":function(t){e.pageIndex=t}}}):e._e()],1)}),v=[],g=(n("fb6a"),{name:"IviewCommentTreeInner",inject:["pageSize","RenderTime","showCommentInput"],props:{comments:Array},data:function(){return{unfoldItem:{},pageIndex:1}},computed:{pageComments:function(){var e,t=this.pageIndex,n=this.pageSize;return(null===(e=this.comments)||void 0===e?void 0:e.slice((t-1)*n,t*n))||[]}},methods:{unfold:function(e){this.unfoldItem=e}}}),w=g,b=(n("dc57"),Object(u["a"])(w,y,v,!1,null,"f60c1c12",null)),C=b.exports,_={name:"IviewCommentTree",components:{IviewCommentTreeInner:C},props:{pageSize:{type:Number,default:10,validate:function(e){return!isNaN(e)&&e>0}},comments:{type:Array,default:function(){return[{_id:"aaa",username:"userA",content:"hello",createTime:Date.now(),replyComments:[{_id:"bbb",username:"userB",content:"How are you",createTime:Date.now(),replyComments:[]}]},{_id:"zzz",username:"userB",content:"test",createTime:Date.now(),replyComments:[]}]}},defaultPlaceholder:{type:String,default:"写下你的评论"},RenderTime:{type:Function,default:function(e){e=new Date(e);var t=(new Date-e)/1e3;return t<1?"刚刚":t<60?Math.round(t)+"秒前":t<3600?Math.round(t/60)+"分钟前":t<86400?Math.round(t/3600)+"小时前":e.toLocaleDateString()}}},computed:{placeholders:function(){var e;return null!=(null===(e=this.reply)||void 0===e?void 0:e.username)?"@"+this.reply.username+":":this.defaultPlaceholder}},data:function(){return{inputComment:"",pageIndex:1,reply:null}},provide:function(){return{pageSize:this.pageSize,RenderTime:this.RenderTime,showCommentInput:this.showCommentInput}},methods:{cancel:function(){this.inputComment="",this.reply=null},commitComment:function(){this.inputComment?this.$emit("on-comment",{content:this.inputComment,reply:this.reply}):this.$warning&&this.$Message.warning({background:!0,content:"评论信息不能为空！"}),this.inputComment=""},showCommentInput:function(e){this.reply=e}}},I=_,S=Object(u["a"])(I,f,h,!1,null,null,null),x=S.exports;x.install=function(e){return e.component(x.name,x)};var T=x;r.a.config.productionTip=!1,r.a.use(d.a),r.a.use(T),new r.a({render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.a0d48fb8.js.map