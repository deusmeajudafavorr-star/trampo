const professionals=[
 {name:'Edson Cardoso Bandeira',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 9945-2897',address:'Rua Vaqueiro Raimundo Jacó, 147 - Leandro Bezerra de Meneses'},
 {name:'Hp Vidros',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 8856-7313',address:'Rua São Benedito, 583 - São Miguel'},
 {name:'Vidracaria Galvao',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 8847-0506',address:'Rua Doutora Maria Nilda de Santana, 132 - Lagoa Seca'},
 {name:'Aurelino Contrucao Sivil',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(73) 8836-7206',address:'Avenida Padre Cícero, 2555 - Triângulo'},
 {name:'Jose Osmar Marcos Pereira',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 9732-6901',address:'Avenida Madre Maria Nely Sobreira, 50 - Limoeiro'},
 {name:'Eb Construcoes',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 9660-8206',address:'Travessa Santa Inês, 196 - Pio XII'},
 {name:'Ampla Engenharia',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 3512-6546',address:'Rua João Freire de Araújo, 70 - Lagoa Seca'},
 {name:'Ap Construcoes',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 9676-6793',address:'Rua Unias Figueiras, 120 - Limoeiro'},
 {name:'Jair',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 9638-3626',address:'Rua Letícia Vasconcelos, 313 - Triângulo'},
 {name:'Antonio Soares da Silva',type:'Pedreiro',city:'Juazeiro do Norte',phone:'(88) 9976-5684',address:'Rua José Lopes de Oliveira, 225 - João Cabral'}
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
