System.register(["./p-e45c5c80.system.js"],(function(r){"use strict";var t,o;return{setters:[function(r){t=r.r;o=r.h}],execute:function(){var i=".gb-green{background-color:#6b790e}.gb-grey{background-color:#c5bfbf}.gb-grey-dark{background-color:#5a5760}.gb-white{background-color:#fff}.gb-black{background-color:#000}.canvas-matrix-tile{width:50px;height:50px;border-right:1px solid black;border-bottom:1px solid black}.grid-off{border:0;width:51px;height:51px}";var e=r("mvjp_canvas_matrix_tile",function(){function r(r){t(this,r);this.colors=["white","grey","grey-dark","black"]}r.prototype.render=function(){var r=this;var t=this.showGrid?"":"grid-off";var i="gb-"+this.colors[this.colour];return o("div",{class:"canvas-matrix-tile "+i+" "+t,onClick:function(){return r.handleClick(r.position)},"data-pos":""+JSON.stringify(this.position)}," ",o("slot",null))};return r}());e.style=i}}}));