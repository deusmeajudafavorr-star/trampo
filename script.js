const professionals=[
 {name:'Ampla Engenharia',type:'Construtora e Engenharia Civil',city:'Juazeiro do Norte',phone:'(88) 3512-6546',address:'Rua João Freire de Araújo, 70 - Lagoa Seca',image:'https://amplaengenharia.eng.br/wp-content/uploads/2019/03/KM_97762.png',imageSource:'Site oficial da Ampla Engenharia'}
];
const cards=document.getElementById('cards');
const emptyState=document.getElementById('emptyState');
const resultCount=document.getElementById('resultCount');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(list){
 cards.innerHTML=list.map(p=>`<article class="card"><div class="card-image-wrap"><img class="card-image" src="${p.image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer"><span class="rating">Foto empresarial</span></div><h3>${p.name}</h3><p class="type">${p.type}</p><p class="city">${p.city}</p><p class="city">${p.address}</p><p class="city">${p.phone}</p><a class="card-link" href="tel:${p.phone.replace(/\D/g,'')}">Ligar</a></article>`).join('');
 resultCount.textContent=`${list.length} resultado${list.length===1?'':'s'}`;
 emptyState.hidden=list.length!==0;
}
function search(){
 const service=normalize(document.getElementById('serviceInput').value.trim());
 const city=normalize(document.getElementById('cityInput').value.trim());
 const filtered=professionals.filter(p=>(!service||normalize(p.type).includes(service)||normalize(p.name).includes(service))&&(!city||normalize(p.city).includes(city)));
 render(filtered);
 document.getElementById('profissionais').scrollIntoView({behavior:'smooth'});
}
document.getElementById('searchForm').addEventListener('submit',e=>{e.preventDefault();search()});
document.querySelectorAll('#categories button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('#categories button').forEach(b=>b.classList.remove('active'));button.classList.add('active');document.getElementById('serviceInput').value=button.dataset.category;search()}));
render(professionals);
