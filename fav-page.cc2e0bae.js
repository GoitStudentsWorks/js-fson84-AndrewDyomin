!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"7vX0O":"fav-page.cc2e0bae.js","ee16w":"sprite.543b5112.svg"}'));var a=document.querySelector(".btn-up");a.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>350?a.classList.remove("btn-up_hide"):a.classList.add("btn-up_hide")}));var c;c=i("aNJCr").getBundleURL("7vX0O")+i("iE7OH").resolve("ee16w");var l=document.querySelector(".fav-hero-pic"),s=document.querySelector(".fav-category-recipe-list"),d=document.querySelector(".fav-resipes-list"),u=document.querySelector(".fav-no-recipes-content"),f=document.querySelector(".all-category-btn"),v="favorites";function p(){window.innerWidth<768?l.style.display="none":l.style.display="",window.addEventListener("resize",(function(){window.innerWidth<768?l.style.display="none":l.style.display=""}))}function y(e){if(null===e)return p(),f.classList.add("is-hidden"),void u.classList.remove("is-hidden");d.innerHTML="";var n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value,s='<li class="fav-recipes-list-item">\n                      \n        <div class="recipe-card-gradient"></div>      \n        <div class="fav-recipe-card">\n         <span  class="add-to-favorite-checkbox" role="checkbox" aria-checked="true">  \n        <svg class="favorite-icon">\n                <use href="'.concat(t(c),'#icon-heart"></use>\n              </svg> \n        </span> \n            <img src="').concat(l.preview,'" alt="').concat(l.description,'" loading="lazy" />\n            <p class="fav-recipe-card-title">').concat(l.title,'</p>\n            <p class="fav-recipe-card-description">').concat(l.description,'</p>\n            <button type="button" class="fav-recipe-card-button" name="').concat(l._id,'" data-modal-recipe-open>See recipe</button>\n        </div>      \n        </li>');d.insertAdjacentHTML("beforeend",s)}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}!function(e){null===localStorage.getItem(e)&&u.classList.remove("is-hidden");u.classList.add("is-hidden"),function(e){if(null===e)return p(),f.classList.add("is-hidden"),void u.classList.remove("is-hidden");var t=e.flatMap((function(e){return e.category})).filter((function(e,t,n){return n.indexOf(e)===t})),n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value,l='<button type="button" class="category-btn">'.concat(c,"</button>");s.insertAdjacentHTML("beforeend",l)}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}(JSON.parse(localStorage.getItem(e))),y(JSON.parse(localStorage.getItem(e)))}(v),function(){var e=document.querySelectorAll(".category-btn"),t=JSON.parse(localStorage.getItem(v)),n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){i.value.addEventListener("click",(function(e){y(t.filter((function(t){return t.category===e.target.textContent}))),"All categories"===e.target.textContent&&y(t)}))}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}()}();
//# sourceMappingURL=fav-page.cc2e0bae.js.map