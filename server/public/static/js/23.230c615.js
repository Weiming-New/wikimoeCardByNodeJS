webpackJsonp([23],{M6qa:function(e,t,a){"use strict";function n(e){a("tPdq")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("r4Fr"),c=a("oAV5"),o={data:function(){return{packageData:[],cardTotle:0,page:1,tableData:[],token:sessionStorage.getItem("adminToken")?sessionStorage.getItem("adminToken"):localStorage.getItem("adminToken")}},mounted:function(){this.getUCC(),this.getCardPackage()},filters:{leftType:function(e){var t="";switch(e){case 1:t="全能";break;case 2:t="兵攻";break;case 3:t="盾防";break;case 4:t="速度";break;case 5:t="爱心"}return t},cry:function(e){var t="";switch(e){case 1:t="红";break;case 2:t="蓝";break;case 3:t="绿";break;case 4:t="光";break;case 5:t="暗"}return t},rightType:function(e){var t="";switch(e){case 1:t="物";break;case 2:t="魔";break;case 3:t="防";break;case 4:t="治";break;case 5:t="妨";break;case 6:t="支";break;case 7:t="特"}return t}},methods:{cardPageChange:function(){this.getUCC()},watchCard:function(e){this.$alert('<div class="watch_img"><img src="'+e+'" /></div>',"查看卡牌",{dangerouslyUseHTMLString:!0,lockScroll:!1,customClass:"wm_crearchcard_watch"})},getCardPackage:function(){var e=this;r.a.searchcardpackage({all:!0,sortType:"default"}).then(function(t){0==t.data.code?e.$message.error(t.data.msg):1==t.data.code&&(e.packageData=t.data.data,e.packageData=Object(c.g)(e.packageData,t.data.sortData,"default"))})},checkUCC:function(e,t,a){var n=this;if(!a&&0!=a&&e)return this.$message.error("请设置卡包"),!1;e?this.$confirm("确定通过吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.a.adminCreatcard({token:n.token,type:"check",packageId:a,id:t,pass:e}).then(function(e){0==e.data.code?n.$message.error(e.data.msg):1==e.data.code&&(n.$message({message:e.data.msg,type:"success"}),n.getUCC())})}).catch(function(){}):this.$prompt("请输入驳回理由","提示",{confirmButtonText:"确定",cancelButtonText:"取消",lockScroll:!1}).then(function(c){var o=c.value;r.a.adminCreatcard({token:n.token,type:"check",packageId:a,id:t,pass:e,mark:o}).then(function(e){0==e.data.code?n.$message.error(e.data.msg):1==e.data.code&&(n.$message({message:e.data.msg,type:"success"}),n.getUCC())})}).catch(function(){})},getUCC:function(){var e=this;r.a.adminCreatcard({token:this.token,type:"get",page:this.page}).then(function(t){0==t.data.code?e.$message.error(t.data.msg):1==t.data.code&&(e.tableData=t.data.data,e.cardTotle=t.data.total)})}}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wmcard_admincenter_common_right_body"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"current-row-key":"_id"}},[a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickName",label:"昵称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"卡牌名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"出处"}}),e._v(" "),a("el-table-column",{attrs:{prop:"star",label:"星级"}}),e._v(" "),a("el-table-column",{attrs:{label:"被动属性"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("leftType")(t.row.leftType))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"主动技能"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("rightType")(t.row.rightType))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"水晶"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("cry")(t.row.cry))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"通过"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.pass?"已通过":"未通过"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"卡包",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticClass:"wm_card_package_sel",attrs:{placeholder:"选择卡包",disabled:!!t.row.check},model:{value:t.row.packageId,callback:function(a){e.$set(t.row,"packageId",a)},expression:"scope.row.packageId"}},e._l(e.packageData,function(e){return a("el-option",{key:e.packageId,attrs:{label:e.name,value:e.packageId}})}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"审核"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.check?"已审核":"未审核"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"140",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.check?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.checkUCC(!0,t.row._id,t.row.packageId)}},nativeOn:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}}},[e._v("通过")]):e._e(),e._v(" "),0===t.row.check?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.checkUCC(!1,t.row._id,t.row.packageId)}},nativeOn:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}}},[e._v("驳回")]):e._e(),e._v(" "),0===t.row.check?a("el-tooltip",{attrs:{placement:"left"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{staticClass:"wm_admin_cardpass_watchcard",attrs:{src:"/userCreatCard/"+t.row._id+".jpg"}})]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.watchCard("/userCreatCard/"+t.row._id+".jpg")}},nativeOn:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}}},[e._v("卡面")])],1):e._e(),e._v(" "),1===t.row.check&&1===t.row.pass?a("el-tooltip",{attrs:{placement:"left"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{staticClass:"wm_admin_cardpass_watchcard",attrs:{src:"/card/"+t.row.packageId+"/"+t.row.cardId+".jpg"}})]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.watchCard("/card/"+t.row.packageId+"/"+t.row.cardId+".jpg")}},nativeOn:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}}},[e._v("卡面")])],1):e._e()]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"wmcard_user_page",attrs:{small:"",layout:"prev, pager, next",total:e.cardTotle,"current-page":e.page,"page-size":20},on:{"current-change":e.cardPageChange,"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t}}})],1)},l=[],i={render:s,staticRenderFns:l},d=i,u=a("VU/8"),p=n,k=u(o,d,!1,p,null,null);t.default=k.exports},tPdq:function(e,t,a){var n=a("v1lC");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("1202375f",n,!0,{})},v1lC:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"\n.wm_admin_cardpass_watchcard {\r\n  width: 396px;\r\n  height: 556px;\n}\r\n",""])}});