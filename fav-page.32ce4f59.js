function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},t.parcelRequired7c6=o),o.register("kyEFX",(function(n,t){var r,i;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)o[n[t]]=e[n[t]]},i=function(e){var n=o[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o("kyEFX").register(JSON.parse('{"6PTGi":"fav-page.32ce4f59.js","lp5u4":"sprite.18b68c41.svg","jglXY":"index.0583ebae.js"}'));var a,c=o("7rYDH"),s=o("7Y9D8");a=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var l=o("4ZS0N");const d=new(0,c.UnsplashAPI),f=localStorage.getItem("listOfFavoriteRecipe"),u=JSON.parse(f),p=document.querySelector(".fav-resipes-list");async function v(e){d.endpoint=`/recipes/${e}`;const{data:t}=await d.fetchRecipes();!function(e){try{const t=`<li class="fav-recipes-list-item"">\n            <div class="recipe-card-gradient"></div>\n                <svg class="favorite-icon">\n                  <use id="iconUse" href="${n(a)}#icon-heart"></use>\n                </svg>\n              <div class="fav-recipe-card">\n                <img src="${e.preview}" alt="${e.description}" loading="lazy" />\n                <p class="fav-recipe-card-title">${e.title}</p>\n                <p class="fav-recipe-card-description">${e.description}</p>\n                <button type="button" class="fav-recipe-card-button" name="${e._id}" data-modal-recipte-open>See recipe</button>\n              </div>\n            </li>`;p.insertAdjacentHTML("beforeend",t)}catch(e){n(s).Notify.warning("Sorry, something went wrong. Please try later.")}}(t)}p.addEventListener("click",(function(e){const n=e.target.name;"fav-recipe-card-button"===e.target.className&&(0,l.heardleRecipeById)(n)})),function(){for(let e in u)v(e)}();
//# sourceMappingURL=fav-page.32ce4f59.js.map