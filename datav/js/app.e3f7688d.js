(function(e){function a(a){for(var n,r,l=a[0],s=a[1],c=a[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&d.push(t[r][0]),t[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,a=0;a<i.length;a++){for(var o=i[a],n=!0,r=1;r<o.length;r++){var l=o[r];0!==t[l]&&(n=!1)}n&&(i.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},t={app:0},i=[];function l(e){return s.p+"js/"+({page:"page"}[e]||e)+"."+{page:"df9279d3","chunk-2d0ae937":"15e5e59a","chunk-2d2308b7":"02c6b0d0"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={page:1};r[e]?a.push(r[e]):0!==r[e]&&o[e]&&a.push(r[e]=new Promise((function(a,o){for(var n="css/"+({page:"page"}[e]||e)+"."+{page:"4af6d2a2","chunk-2d0ae937":"31d6cfe0","chunk-2d2308b7":"31d6cfe0"}[e]+".css",t=s.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===t))return a()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===n||u===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],m.parentNode.removeChild(m),o(i)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var n=t[e];if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(a,o){n=t[e]=[a,o]}));a.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;c=function(a){u.onerror=u.onload=null,clearTimeout(m);var o=t[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,o[1](d)}t[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/datav/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var m=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"1be0":function(e,a,o){},"257c":function(e,a){var o={version:1,themeName:"avue",theme:{seriesCnt:"4",backgroundColor:"rgba(0,0,0,0)",titleColor:"#516b91",subtitleColor:"#93b7e3",textColorShow:!1,textColor:"#333",markTextColor:"#eee",color:["#83bff6","#23b7e5","#188df0","#564aa3","#a5e7f0","#cbb0e3"],borderColor:"#ccc",borderWidth:0,visualMapColor:["#83bff6","#23b7e5","#188df0","#564aa3"],legendTextColor:"#999999",kColor:"#edafda",kColor0:"transparent",kBorderColor:"#d680bc",kBorderColor0:"#8fd3e8",kBorderWidth:"2",lineWidth:"2",symbolSize:"6",symbol:"emptyCircle",symbolBorderWidth:"2",lineSmooth:!0,graphLineWidth:1,graphLineColor:"#aaa",mapLabelColor:"#000000",mapLabelColorE:"rgb(81,107,145)",mapBorderColor:"#516b91",mapBorderColorE:"#516b91",mapBorderWidth:.5,mapBorderWidthE:1,mapAreaColor:"#f3f3f3",mapAreaColorE:"rgba(165,231,240,1)",axes:[{type:"all",name:"通用坐标轴",axisLineShow:!0,axisLineColor:"#cccccc",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#999999",splitLineShow:!0,splitLineColor:["#eeeeee"],splitAreaShow:!1,splitAreaColor:["rgba(80,36,204,0.05)","rgba(223,35,35,0.02)"]},{type:"category",name:"类目坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!1,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"value",name:"数值坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"log",name:"对数坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"time",name:"时间坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}],axisSeperateSetting:!0,toolboxColor:"#999999",toolboxEmpasisColor:"#666666",tooltipAxisColor:"#f9dbdb",tooltipAxisWidth:1,timelineLineColor:"#8fd3e8",timelineLineWidth:1,timelineItemColor:"#8fd3e8",timelineItemColorE:"#8fd3e8",timelineCheckColor:"#8fd3e8",timelineCheckBorderColor:"rgba(138,124,168,0.37)",timelineItemBorderWidth:1,timelineControlColor:"#213dbc",timelineControlBorderColor:"#8fd3e8",timelineControlBorderWidth:.5,timelineLabelColor:"#8fd3e8",datazoomBackgroundColor:"rgba(0,0,0,0)",datazoomDataColor:"rgba(255,255,255,0.3)",datazoomFillColor:"rgba(167,183,204,0.4)",datazoomHandleColor:"#2472d9",datazoomHandleWidth:"100",datazoomLabelColor:"#333333"}};window.echarts.registerTheme(o.themeName,o.theme)},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("8bbf"),r=o.n(n),t=o("5f72"),i=o.n(t),l=o("bb36"),s=(o("0fae"),o("6c29")),c=(o("d3b7"),o("3ca3"),o("ddb0"),o("6389")),u=o.n(c);r.a.use(u.a);var d=new u.a({base:"/datav/",mode:"hash",routes:[{path:"/",component:function(){return o.e("page").then(o.bind(null,"09a0"))},children:[{path:"",component:function(){return o.e("page").then(o.bind(null,"482b"))}},{path:"category",component:function(){return o.e("page").then(o.bind(null,"fa63"))}},{path:"db",component:function(){return o.e("page").then(o.bind(null,"6ab7"))}},{path:"map",component:function(){return o.e("page").then(o.bind(null,"febb"))}},{path:"document",component:function(){return o.e("page").then(o.bind(null,"0798"))}}]},{path:"/create",name:"create",component:function(){return o.e("page").then(o.bind(null,"758c"))}},{path:"/build/:id",name:"build",component:function(){return o.e("page").then(o.bind(null,"b051"))}},{path:"/view/:id",name:"view",component:function(){return o.e("page").then(o.bind(null,"44b0"))}}]}),m=d,p=o("db49"),b=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},f=[],h={name:"app",components:{}},C=h,g=o("2877"),w=Object(g["a"])(C,b,f,!1,null,null,null),x=w.exports,j=(o("1be0"),o("6461"),o("96eb")),v=o.n(j),y=function(e){return e};v.a.mock(/\/bar/,"get",(function(e){var a={categories:["苹果","三星","小米","oppo","vivo"],series:[{name:"手机品牌",data:[1000879,3400879,2300879,5400879,3400879]}]};return y(a)})),v.a.mock(/\/line/,"get",(function(){var e={categories:["苹果","三星","小米","oppo","vivo"],series:[{name:"手机品牌",data:[1000879,3400879,2300879,5400879,3400879]}]};return y(e)})),v.a.mock(/\/pie/,"get",(function(){var e=[{name:"苹果",value:1000879,url:"http://www.baidu.com"},{name:"三星",value:3400879,url:"http://www.baidu.com"},{name:"小米",value:2300879,url:"http://www.baidu.com"},{name:"oppo",value:5400879,url:"http://www.baidu.com"},{name:"大疆",value:3e3,url:"http://www.baidu.com"},{name:"抖音",value:2e3,url:"http://www.baidu.com"}];return y(e)})),v.a.mock(/\/table1/,"get",(function(){var e=[{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"},{jg:"开源中国",je:"12345/2333",sy:"<span>-26%</span>/+5%",yx:"12345/2333",jnc:"-26%/+5%",jl:"smallwei"}];return y(e)})),v.a.mock(/\/table2/,"get",(function(){var e=[{name:"smallwei",sj:"60",type:"抵押",je:"32400",jg:"开源中国",jl:"smallwei"},{name:"smallwei",sj:"60",type:"抵押",je:"32400",jg:"开源中国",jl:"smallwei"},{name:"smallwei",sj:"60",type:"抵押",je:"32400",jg:"开源中国",jl:"smallwei"},{name:"smallwei",sj:"60",type:"抵押",je:"32400",jg:"开源中国",jl:"smallwei"},{name:"smallwei",sj:"60",type:"抵押",je:"32400",jg:"开源中国",jl:"smallwei"},{name:"smallwei",sj:"60",type:"抵押",je:"32400",jg:"开源中国",jl:"smallwei"},{name:"smallwei",sj:"60",type:"抵押",je:"32400",jg:"开源中国",jl:"smallwei"},{name:"smallwei",sj:"60",type:"抵押",je:"32400",jg:"开源中国",jl:"smallwei"}];return y(e)})),v.a.mock(/\/table3/,"get",(function(){var e=[{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333}];return y(e)})),v.a.mock(/\/table4/,"get",(function(){var e=[{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333},{suffixText:"申请户数(时)",data:2333}];return y(e)})),v.a.mock(/\/wordCloud/,"get",(function(){var e=[{name:"三星",value:"1234"},{name:"小米",value:"1234"},{name:"华为",value:"1234"},{name:"oppo",value:"1234"},{name:"抖音",value:"1234"},{name:"快手",value:"1234"},{name:"淘宝",value:"1234"},{name:"百度",value:"1234"},{name:"京东",value:"1234"},{name:"天猫",value:"1234"},{name:"字符1",value:"1234"},{name:"字符1",value:"1234"}];return y(e)})),v.a.mock(/\/pictorialBar/,"get",(function(){var e={categories:["苹果","三星","小米","oppo","vivo"],series:[{name:"手机品牌",data:[1000879,3400879,2300879,5400879,3400879]}]};return y(e)})),v.a.mock(/\/radar/,"get",(function(){var e={indicator:[{name:"销售",max:6500},{name:"管理",max:16e3},{name:"信息技术",max:3e4},{name:"客服",max:38e3},{name:"研发",max:52e3},{name:"市场",max:25e3}],series:[{data:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"预算分配（Allocated Budget）"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"实际开销（Actual Spending）"}]}]};return y(e)})),v.a.mock(/\/scatter/,"get",(function(){var e=[{data:[[1,8.04],[2,6.95]]},{data:[[1,4.04],[2,3.95]]}];return y(e)})),v.a.mock(/\/gauge/,"get",(function(){var e={min:1,max:10,label:"名称",value:4,unit:"%"};return y(e)})),v.a.mock(/\/swiper/,"get",(function(){var e=[{value:"https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg"},{value:"https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg"}];return y(e)})),v.a.mock(/\/funnel/,"get",(function(){var e=[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"}];return y(e)}));o("257c"),o("b8f0"),o("9453");r.a.config.productionTip=!1,window.axios=l["a"],document.title=p["d"].title,r.a.use(i.a),r.a.use(window.AVUE),r.a.prototype.$website=p["d"],r.a.use(s["a"]),new r.a({router:m,render:function(e){return e(x)}}).$mount("#app")},"5f72":function(e,a){e.exports=ELEMENT},6389:function(e,a){e.exports=VueRouter},6461:function(e,a){Array.prototype.isNull=function(){return!!Array.isArray(this)&&0==this.length},Array.prototype.equals=function(e){if(!e)return!1;if(this.length!=e.length)return!1;for(var a=0,o=this.length;a<o;a++)if(this[a]instanceof Array&&e[a]instanceof Array){if(!this[a].equals(e[a]))return!1}else if(this[a]!=e[a])return!1;return!0}},"8bbf":function(e,a){e.exports=Vue},9453:function(e,a){var o={version:1,themeName:"wonderland",theme:{seriesCnt:"3",backgroundColor:"rgba(255,255,255,0)",titleColor:"#666666",subtitleColor:"#999999",textColorShow:!1,textColor:"#333",markTextColor:"#ffffff",color:["#4ea397","#22c3aa","#7bd9a5","#d0648a","#f58db2","#f2b3c9"],borderColor:"#ccc",borderWidth:0,visualMapColor:["#d0648a","#22c3aa","#adfff1"],legendTextColor:"#999999",kColor:"#d0648a",kColor0:"transparent",kBorderColor:"#d0648a",kBorderColor0:"#22c3aa",kBorderWidth:"1",lineWidth:"3",symbolSize:"8",symbol:"emptyCircle",symbolBorderWidth:"2",lineSmooth:!1,graphLineWidth:"1",graphLineColor:"#cccccc",mapLabelColor:"#28544e",mapLabelColorE:"rgb(52,158,142)",mapBorderColor:"#999999",mapBorderColorE:"#22c3aa",mapBorderWidth:.5,mapBorderWidthE:1,mapAreaColor:"#eeeeee",mapAreaColorE:"rgba(34,195,170,0.25)",axes:[{type:"all",name:"通用坐标轴",axisLineShow:!0,axisLineColor:"#cccccc",axisTickShow:!1,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#999999",splitLineShow:!0,splitLineColor:["#eeeeee"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]},{type:"category",name:"类目坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!1,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"value",name:"数值坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"log",name:"对数坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"time",name:"时间坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}],axisSeperateSetting:!1,toolboxColor:"#999999",toolboxEmpasisColor:"#666666",tooltipAxisColor:"#cccccc",tooltipAxisWidth:1,timelineLineColor:"#4ea397",timelineLineWidth:1,timelineItemColor:"#4ea397",timelineItemColorE:"#4ea397",timelineCheckColor:"#4ea397",timelineCheckBorderColor:"rgba(60,235,210,0.3)",timelineItemBorderWidth:1,timelineControlColor:"#4ea397",timelineControlBorderColor:"#4ea397",timelineControlBorderWidth:.5,timelineLabelColor:"#4ea397",datazoomBackgroundColor:"rgba(255,255,255,0)",datazoomDataColor:"rgba(222,222,222,1)",datazoomFillColor:"rgba(114,230,212,0.25)",datazoomHandleColor:"#cccccc",datazoomHandleWidth:"100",datazoomLabelColor:"#999999"}};window.echarts.registerTheme(o.themeName,o.theme)},b8f0:function(e,a){var o={version:1,themeName:"macarons",theme:{seriesCnt:"4",backgroundColor:"rgba(0,0,0,0)",titleColor:"#008acd",subtitleColor:"#aaaaaa",textColorShow:!1,textColor:"#333",markTextColor:"#eeeeee",color:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],borderColor:"#ccc",borderWidth:0,visualMapColor:["#5ab1ef","#e0ffff"],legendTextColor:"#333333",kColor:"#d87a80",kColor0:"#2ec7c9",kBorderColor:"#d87a80",kBorderColor0:"#2ec7c9",kBorderWidth:1,lineWidth:2,symbolSize:3,symbol:"emptyCircle",symbolBorderWidth:1,lineSmooth:!0,graphLineWidth:1,graphLineColor:"#aaaaaa",mapLabelColor:"#d87a80",mapLabelColorE:"rgb(100,0,0)",mapBorderColor:"#eeeeee",mapBorderColorE:"#444444",mapBorderWidth:.5,mapBorderWidthE:1,mapAreaColor:"#dddddd",mapAreaColorE:"rgba(254,153,78,1)",axes:[{type:"all",name:"通用坐标轴",axisLineShow:!0,axisLineColor:"#eeeeee",axisTickShow:!0,axisTickColor:"#eeeeee",axisLabelShow:!0,axisLabelColor:"#eeeeee",splitLineShow:!0,splitLineColor:["#aaaaaa"],splitAreaShow:!1,splitAreaColor:["#eeeeee"]},{type:"category",name:"类目坐标轴",axisLineShow:!0,axisLineColor:"#008acd",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!1,splitLineColor:["#eee"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"value",name:"数值坐标轴",axisLineShow:!0,axisLineColor:"#008acd",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#eee"],splitAreaShow:!0,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"log",name:"对数坐标轴",axisLineShow:!0,axisLineColor:"#008acd",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#eee"],splitAreaShow:!0,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"time",name:"时间坐标轴",axisLineShow:!0,axisLineColor:"#008acd",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#eee"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}],axisSeperateSetting:!0,toolboxColor:"#2ec7c9",toolboxEmpasisColor:"#18a4a6",tooltipAxisColor:"#008acd",tooltipAxisWidth:"1",timelineLineColor:"#008acd",timelineLineWidth:1,timelineItemColor:"#008acd",timelineItemColorE:"#a9334c",timelineCheckColor:"#2ec7c9",timelineCheckBorderColor:"rgba(46,199,201,0.4)",timelineItemBorderWidth:1,timelineControlColor:"#008acd",timelineControlBorderColor:"#008acd",timelineControlBorderWidth:.5,timelineLabelColor:"#008acd",datazoomBackgroundColor:"rgba(47,69,84,0)",datazoomDataColor:"rgba(239,239,255,1)",datazoomFillColor:"rgba(182,162,222,0.2)",datazoomHandleColor:"#008acd",datazoomHandleWidth:"100",datazoomLabelColor:"#333333"}};window.echarts.registerTheme(o.themeName,o.theme)},bb36:function(e,a,o){"use strict";var n=o("53ca"),r=(o("ac1f"),o("841c"),o("1276"),o("d3b7"),o("159b"),o("cca6"),o("e6cf"),o("ef4f")),t=o("fa7d"),i=o("cebe"),l=o.n(i);function s(){var e=window.location.search.substring(1);e=e.split("&"),e.forEach((function(e){var a=e.split("=");window.$glob.params[a[0]]=a[1]}))}window.$glob={url:"",params:{},query:{},headers:{}},l.a.defaults.timeout=1e4,l.a.defaults.validateStatus=function(e){return e>=200&&e<=500},l.a.defaults.withCredentials=!0,l.a.interceptors.request.use((function(e){if(s(),Object(t["a"])(e.url)||(e.url=window.$glob.url+e.url),!Object(r["c"])(window.$glob.header)){var a=Object(t["d"])(window.$glob.header)();e.headers=Object.assign(e.headers,a)}if("object"===Object(n["a"])(e.data)&&!Object(r["c"])(window.$glob.query)){var o=Object(t["d"])(window.$glob.query)(),i=Object.assign(window.$glob.params,o);"get"==e.method?e.params=Object.assign(e.params,i):"post"==e.method&&(e.data=Object.assign(e.data,i))}return e}),(function(e){return Promise.reject(e)})),l.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(new Error(e))})),a["a"]=l.a},cebe:function(e,a){e.exports=axios},db49:function(e,a,o){"use strict";o.d(a,"d",(function(){return n})),o.d(a,"c",(function(){return r})),o.d(a,"b",(function(){return t}));o("99af");a["a"]={COMPNAME:"avue-echart-",NAME:"list",DEAFNAME:"item"};var n=window.$website,r=n.url,t='\n//data为返回的数据\n/**\n * 说明：只有样式编辑、数据处理、组件事件、请求头、请求参数方法需要返回函数\n * 静态数据或者配置数据直接返回JSON对象即可\n * 不写的话采用默认加载\n*/\n#样式编辑、数据处理、组件事件、请求头、请求参数\n(data)=>{\n  //处理数据逻辑\n  return {\n    //返回图表的标准数据结构体\n  }\n}\n\n#事件处理\n({name,type,value,data})=>{\n  //直接写执行的逻辑即可\n  alert(data,name)\n}\n\n#提示处理\n(name,data) => {\n  return 返回需要展示的文本\n}\n\n#文本框/图片框/Iframe框等通用数据格式\n{\n  value:\'xxxxx\'\n}\n\n#柱状图数据格式\n{\n  "categories": [\n    "苹果",\n  ],\n  "series": [{\n    "name": "手机品牌",\n    "data": [\n      1000879,\n    ]\n  }]\n}\n\n#折线图数据格式\n{\n  "categories": [\n    "苹果",\n  ],\n  "series": [{\n    "name": "手机品牌",\n    "data": [\n      1000879,\n    ]\n  }]\n}\n\n#饼图数据格式\n[{\n    "name": "PC",\n    "value": 97,\n    "url": "http://www.baidu.com"\n},{\n    "name": "PC",\n    "value": 97,\n    "url": "http://www.baidu.com"\n}]\n\n#象型图数据格式\n{\n  "categories": [\n    "苹果",\n  ],\n    "series": [{\n      "name": "手机品牌",\n      "data": [\n        1000879,\n      ]\n    }]\n}\n#雷达图数据格式\n{\n  indicator: [{\n    name: \'销售\',\n    max: 6500\n  }],\n  series: [{\n    data: [{\n      value: [4300, 10000, 28000, 35000, 50000, 19000],\n      name: \'预算分配（Allocated Budget）\'\n    }]\n  }]\n}\n#散点图数据格式\n[{\n  data: [\n    [1, 8.04],\n    [2, 6.95]\n  ]\n},\n{\n  data: [\n    [1, 4.04],\n    [2, 3.95]\n  ]\n}]\n#漏斗图数据格式\n[{\n  value: 335,\n  name: \'直接访问\'\n},\n{\n  value: 310,\n  name: \'邮件营销\'\n},\n{\n  value: 234,\n  name: \'联盟广告\'\n}]\n\n#轮播图数据格式\n[{\n  value: \'图片地址\'\n},\n{\n  value: \'图片地址2\'\n}]\n\n#地图数据格式\n[{\n  "name": "测试坐标1",\n  "value": 1,\n  "lng": 118.30078125,\n  "lat": 36.91915611148194,\n  "zoom": 1\n},\n{\n  "name": "测试坐标2",\n  "value": 1,\n  "lng": 112.21435546875,\n  "lat": 37.965854128749434,\n  "zoom": 1\n}]\n '},ef4f:function(e,a,o){"use strict";o.d(a,"a",(function(){return n})),o.d(a,"c",(function(){return i})),o.d(a,"b",(function(){return l}));o("ac1f"),o("1276"),o("d3b7"),o("159b");var n=function(e){var a={url:"",params:{}},o=e.split("?");a.url=o[0];var n=o[1];if(n){var r=n.split("&");r.forEach((function(e){var o=e.split("="),n=o[0],r=o[1];a.params[n]=r}))}return a},r=function(e){var a=Object.prototype.toString,o={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"};return e instanceof Element?"element":o[a.call(e)]},t=function e(a){var o,n=r(a);if("array"===n)o=[];else{if("object"!==n)return a;o={}}if("array"===n)for(var t=0,i=a.length;t<i;t++)a[t]=function(){return a[t],a[t]}(),a[t]&&delete a[t].$parent,o.push(e(a[t]));else if("object"===n)for(var l in a)a&&delete a.$parent,o[l]=e(a[l]);return o};function i(e){if(e&&0===parseInt(e))return!1;var a=["$parent"];if(e instanceof Date||"boolean"===typeof e||"number"===typeof e)return!1;if(!(e instanceof Array)){if(e instanceof Object){for(var o in e=t(e),a.forEach((function(a){delete e[a]})),e)return!1;return!0}return"null"===e||null==e||"undefined"===e||void 0===e||""===e}return 0===e.length}var l=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i(e)&&(e=a),i(e)?"":(e+="",-1===e.indexOf("%")&&(e+="px"),e)}},fa7d:function(e,a,o){"use strict";o.d(a,"e",(function(){return r})),o.d(a,"b",(function(){return t})),o.d(a,"c",(function(){return i})),o.d(a,"d",(function(){return l})),o.d(a,"a",(function(){return s}));o("a15b"),o("ac1f"),o("00b4");var n=o("ef4f"),r=function(){for(var e=[],a="0123456789abcdef",o=0;o<36;o++)e[o]=a.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=a.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var n=e.join("");return n},t=function(){return{title:"文件夹",name:"文件夹",index:r(),children:[]}},i=function(e){return new Function("return "+e+";")()},l=function(e,a){if(Object(n["c"])(e)){if(a)return function(){}}else try{return i(e)}catch(o){return function(){}}},s=function(e){var a=/http(s)?:\/\/([\w-.]+)+(:[0-9]+)?.*$/;return!!a.test(e)}}});
//# sourceMappingURL=app.e3f7688d.js.map