(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{331:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("7ec41d98",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n(331)},334:function(t,e,n){var r=n(83)(!1);r.push([t.i,"\n.item-box[data-v-0684f0ee] {\n  display: flex;\n  flex-direction: column;\n  transition: all .2s ease-in-out;\n  cursor: pointer;\n}\n.item-box[data-v-0684f0ee]:hover {\n  transform: scale(1.05);\n}\n\n",""]),t.exports=r},337:function(t,e,n){"use strict";n.r(e);n(23);var r={name:"IndexPage",layout:"DefaultLayout",props:["name","image","price","type"]},o=(n(333),n(47)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"item-box border shadow p-3 mb-5 bg-white rounded"},[e("img",{staticClass:"shadow-sm p-3 mb-5 bg-white rounded",attrs:{src:t.image}}),t._v(" "),e("h5",[t._v(t._s(t.name))]),t._v(" "),e("p",[t._v(t._s(t.type.name))]),t._v(" "),e("h4",[t._v(t._s(t.price)+"$")])])}),[],!1,null,"0684f0ee",null);e.default=component.exports},339:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("76e8f69f",content,!0,{sourceMap:!1})},345:function(t,e,n){"use strict";n(339)},346:function(t,e,n){var r=n(83)(!1);r.push([t.i,"\n.content[data-v-7347610a] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n}\n",""]),t.exports=r},359:function(t,e,n){"use strict";n.r(e);n(23);var r=n(32),o=(n(65),n(1),n(35),{name:"IndexPage",layout:"DefaultLayout",auth:!1,data:function(){return{items:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1/api/v1/products").then((function(t){return t.json()}));case 2:t.items=e.sent,t.items=t.items.data;case 4:case"end":return e.stop()}}),e)})))()}))}),c=o,l=(n(345),n(47)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("h3",{staticClass:"text-center mb-5"},[t._v("Choose an accessory and put one of the design symbols on it!")]),t._v(" "),t._l(t.items,(function(n){return e("div",{key:n},[2===n.type.id?e("ProductBox",{attrs:{image:n.image,name:n.name,type:n.type,price:n.price}}):t._e()],1)}))],2)}),[],!1,null,"7347610a",null);e.default=component.exports;installComponents(component,{ProductBox:n(337).default})}}]);