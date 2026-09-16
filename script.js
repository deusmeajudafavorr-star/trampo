const professionals=[
 {name:'Ampla Engenharia',type:'Engenharia civil e construcao',city:'Juazeiro do Norte',phone:'(88) 3512-6546',address:'Rua Joao Freire de Araujo, 70 - Lagoa Seca',image:'https://amplaengenharia.eng.br/wp-content/uploads/2019/03/KM_97762.png',imageLabel:'Foto empresarial'},
 {name:'Adalto Construtor',type:'Pedreiro e construcao',city:'Juazeiro do Norte',phone:'(88) 9927-3947',address:'Rua Beata Maria de Araujo, 1054 - Joao Cabral',image:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'S.O.S. Chico Construtor',type:'Pedreiro e construcao',city:'Juazeiro do Norte',phone:'(88) 3511-5266',address:'Rua Marechal Juarez Tavora, 325 - Juvencio Santana',image:'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'Araujo Construcoes',type:'Pedreiro e construcao',city:'Juazeiro do Norte',phone:'(88) 9754-3078',address:'Rua Jose Vitorino Sobrinho, 194 - Sao Jose',image:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'AP Construcoes',type:'Pedreiro e construcao',city:'Juazeiro do Norte',phone:'(88) 9676-6793',address:'Rua Unias Figueiras, 120 - Limoeiro',image:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'Leal Construcoes e Reformas',type:'Pedreiro e reformas',city:'Juazeiro do Norte',phone:'(88) 8833-1278',address:'Rua Carmelita Nunes Pereira, 65 - Sao Jose',image:'https://images.unsplash.com/photo-1590644365607-1c5a7c0e5f5e?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'DJ Construcoes',type:'Pedreiro e construcao',city:'Juazeiro do Norte',phone:'(88) 8861-3462',address:'Rua Pio IX, 563 - Salesianos',image:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'Jose Berlanio Pereira',type:'Pedreiro e construcao',city:'Juazeiro do Norte',phone:'(88) 9403-2282',address:'Rua Joao Crispim, 36 - Aeroporto',image:'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'Pedreiro e Servicos Gerais',type:'Pedreiro e servicos gerais',city:'Juazeiro do Norte',phone:'(88) 8857-2088',address:'Rua Luiz de Freitas Roque, 853 - Frei Damiao',image:'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'Francinaldo da Silva Pereira',type:'Pedreiro e construcao',city:'Juazeiro do Norte',phone:'(88) 9201-2409',address:'Avenida Jose Bezerra de Menezes, 431 - Pio XII',image:'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'},
 {name:'Casa Nova Construtora',type:'Obras de alvenaria e construcao',city:'Juazeiro do Norte',phone:'(88) 99775-7488',address:'Avenida Deputado Leao Sampaio, 1814 - Lagoa Seca',image:'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=500&q=80',imageLabel:'Foto ilustrativa'}
];
const cards=document.getElementById('cards');
const emptyState=document.getElementById('emptyState');
const resultCount=document.getElementById('resultCount');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(list){
 cards.innerHTML=list.map(p=>`<article class="card"><div class="card-top"><img class="profile-photo" src="${p.image}" alt="${p.imageLabel} de ${p.name}" loading="lazy"><span class="rating">${p.imageLabel}</span></div><h3>${p.name}</h3><p class="type">${p.type}</p><p class="city">${p.city}</p><p class="city">${p.address}</p><p class="city">${p.phone}</p><a class="card-link" href="tel:${p.phone.replace(/\D/g,'')}">Ligar</a></article>`).join('');
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