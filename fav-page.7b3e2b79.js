function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"6W11Y":"fav-page.7b3e2b79.js","lp5u4":"sprite.543b5112.svg"}'));const s=document.querySelector(".btn-up");s.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>350?s.classList.remove("btn-up_hide"):s.classList.add("btn-up_hide")}));var c;c=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();const a=document.querySelector(".fav-hero-pic"),l=document.querySelector(".fav-category-recipe-list"),d=document.querySelector(".fav-resipes-list"),u=document.querySelector(".fav-no-recipes-content"),f=document.querySelector(".all-category-btn");function p(){window.innerWidth<768?a.style.display="none":a.style.display="",window.addEventListener("resize",(()=>{window.innerWidth<768?a.style.display="none":a.style.display=""}))}function v(e){if(null===e)return p(),f.classList.add("is-hidden"),void u.classList.remove("is-hidden");d.innerHTML="";for(const n of e){const e=`<li class="fav-recipes-list-item">\n                      \n        <div class="recipe-card-gradient"></div>      \n        <div class="fav-recipe-card">\n         <span  class="add-to-favorite-checkbox" role="checkbox" aria-checked="true">  \n        <svg class="favorite-icon">\n                <use href="${t(c)}#icon-heart"></use>\n              </svg> \n        </span> \n            <img src="${n.preview}" alt="${n.description}" loading="lazy" />\n            <p class="fav-recipe-card-title">${n.title}</p>\n            <p class="fav-recipe-card-description">${n.description}</p>\n            <button type="button" class="fav-recipe-card-button" name="${n._id}" data-modal-recipe-open>See recipe</button>\n        </div>      \n        </li>`;d.insertAdjacentHTML("beforeend",e)}}!function(e){null===localStorage.getItem(e)&&u.classList.remove("is-hidden");u.classList.add("is-hidden"),function(e){if(null===e)return p(),f.classList.add("is-hidden"),void u.classList.remove("is-hidden");const t=e.flatMap((e=>e.category)).filter(((e,t,n)=>n.indexOf(e)===t));for(const e of t){const t=`<button type="button" class="category-btn">${e}</button>`;l.insertAdjacentHTML("beforeend",t)}}(JSON.parse(localStorage.getItem(e))),v(JSON.parse(localStorage.getItem(e)))}("favorites"),function(){const e=document.querySelectorAll(".category-btn"),t=JSON.parse(localStorage.getItem("favorites"));for(const n of e)n.addEventListener("click",(e=>{v(t.filter((t=>t.category===e.target.textContent))),"All categories"===e.target.textContent&&v(t)}))}();
//# sourceMappingURL=fav-page.7b3e2b79.js.map