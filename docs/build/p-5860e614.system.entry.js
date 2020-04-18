var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(e){o(e)}}function s(t){try{c(n["throw"](t))}catch(e){o(e)}}function c(t){t.done?r(t.value):i(t.value).then(a,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n};System.register(["./p-e45c5c80.system.js","./p-e847e88b.system.js","./p-eecda614.system.js","./p-2d5d376b.system.js","./p-1a8a24db.system.js","./p-f1645a56.system.js"],(function(t){"use strict";var e,r,n,i,o,a,s,c,u,l,f,h,p,d,v,y,g,m,b,x,w,T,O,P;return{setters:[function(t){e=t.r;r=t.h;n=t.g;i=t.c},function(){},function(t){o=t.A},function(t){a=t.m;s=t.a;c=t.s;u=t.b;l=t.c;f=t.d;h=t.h;p=t.e;d=t.f;v=t.g;y=t.l},function(t){g=t.P;m=t.T},function(t){b=t.s;x=t.a;w=t.b;T=t.g;O=t.i;P=t.c}],execute:function(){var M="header{color:white;height:30px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26);box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1rem;font-weight:500;color:#fff;padding:0 12px}.gb-green{background-color:#6b790e}.gb-grey{background-color:#c5bfbf}.gb-dark-grey{background-color:#5a5760}.gb-purple{background-color:#a52059}.disclaimer{position:absolute;bottom:0;right:0;font-size:12px}";var k=t("app_root",function(){function t(t){var r=this;e(this,t);this.indexTileMatrix=0;this.matrix=[];this.choosenColour=2;this.isModalOpen=false;this.copyIndex=0;this.paintModus=g.BRUSH;this.settings={fieldHeight:8,fieldWidth:8,spriteAmount:12,isGridVisible:true,isFieldNumberVisible:false};this.updateColor=function(t){r.choosenColour=t};this.changeTileMatrix=function(t){r.indexTileMatrix=t};this.setSettings=function(t){var e=t.fieldHeight,n=t.fieldWidth,i=t.spriteAmount,o=t.isGridVisible,a=t.isFieldNumberVisible;r.settings={fieldHeight:e,fieldWidth:n,spriteAmount:i,isGridVisible:o,isFieldNumberVisible:a};r.matrix=r.createMatrixField(i,e,n)};this.setMatrix=function(t){r.matrix=t};this.setPaintModus=function(t){r.paintModus=t};this.createMatrixField=function(t,e,r){var n=[];for(var i=0;i<t;i++){n.push(Array.from({length:e},(function(){return Array.from({length:r},(function(){return 0}))})))}return n};this.setIsModalOpen=function(t){r.isModalOpen=t};this.pasteMatrix=function(){r.matrix[r.indexTileMatrix]=r.matrix[r.copyIndex];r.matrix=__spreadArrays(r.matrix)};this.setCopyIndex=function(){r.copyIndex=r.indexTileMatrix}}t.prototype.componentWillLoad=function(){var t=this.settings,e=t.spriteAmount,r=t.fieldHeight,n=t.fieldWidth;this.matrix=this.createMatrixField(e,r,n)};t.prototype.render=function(){var t={matrix:this.matrix,indexTileMatrix:this.indexTileMatrix,choosenColour:this.choosenColour,updateColor:this.updateColor,changeTileMatrix:this.changeTileMatrix,setSettings:this.setSettings,settings:this.settings,setMatrix:this.setMatrix,paintModus:this.paintModus,setPaintModus:this.setPaintModus,isModalOpen:this.isModalOpen,setIsModalOpen:this.setIsModalOpen,copyIndex:this.copyIndex,setCopyIndex:this.setCopyIndex,pasteMatrix:this.pasteMatrix};return r("div",null,r("header",{class:"gb-purple"},r("h1",null,"GB Sprite Tile Creator")),r("main",null,r(m.Provider,{state:t},r("stencil-router",null,r("stencil-route-switch",{scrollTopOffset:0},r("stencil-route",{url:"/",component:"app-home",exact:true}),r("stencil-route",{url:"/profile/:name",component:"app-profile"}))))),r("div",{class:"disclaimer"},"Icons made by"," ",r("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",r("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," ","www.flaticon.com")))};return t}());k.style=M;var _=t("context_consumer",function(){function t(t){e(this,t);this.context={};this.renderer=function(){return null}}t.prototype.connectedCallback=function(){if(this.subscribe!=null){this.unsubscribe=this.subscribe(this.el,"context")}};t.prototype.disconnectedCallback=function(){if(this.unsubscribe!=null){this.unsubscribe()}};t.prototype.render=function(){return this.renderer(Object.assign({},this.context))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());var S="stencil-route.inactive{display:none}";var L=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=a(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!s(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return r(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());o.injectProps(L,["location","history","historyType","routeViewsUpdated"]);L.style=S;var j=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var I=function(t,e,r){return a(t,{path:e,exact:r,strict:true})};var U=function(t){return t.tagName==="STENCIL-ROUTE"};var C=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=j();this.subscribers=[];this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var n=this;return __generator(this,(function(i){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(U).map((function(r,n){var i=I(t.pathname,r.url,r.exact);if(i&&e===-1){e=n}return{el:r,match:i}}));if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(t){n.queue.write((function(){n.subscribers.forEach((function(t,e){t.el.componentUpdated=undefined;if(e===n.activeIndex){return t.el.style.display=""}if(n.scrollTopOffset){t.el.scrollTopOffset=n.scrollTopOffset}t.el.group=n.group;t.el.match=null;t.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}};return[2]}))}))};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());o.injectProps(C,["location","routeViewsUpdated"]);var A=function(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}if(!t){console.warn.apply(console,e)}};var E=function(){var t;var e=[];var r=function(e){A(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var n=function(e,r,n,i){if(t!=null){var o=typeof t==="function"?t(e,r):t;if(typeof o==="string"){if(typeof n==="function"){n(o,i)}else{A(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(o!==false)}}else{i(true)}};var i=function(t){var r=true;var n=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}if(r){t.apply(void 0,e)}};e.push(n);return function(){r=false;e=e.filter((function(t){return t!==n}))}};var o=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:i,notifyListeners:o}};var V=function(t,e){if(e===void 0){e="scrollPositions"}var r=new Map;var n=function(e,n){r.set(e,n);if(b(t,"sessionStorage")){var i=[];r.forEach((function(t,e){i.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(t){return r.get(t)};var o=function(t){return r.has(t)};var a=function(e){n(e,[t.scrollX,t.scrollY])};if(b(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:n,get:i,has:o,capture:a}};var H="popstate";var R="hashchange";var F=function(t,e){if(e===void 0){e={}}var r=false;var n=t.history;var i=t.location;var o=t.navigator;var a=x(t);var s=!w(o);var v=V(t);var y=e.forceRefresh!=null?e.forceRefresh:false;var g=e.getUserConfirmation!=null?e.getUserConfirmation:T;var m=e.keyLength!=null?e.keyLength:6;var b=e.basename?c(u(e.basename)):"";var P=function(){try{return t.history.state||{}}catch(e){return{}}};var M=function(t){t=t||{};var e=t.key,r=t.state;var n=i.pathname,o=i.search,a=i.hash;var s=n+o+a;A(!b||h(s,b),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+b+'".');if(b){s=p(s,b)}return l(s,r,e||f(m))};var k=E();var _=function(t){v.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=v.get(K.location.key);K.length=n.length;k.notifyListeners(K.location,K.action)};var S=function(t){if(!O(o,t)){j(M(t.state))}};var L=function(){j(M(P()))};var j=function(t){if(r){r=false;_()}else{var e="POP";k.confirmTransitionTo(t,e,g,(function(r){if(r){_({action:e,location:t})}else{I(t)}}))}};var I=function(t){var e=K.location;var n=C.indexOf(e.key);var i=C.indexOf(t.key);if(n===-1){n=0}if(i===-1){i=0}var o=n-i;if(o){r=true;G(o)}};var U=M(P());var C=[U.key];var F=0;var N=false;var q=function(t){return b+d(t)};var B=function(t,e){A(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var o=l(t,e,f(m),K.location);k.confirmTransitionTo(o,r,g,(function(t){if(!t){return}var e=q(o);var s=o.key,c=o.state;if(a){n.pushState({key:s,state:c},"",e);if(y){i.href=e}else{var u=C.indexOf(K.location.key);var l=C.slice(0,u===-1?0:u+1);l.push(o.key);C=l;_({action:r,location:o})}}else{A(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=e}}))};var W=function(t,e){A(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var o=l(t,e,f(m),K.location);k.confirmTransitionTo(o,r,g,(function(t){if(!t){return}var e=q(o);var s=o.key,c=o.state;if(a){n.replaceState({key:s,state:c},"",e);if(y){i.replace(e)}else{var u=C.indexOf(K.location.key);if(u!==-1){C[u]=o.key}_({action:r,location:o})}}else{A(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(e)}}))};var G=function(t){n.go(t)};var Y=function(){return G(-1)};var D=function(){return G(1)};var z=function(e){F+=e;if(F===1){t.addEventListener(H,S);if(s){t.addEventListener(R,L)}}else if(F===0){t.removeEventListener(H,S);if(s){t.removeEventListener(R,L)}}};var J=function(t){if(t===void 0){t=""}var e=k.setPrompt(t);if(!N){z(1);N=true}return function(){if(N){N=false;z(-1)}return e()}};var X=function(t){var e=k.appendListener(t);z(1);return function(){z(-1);e()}};var K={length:n.length,action:"POP",location:U,createHref:q,push:B,replace:W,go:G,goBack:Y,goForward:D,block:J,listen:X,win:t};return K};var N="hashchange";var q={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+v(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:v,decodePath:u},slash:{encodePath:u,decodePath:u}};var B=function(t,e){if(e===void 0){e={}}var r=false;var n=null;var i=0;var o=false;var a=t.location;var s=t.history;var v=P(t.navigator);var g=e.keyLength!=null?e.keyLength:6;var m=e.getUserConfirmation,b=m===void 0?T:m,x=e.hashType,w=x===void 0?"slash":x;var O=e.basename?c(u(e.basename)):"";var M=q[w],k=M.encodePath,_=M.decodePath;var S=function(){var t=a.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var L=function(t){return a.hash=t};var j=function(t){var e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)};var I=function(){var t=_(S());A(!O||h(t,O),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+O+'".');if(O){t=p(t,O)}return l(t,undefined,f(g))};var U=E();var C=function(t){Object.assign(tt,t);tt.length=s.length;U.notifyListeners(tt.location,tt.action)};var V=function(){var t=S();var e=k(t);if(t!==e){j(e)}else{var i=I();var o=tt.location;if(!r&&y(o,i)){return}if(n===d(i)){return}n=null;H(i)}};var H=function(t){if(r){r=false;C()}else{var e="POP";U.confirmTransitionTo(t,e,b,(function(r){if(r){C({action:e,location:t})}else{R(t)}}))}};var R=function(t){var e=tt.location;var n=G.lastIndexOf(d(e));var i=G.lastIndexOf(d(t));if(n===-1){n=0}if(i===-1){i=0}var o=n-i;if(o){r=true;J(o)}};var F=S();var B=k(F);if(F!==B){j(B)}var W=I();var G=[d(W)];var Y=function(t){return"#"+k(O+d(t))};var D=function(t,e){A(e===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var i=l(t,undefined,f(g),tt.location);U.confirmTransitionTo(i,r,b,(function(t){if(!t){return}var e=d(i);var o=k(O+e);var a=S()!==o;if(a){n=e;L(o);var s=G.lastIndexOf(d(tt.location));var c=G.slice(0,s===-1?0:s+1);c.push(e);G=c;C({action:r,location:i})}else{A(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");C()}}))};var z=function(t,e){A(e===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var i=l(t,undefined,f(g),tt.location);U.confirmTransitionTo(i,r,b,(function(t){if(!t){return}var e=d(i);var o=k(O+e);var a=S()!==o;if(a){n=e;j(o)}var s=G.indexOf(d(tt.location));if(s!==-1){G[s]=e}C({action:r,location:i})}))};var J=function(t){A(v,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var X=function(){return J(-1)};var K=function(){return J(1)};var Q=function(t,e){i+=e;if(i===1){t.addEventListener(N,V)}else if(i===0){t.removeEventListener(N,V)}};var Z=function(e){if(e===void 0){e=""}var r=U.setPrompt(e);if(!o){Q(t,1);o=true}return function(){if(o){o=false;Q(t,-1)}return r()}};var $=function(e){var r=U.appendListener(e);Q(t,1);return function(){Q(t,-1);r()}};var tt={length:s.length,action:"POP",location:W,createHref:Y,push:D,replace:z,go:J,goBack:X,goForward:K,block:Z,listen:$,win:t};return tt};var W=function(t,e){var r=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})};var G={browser:F,hash:B};var Y=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=G[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=W(e,t.root);t.location=e}));this.location=W(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(o.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}())}}}));