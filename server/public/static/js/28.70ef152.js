webpackJsonp([28],{M6qa:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("r4Fr"),c={data:function(){return{packageData:[],cardTotle:0,page:1,tableData:[],token:sessionStorage.getItem("adminToken")?sessionStorage.getItem("adminToken"):localStorage.getItem("adminToken")}},mounted:function(){this.getUCC(),this.getCardPackage()},filters:{leftType:function(e){var a="";switch(e){case 1:a="全能";break;case 2:a="兵攻";break;case 3:a="盾防";break;case 4:a="速度";break;case 5:a="爱心"}return a},cry:function(e){var a="";switch(e){case 1:a="红";break;case 2:a="蓝";break;case 3:a="绿";break;case 4:a="光";break;case 5:a="暗"}return a},rightType:function(e){var a="";switch(e){case 1:a="物";break;case 2:a="魔";break;case 3:a="防";break;case 4:a="治";break;case 5:a="妨";break;case 6:a="支";break;case 7:a="特"}return a}},methods:{pass:function(){},cardPageChange:function(){this.getUCC()},watchCard:function(e){this.$alert('<div class="watch_img"><img src="'+e+'" /></div>',"查看卡牌",{dangerouslyUseHTMLString:!0,lockScroll:!1})},getCardPackage:function(){var e=this;r.a.searchcardpackage({all:!0}).then(function(a){0==a.data.code?e.$message.error(a.data.msg):1==a.data.code&&(e.packageData=a.data.data)})},checkUCC:function(e,a,t){var c=this;if(!t&&0!=t&&e)return this.$message.error("请设置卡包"),!1;r.a.adminCreatcard({token:this.token,type:"check",packageId:t,id:a,pass:e}).then(function(e){0==e.data.code?c.$message.error(e.data.msg):1==e.data.code&&(c.$message({message:e.data.msg,type:"success"}),c.getUCC())})},getUCC:function(){var e=this;r.a.adminCreatcard({token:this.token,type:"get",page:this.page}).then(function(a){0==a.data.code?e.$message.error(a.data.msg):1==a.data.code&&(e.tableData=a.data.data,e.cardTotle=a.data.total)})}}},n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wmcard_admincenter_common_right_body"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"卡牌名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"title",label:"出处"}}),e._v(" "),t("el-table-column",{attrs:{prop:"star",label:"星级"}}),e._v(" "),t("el-table-column",{attrs:{label:"被动属性"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\r\n          "+e._s(e._f("leftType")(a.row.leftType))+"\r\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"主动技能"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\r\n          "+e._s(e._f("rightType")(a.row.rightType))+"\r\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"水晶"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\r\n          "+e._s(e._f("cry")(a.row.cry))+"\r\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"通过"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[e._v(e._s(a.row.pass?"已通过":"未通过"))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"卡包",width:"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-select",{staticClass:"wm_card_package_sel",attrs:{placeholder:"选择卡包",disabled:!!a.row.check},model:{value:a.row.packageId,callback:function(t){e.$set(a.row,"packageId",t)},expression:"scope.row.packageId"}},e._l(e.packageData,function(e){return t("el-option",{key:e.packageId,attrs:{label:e.name,value:e.packageId}})}),1)]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"审核"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[e._v(e._s(a.row.check?"已审核":"未审核"))])]}}])}),e._v(" "),t("el-table-column",{attrs:{width:"140",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[0===a.row.check?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.checkUCC(!0,a.row._id,a.row.packageId)}}},[e._v("通过")]):e._e(),e._v(" "),0===a.row.check?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.checkUCC(!1,a.row._id,a.row.packageId)}}},[e._v("驳回")]):e._e(),e._v(" "),0===a.row.check?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.watchCard("/userCreatCard/"+a.row._id+".jpg")}}},[e._v("卡面")]):e._e(),e._v(" "),1===a.row.check&&1===a.row.pass?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.watchCard("/card/"+a.row.packageId+"/"+a.row.cardId+".jpg")}}},[e._v("卡面")]):e._e()]}}])})],1),e._v(" "),t("el-pagination",{staticClass:"wmcard_user_page",attrs:{small:"",layout:"prev, pager, next",total:e.cardTotle,"current-page":e.page,"page-size":20},on:{"current-change":e.cardPageChange,"update:currentPage":function(a){e.page=a},"update:current-page":function(a){e.page=a}}})],1)},s=[],l={render:n,staticRenderFns:s},o=l,d=t("VU/8"),u=d(c,o,!1,null,null,null);a.default=u.exports}});