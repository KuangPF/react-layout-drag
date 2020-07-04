/*! For license information please see main.23a26c29.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-layout-drag-example"]=this["webpackJsonpreact-layout-drag-example"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},4:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);n(4);var a=n(0),r=n.n(a),c=n(2),l=n.n(c);var s=function(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}((void 0===t||null===t)&&n.path)}},n.exports),n.exports}((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===c)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),o=window.innerWidth,i=window.innerHeight;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".react-layout-drag-wrap{display:inline-block;cursor:move;user-select:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFDRSxvQkFBcUIsQ0FDckIsV0FBWSxDQUNaLGdCQUNGIiwiZmlsZSI6ImluZGV4LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWFjdC1sYXlvdXQtZHJhZy13cmFwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IG1vdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuIl19 */");var u={translateX:0,translateY:0},d=function(e){var t=Object(a.useState)(u),n=t[0],c=t[1],l=Object(a.useRef)({}),d=Object(a.useRef)({}),m=e.dragRange,p=void 0===m?[]:m,f=Object(a.useCallback)((function(e){var t=function(e,t,n,a,r){var c=[e.top,o-e.right,i-e.bottom,e.left],l=Object.assign(c,r);if(n.current){var s=a.clientX,u=a.clientY,d=s-n.current.clientX+t.translateX,m=u-n.current.clientY+t.translateY;return{translateX:d=d<=0?-Math.min(Math.abs(d),l[3]):Math.min(d,l[1]),translateY:m=m<=0?-Math.min(Math.abs(m),l[0]):Math.min(m,l[2])}}return{translateX:0,translateY:0}}(d.current,n,l,e,p);c(t)}),[JSON.stringify(n)]),v=Object(a.useCallback)((function(e){l.current=e,document.onmousemove=f}),[f]),g=Object(a.useCallback)((function(){document.onmousemove=null}),[]);Object(a.useEffect)((function(){var t=e.id,n=document.getElementById(t);n&&(n.addEventListener("mousedown",(function(e){v(e)})),document.addEventListener("mouseup",(function(){g()})))}),[v,g]),Object(a.useEffect)((function(){var t=e.id,n=document.getElementById(t);n&&(d.current=n.getBoundingClientRect())}),[]);var y={transform:"translate("+n.translateX+"px, "+n.translateY+"px)"},h=e.className,b=e.children,I=e.id;return r.a.createElement("div",{id:I,className:s(["react-layout-drag-wrap",h]),style:y},b)};d.defaultProps={id:"react-layout-drag-wrap"};var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"drap-container"},r.a.createElement("p",null,"1. \u5c4f\u5e55\u8303\u56f4\u5185\u62d6\u52a8"),r.a.createElement(d,{id:"layout-drag-test"},r.a.createElement("div",{className:"drag-layout-content"},"drag me"))),r.a.createElement("div",{className:"drap-container"},r.a.createElement("p",null,"2. \u8bbe\u7f6e\u62d6\u52a8\u8303\u56f4"),r.a.createElement("div",{className:"drag-range"},r.a.createElement(d,{dragRange:[50,50,50,50]},r.a.createElement("div",{className:"drag-layout-content"},"\u8303\u56f4\u5185\u62d6\u52a8")))))};l.a.render(r.a.createElement(m,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.23a26c29.chunk.js.map