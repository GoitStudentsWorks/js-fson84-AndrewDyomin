const e=document.getElementById("categories");fetch("https://tasty-treats-backend.p.goit.global/api/categories").then((e=>e.json())).then((t=>{const n=function(e){const t=document.createElement("ul");return e.forEach((e=>{const n=document.createElement("li"),c=document.createElement("button");c.textContent=e.name,c.addEventListener("click",(()=>{c.classList.add("active"),console.log("Category clicked:",e)})),n.appendChild(c),t.appendChild(n)})),t}(t);e.appendChild(n)})).catch((e=>{console.error("Error:",e)}));
//# sourceMappingURL=index.a6caa8df.js.map