parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"T9OW":[function(require,module,exports) {
"use strict";require("../sass/main.scss"),console.log("Script for task3 connect");const t=(t,n)=>Math.floor(Math.random()*(n-t+1)+t),n=(n,o,a)=>{const s=t(200,500);return new Promise((t,o)=>{setTimeout(()=>{Math.random()>.3?t(n.id,s):o(n.id)},s)})},o=(t,n)=>{console.log(`Transaction ${t} processed in ${n}ms`)},a=t=>{console.warn(`Error processing transaction ${t}. Please try again later.`)};n({id:70,amount:150}).then(o).catch(a),n({id:71,amount:230}).then(o).catch(a),n({id:72,amount:75}).then(o).catch(a),n({id:73,amount:100}).then(o).catch(a);
},{"../sass/main.scss":"clu1"}]},{},["T9OW"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/task3.1af21c42.js.map