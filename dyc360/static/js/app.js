webpackJsonp([4,2],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(66),r=o(i),a=n(146),c=o(a),s=n(145),u=o(s),l=n(73),d=o(l),h=n(68);n(69);var f=n(70),p=o(f);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){p.default.attach(document.body)},!1),r.default.use(c.default),r.default.use(u.default);var m=new c.default({routes:d.default,mode:h.routerMode,strict:!1});new r.default({router:m}).$mount("#app")},68:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=void 0,i=void 0,r="https://www.dyc360.com";e.baseUrl=o="https://www.dyc360.com",e.routerMode=i="hash",e.baseUrl=o,e.routerMode=i,e.imgBaseUrl=r},69:function(t,e){"use strict";!function(t,e){var n=t.documentElement,o="orientationchange"in window?"orientationchange":"resize",i=function(){var t=n.clientWidth;t&&(n.style.fontSize=20*(t/320)+"px")};t.addEventListener&&(e.addEventListener(o,i,!1),t.addEventListener("DOMContentLoaded",i,!1))}(document,window)},70:function(t,e,n){function o(t){return t&&t.__esModule?t:{default:t}}var i,r=n(25),a=o(r);!function(){"use strict";/**
	  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	  *
	  * @codingstandard ftlabs-jsv2
	  * @copyright The Financial Times Limited [All Rights Reserved]
	  * @license MIT License (see LICENSE.txt)
	  */
function o(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}var i;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700,!o.notNeeded(t)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,s=0,u=r.length;s<u;s++)a[r[s]]=n(a[r[s]],a);c&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,o){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,o):i.call(t,e,n,o)},t.addEventListener=function(e,n,o){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(t,e,n,o)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}}var r=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!r,s=/iP(ad|hone|od)/.test(navigator.userAgent)&&!r,u=s&&/OS 4_\d(_\d)?/.test(navigator.userAgent),l=s&&/OS [6-7]_\d/.test(navigator.userAgent),d=navigator.userAgent.indexOf("BB10")>0;o.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(s&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},o.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},o.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},o.prototype.determineEventType=function(t){return c&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},o.prototype.focus=function(t){var e;s&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},o.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},o.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},o.prototype.onTouchStart=function(t){var e,n,o;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],s){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!u){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},o.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},o.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},o.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},o.prototype.onTouchEnd=function(t){var e,n,o,i,r,a=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,l&&(r=t.changedTouches[0],a=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||a,a.fastClickScrollParent=this.targetElement.fastClickScrollParent),o=a.tagName.toLowerCase(),"label"===o){if(e=this.findControl(a)){if(this.focus(a),c)return!1;a=e}}else if(this.needsFocus(a))return t.timeStamp-n>100||s&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,t),s&&"select"===o||(this.targetElement=null,t.preventDefault()),!1);return!(!s||u||(i=a.fastClickScrollParent,!i||i.fastClickLastScrollTop===i.scrollTop))||(this.needsClick(a)||(t.preventDefault(),this.sendClick(a,t)),!1)},o.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},o.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},o.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},o.prototype.destroy=function(){var t=this.layer;c&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},o.notNeeded=function(t){var e,n,o,i;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(e=document.querySelector("meta[name=viewport]")){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(d&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(i=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(i>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},o.attach=function(t,e){return new o(t,e)},"object"===(0,a.default)(n(67))&&n(67)?(i=function(){return o}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))):"undefined"!=typeof t&&t.exports?(t.exports=o.attach,t.exports.FastClick=o):window.FastClick=o}()},73:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(135),r=o(i),a=function(t){return n.e(0,function(){return t(n(137))})},c=function(t){return n.e(1,function(){return t(n(139))})};e.default=[{path:"/",component:r.default,children:[{path:"",redirect:"/home"},{path:"/home",component:a},{path:"/invest",component:c}]}]},74:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},128:function(t,e){},135:function(t,e,n){n(128);var o=n(10)(n(74),n(142),null,null);t.exports=o.exports},142:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("router-view")],1)},staticRenderFns:[]}},147:function(t,e){}});