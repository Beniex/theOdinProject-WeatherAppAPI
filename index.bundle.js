(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"html{\n    width: 100%;\n    height: 100%;\n}\n\nbody{\n    background-color:#264653;\n    display: flex;\n    flex-direction: column;\n}\n#header{\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n\n}\n\n \n\n#textDiv{\n    display: flex;\n    justify-content: center;\n    color: white; \n    margin: 22px;\n    font-size: 36px;\n    font-weight: 700;\n}\n\n\nimg{\n    max-width: 500px;\n    max-height: 500px;\n}\nimgContainer{\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n#results{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\ninput,button{\n    border: 2px solid rgb(230, 187, 47) ; padding: 10px; font-size: 16px;\n    border-radius: 12px;\n    background-color: bisque;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;;AAE3B;;;;AAIA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,oCAAoC,EAAE,aAAa,EAAE,eAAe;IACpE,mBAAmB;IACnB,wBAAwB;AAC5B",sourcesContent:["html{\n    width: 100%;\n    height: 100%;\n}\n\nbody{\n    background-color:#264653;\n    display: flex;\n    flex-direction: column;\n}\n#header{\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n\n}\n\n \n\n#textDiv{\n    display: flex;\n    justify-content: center;\n    color: white; \n    margin: 22px;\n    font-size: 36px;\n    font-weight: 700;\n}\n\n\nimg{\n    max-width: 500px;\n    max-height: 500px;\n}\nimgContainer{\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n#results{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\ninput,button{\n    border: 2px solid rgb(230, 187, 47) ; padding: 10px; font-size: 16px;\n    border-radius: 12px;\n    background-color: bisque;\n}\n"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,A="".concat(u," ").concat(l);a[u]=l+1;var p=t(A),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var f=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:A,updater:f,references:1})}i.push(A)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),u=t(56),l=t.n(u),A=t(540),p=t.n(A),d=t(113),f=t.n(d),h=t(208),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),o()(h.A,m),h.A&&h.A.locals&&h.A.locals;const y=document.getElementById("locationInput"),g=document.getElementById("searchButton"),v=document.getElementById("textDiv"),x=document.querySelector("img");function C(){return y.value}g.addEventListener("click",(()=>{console.log(C()),async function(){try{let n=await async function(n,e){try{let t="https://api.weatherapi.com/v1/current.json?key="+e+"&q="+n+"&aqi=yes";console.log("Fetching URL:",t);let r=await fetch(t);if(!r.ok)throw alert("cette localité n'existe pas"),new Error(`il y a une erreur de statut : ${r.status}`);return await r.json()}catch(n){console.log(n)}}(C(),"0066e5f307d24bb8881194244242606"),e=n.current.temp_c,t=n.current.condition.text,r="The temperature in "+C()+" is "+e+"°C, it is "+t;v.textContent=r,async function(){let n="https://api.giphy.com/v1/gifs/translate?api_key=Esw8v4wRljuoUEblbTuNpooxyKiJLgvR&s="+C();fetch(n,{mode:"cors"}).then((function(n){return n.json()})).then((function(n){x.src=n.data.images.original.url})).catch((function(n){console.log(n)}))}()}catch(n){console.log(n)}}()}))})();
//# sourceMappingURL=index.bundle.js.map