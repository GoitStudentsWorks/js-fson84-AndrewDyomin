var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("dpZmf"),i("7Y9D8"),i("7rYDH");const o=document.querySelector(".fav-hero-pic"),r=document.querySelector(".fav-category-recipe-list"),s=document.querySelector(".fav-resipes-list"),c=document.querySelector(".fav-no-recipes-content"),a=document.querySelector(".category-btn");!function(e){""===localStorage.getItem(e)&&c.classList.remove("is-hidden");c.classList.add("is-hidden"),function(e){if(console.log(e),null===e)return function(){window.innerWidth<768?o.style.display="none":o.style.display="";window.addEventListener("resize",(()=>{window.innerWidth<768?o.style.display="none":o.style.display=""}))}(),a.classList.add("is-hidden"),void c.classList.remove("is-hidden");const t=e.flatMap((e=>e.category)).filter(((e,t,n)=>n.indexOf(e)===t));console.log(t);for(const e of t){const t=`<button type="button" class="category-btn">${e}</button>`;r.insertAdjacentHTML("beforeend",t)}s.innerHTML="";for(const t of e){const e=`<li class="fav-recipes-list-item">\n            <svg class="favorite-heart-icon">\n                <use href="/src/images/sprite.svg#icon-heart-checked"></use>\n            </svg>                 \n        <div class="recipe-card-gradient"></div>      \n        <div class="fav-recipe-card">\n            <img src="${t.preview}" alt="${t.description}" loading="lazy" />\n            <p class="fav-recipe-card-title">${t.title}</p>\n            <p class="fav-recipe-card-description">${t.description}</p>\n            <button type="button" class="fav-recipe-card-button" name="${t._id}" data-modal-recipe-open>See recipe</button>\n        </div>\n\n        \n        </li>`;s.insertAdjacentHTML("beforeend",e)}}(JSON.parse(localStorage.getItem(e)))}("favorites"),console.log(localStorage.getItem("favorites"));
//# sourceMappingURL=fav-page.98753fd8.js.map
