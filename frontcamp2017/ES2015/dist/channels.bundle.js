webpackJsonp([0],{346:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),r=function(n){return n&&n.__esModule?n:{default:n}}(t(347));t(348);var a=function(){function n(e){var t=this,i=e.targetElement;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.targetElement=i,this.init(i).then(function(){t._subscribeOnEvents()})}return i(n,[{key:"_subscribeOnEvents",value:function(){var n=this;document.addEventListener("showChannelsList",function(){n.render(n.targetElement,n.channels)})}},{key:"_attachActionHandlers",value:function(){var n=this.channesListElement.querySelectorAll(".channelsList-item"),e=new CustomEvent("showArticlesList",{detail:{}}),t=function(n){n.addEventListener("click",function(){e.detail.channelKey=n.getAttribute("data-key"),document.dispatchEvent(e)})},i=!0,r=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){t(o.value)}}catch(n){r=!0,a=n}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}}},{key:"render",value:function(e,t){var i="";this.channesListElement=document.createElement("ul"),this.channesListElement.className="channelsList",e.innerHTML="",e.appendChild(this.channesListElement);var r=!0,a=!1,o=void 0;try{for(var s,l=t[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var c=s.value;i+=n.parseChannel(c)}}catch(n){a=!0,o=n}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}this.channesListElement.innerHTML=i,this._attachActionHandlers()}},{key:"init",value:function(){var e=function(n){return function(){var e=n.apply(this,arguments);return new Promise(function(n,t){function i(r,a){try{var o=e[r](a),s=o.value}catch(n){return void t(n)}if(!o.done)return Promise.resolve(s).then(function(n){i("next",n)},function(n){i("throw",n)});n(s)}return i("next")})}}(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getChannels();case 2:this.channels=e.sent.channels,this.render(t,this.channels);case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}],[{key:"getChannels",value:function(){return r.default.getChannels()}},{key:"parseChannel",value:function(n){return'<li class="channelsList-item" data-key="'+n.key+'">\n                    <img src="'+n.logoPath+'" class="channelLogo" alt=""/>\n                    <p class="channelTitle">'+n.title+"</p>\n                 </li>"}}]),n}();e.default=a},347:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),r=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}return i(n,null,[{key:"getChannels",value:function(){return fetch("./data/channels-list.json").then(function(n){if(n.ok)return n.json();throw new TypeError(n.status+" Failed to upload resources: ")}).catch(function(n){throw new TypeError(n)})}}]),n}();e.default=r},348:function(n,e,t){var i=t(349);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0};r.transform=void 0;t(64)(i,r);i.locals&&(n.exports=i.locals)},349:function(n,e,t){(n.exports=t(63)(void 0)).push([n.i,".channelsContainer {\n  text-align: center;\n  margin: 50px 0; }\n\n.channelsList {\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  justify-content: space-between;\n  padding: 0; }\n\n.channelsList:after {\n  content: '';\n  flex: auto; }\n\n.channelsList-showMore {\n  cursor: pointer;\n  margin-top: 50px;\n  width: 150px;\n  height: 25px; }\n\n.channelsList-item {\n  cursor: pointer;\n  text-align: center;\n  min-height: 150px;\n  margin: 10px; }\n\n.channelsList-item:hover .channelLogo {\n  transform: scale(1.1); }\n\n.channelLogo {\n  transition: all .1s ease-out;\n  border-radius: 10px; }\n\n@media (min-width: 480px) {\n  .channelLogo {\n    width: 80px; } }\n\n.channelTitle {\n  font-family: 'Roboto-Light', 'Arial', sans-serif;\n  color: #8e8e8e; }\n\n.channelsList-item:hover .channelTitle {\n  font-family: 'Roboto-Regular', 'Arial', sans-serif;\n  color: #f42; }\n\n@media (min-width: 960px) {\n  .channelsList-item {\n    width: calc(20% - 20px); } }\n\n@media (max-width: 960px) {\n  .channelsList-item {\n    width: calc(25% - 20px); } }\n\n@media (max-width: 600px) {\n  .channelsList-item {\n    width: calc(50% - 20px); } }\n\n@media (max-width: 480px) {\n  .channelsList-item {\n    width: calc(100% - 10px); }\n  .channelLogo {\n    width: 150px; } }\n",""])}});