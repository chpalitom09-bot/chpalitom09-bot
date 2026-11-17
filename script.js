const P=[
{n:"WikiMind",i:"brain-circuit",c:"web",big:1,hot:"Projet principal",d:"Plateforme française d'outils d'intelligence artificielle : chat multi-modèles, génération d'images, simulateur de bac, modèles embarqués dans le navigateur. Frontend, règles Firebase et déploiement faits de bout en bout.",t:["JavaScript","Firebase","ONNX","GitHub Pages"],l:[["Site","https://wikimindai.github.io/Wikimind","globe"],["Code","https://github.com/WikimindAI/Wikimind","github"]]},
{n:"ChromeOptimizer",i:"gauge",c:"ext",hot:"Chrome Web Store",d:"Extension de gestion et d'optimisation des onglets pour alléger la mémoire et garder un navigateur rapide.",t:["Manifest V3","JavaScript"],l:[["Installer","https://chromewebstore.google.com/detail/chromeoptimizer-gestionna/naefoklnpmljhohogkhabjdcdhlkcdog","chrome"],["Site","https://chpalitom09-bot.github.io/ChromeOptimizer","globe"],["Code","https://github.com/chpalitom09-bot/ChromeOptimizer","github"]]},
{n:"TomatoList",i:"sprout",c:"web",d:"Plateforme collaborative de recensement de variétés de tomates, avec comptes, pays et langues.",t:["JavaScript","Firebase","i18n"],l:[["Site","https://chpalitom09-bot.github.io/TomatoList","globe"],["Code","https://github.com/chpalitom09-bot/TomatoList","github"]]},
{n:"Pépins de tomates",i:"shopping-basket",c:"web",d:"Site vitrine et catalogue de variétés avec panier et commande, édition cloud connectée à TomatoList.",t:["HTML","JavaScript","Firebase"],l:[["Site","https://chpalitom09-bot.github.io/pepinsdetomates","globe"],["Code","https://github.com/chpalitom09-bot/pepinsdetomates","github"]]},
{n:"Local LLM",i:"server",c:"ia",d:"Guide et interface pour faire tourner des modèles de langage en local, avec détection de la RAM et du processeur.",t:["LLM","llama.cpp","JavaScript"],l:[["Site","https://wikimindai.github.io/LocalLLM","globe"],["Code","https://github.com/WikimindAI/LocalLLM","github"]]},
{n:"Open Food Calories",i:"apple",c:"web",d:"Outil de calcul nutritionnel basé sur des données alimentaires ouvertes.",t:["JavaScript","Open data"],l:[["Site","https://chpalitom09-bot.github.io/Open-food-calories","globe"],["Code","https://github.com/chpalitom09-bot/Open-food-calories","github"]]},
{n:"WikiMind Food API",i:"database",c:"ia",d:"API statique sans serveur construite sur la base CIQUAL des aliments français, consommable depuis n'importe quel site.",t:["API","JSON","CIQUAL"],l:[["Code","https://github.com/WikimindAI/wikimind-food-API","github"]]}
];
const S=[["JavaScript","braces"],["HTML et CSS","code-xml"],["Firebase","flame"],["GitHub Pages","github"],["Extensions Chrome","puzzle"],["ONNX","box"],["LLM locaux","cpu"],["API REST","webhook"],["Design d'interface","palette"],["Open source","git-branch"],["Python","terminal"],["Kaggle","bar-chart-3"]];
const $=s=>document.querySelector(s);
const cards=$("#cards");
cards.innerHTML=P.map(p=>`<article class="card${p.big?" big":""} reveal" data-c="${p.c}"><div class="ico"><i data-lucide="${p.i}"></i></div><h3>${p.n}${p.hot?`<span class="chip hot">${p.hot}</span>`:""}</h3><p>${p.d}</p><div class="tags">${p.t.map(x=>`<span>#${x}</span>`).join("")}</div><div class="links">${p.l.map(l=>`<a href="${l[1]}" target="_blank" rel="noopener"><i data-lucide="${l[2]}"></i>${l[0]}</a>`).join("")}</div></article>`).join("");
const pills=S.map(s=>`<span class="pill"><i data-lucide="${s[1]}"></i>${s[0]}</span>`).join("");
$("#track").innerHTML=pills+pills;
const init=()=>window.lucide&&lucide.createIcons();
window.addEventListener("load",init);
init();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
const watch=()=>document.querySelectorAll(".reveal:not(.in)").forEach(e=>io.observe(e));
watch();
const cnt=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;const el=x.target,max=+el.dataset.count,suf=el.dataset.suffix||"",t0=performance.now();const f=t=>{const k=Math.min((t-t0)/1200,1);el.textContent=Math.round(max*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f);cnt.unobserve(el)}),{threshold:.6});
document.querySelectorAll("[data-count]").forEach(e=>cnt.observe(e));
$("#filters").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;document.querySelectorAll("#filters button").forEach(x=>x.classList.toggle("on",x===b));const f=b.dataset.f;document.querySelectorAll(".card").forEach(c=>c.classList.toggle("hide",f!=="all"&&c.dataset.c!==f))});
cards.addEventListener("pointermove",e=>{const c=e.target.closest(".card");if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")});
const g=$("#glow");
addEventListener("pointermove",e=>{g.style.setProperty("--x",e.clientX+"px");g.style.setProperty("--y",e.clientY+"px")},{passive:true});
const bar=$("#bar"),nav=$("#nav");
addEventListener("scroll",()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";nav.classList.toggle("s",h.scrollTop>20)},{passive:true});
const words=["plateformes web","extensions Chrome","outils open source","API utiles"];
let wi=0,ci=words[0].length,del=true;
const rot=$("#rot");
(function tick(){const w=words[wi];ci+=del?-1:1;rot.textContent=w.slice(0,ci);let d=del?35:70;if(!del&&ci===w.length){del=true;d=1600}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;d=300}setTimeout(tick,d)})();
