const professionals=[
 {name:'Carlos Ferreira',type:'Eletricista',city:'Juazeiro do Norte',rating:'5,0'},
 {name:'Marcos Lima',type:'Encanador',city:'Juazeiro do Norte',rating:'4,9'},
 {name:'Ana Souza',type:'Diarista',city:'Crato',rating:'5,0'},
 {name:'Rafael Alves',type:'Pintor',city:'Barbalha',rating:'4,8'},
 {name:'Joao Martins',type:'Montador de moveis',city:'Juazeiro do Norte',rating:'4,9'},
 {name:'Lucas Santos',type:'Jardineiro',city:'Crato',rating:'4,8'},
 {name:'Fernanda Costa',type:'Manicure',city:'Barbalha',rating:'5,0'},
 {name:'Pedro Rocha',type:'Marceneiro',city:'Juazeiro do Norte',rating:'4,9'},
 {name:'Bruno Melo',type:'Tecnico de ar condicionado',city:'Crato',rating:'4,8'}
];
const cards=document.getElementById('cards');
const emptyState=document.getElementById('emptyState');
const resultCount=document.getElementById('resultCount');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(list){
 cards.innerHTML=list.map(p=>`<article class="card"><div class="card-top"><div class="avatar">${p.name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><span class="rating">★ ${p.rating}</span></div><h3>${p.name}</h3><p class="type">${p.type}</p><p class="city">${p.city}</p><a class="card-link" href="#cadastro">Ver profissional</a></article>`).join('');
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
