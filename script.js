const professionals=[
 {name:'Pedreiro Cariri',type:'Pedreiro e reforma',city:'Juazeiro do Norte',phone:'(85) 9851-1515',address:'Rua Padre Pedro Ribeiro, 28 - Salesianos'},
 {name:'Casas Kariri',type:'Construcao civil',city:'Juazeiro do Norte',phone:'(88) 8143-2791',address:'Avenida Eduardo McLain, 390 - Triangulo'},
 {name:'Cvl',type:'Construcao civil',city:'Juazeiro do Norte',phone:'(88) 9743-6878',address:'Rua Padre Cicero, 821 - Centro'},
 {name:'C.A.S. Construcoes',type:'Construcao civil',city:'Juazeiro do Norte',phone:'(88) 9417-4204',address:'Rua Padre Joao Moretti, 109 - Jardim Gonzaga'},
 {name:'Jardins da Praca Empreendimento Imobiliario',type:'Construcao e empreendimentos',city:'Juazeiro do Norte',phone:'(85) 3458-1246',address:'Rua Genario de Oliveira, 900 - Lagoa Seca'},
 {name:'Construtora Ribeiro Gomes',type:'Construcao civil',city:'Juazeiro do Norte',phone:'(88) 9693-2898',address:'Rua Vereador Jose Goncalves de Almeida, 1162 - Tiradentes'},
 {name:'Jcm Empreendimentos Imobiliarios',type:'Construcao e empreendimentos',city:'Juazeiro do Norte',phone:'(88) 3572-3777',address:'Rua Abel Sobreira, 407 - Piraja'},
 {name:'Solucao Empreendimentos Imobiliarios',type:'Construcao e empreendimentos',city:'Juazeiro do Norte',phone:'(88) 8827-4650',address:'Avenida Quinco Melo, 7 - Aeroporto'},
 {name:'Meg Construcoes',type:'Construcao civil',city:'Juazeiro do Norte',phone:'(88) 8834-3216',address:'Rua Carolina Sobreira, 466 - Piraja'},
 {name:'Gc Construcoes',type:'Construcao civil',city:'Juazeiro do Norte',phone:'(88) 2131-3568',address:'Rua Maria Senhor ia da Silva, 35 - Professora Maria Geli Sa Barreto'}
];
const cards=document.getElementById('cards');
const emptyState=document.getElementById('emptyState');
const resultCount=document.getElementById('resultCount');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(list){
 cards.innerHTML=list.map(p=>`<article class="card"><div class="card-top"><div class="avatar">${p.name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><span class="rating">Contato publico</span></div><h3>${p.name}</h3><p class="type">${p.type}</p><p class="city">${p.city}</p><p class="city">${p.address}</p><p class="city">${p.phone}</p><a class="card-link" href="tel:${p.phone.replace(/\D/g,'')}">Ligar</a></article>`).join('');
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
