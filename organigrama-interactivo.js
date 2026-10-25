/* Atlas Ecopiensa · mapa base → derivado → aplicación y modelos (v1.12.0) */
'use strict';
const atlasModels = [
  {file:'bloque-muro',name:'Bloque de muro',group:'Bloques de cemento',app:'Bloques huecos de cemento',desc:'Unidad de concreto para pared'},
  {file:'celosia-01',name:'Celosía decorativa · modelo A',group:'Prefabricados arquitectónicos',app:'Prefabricados arquitectónicos',desc:'Bloque de ventilación y fachada'},
  {file:'celosia-02',name:'Celosía decorativa · modelo B',group:'Prefabricados arquitectónicos',app:'Prefabricados arquitectónicos',desc:'Otra geometría de pieza calada'},
  {file:'tierra-comprimida',name:'Tierra comprimida',group:'Bloques no cocidos',app:'Ladrillos no cocidos / bloques',desc:'Pieza de tierra compactada'},
  {file:'encajable',name:'Bloque de encastre',group:'Bloques encajables',app:'Bloques encajables ecológicos',desc:'Referencia de bloque de tierra con encaje'},
  {file:'bloque-grande',name:'Bloque de gran formato',group:'Bloques no cocidos',app:'Ladrillos no cocidos / bloques',desc:'Unidad de tierra comprimida de mayor tamaño'},
  {file:'fabricacion-bloques',name:'Fabricación · etapa 1',group:'Procesos',app:'Bloques huecos de cemento',desc:'Producción de elementos de concreto'},
  {file:'ladrillos-bloques',name:'Ladrillos y bloques apilados',group:'Catálogo de unidades',app:'Bloques huecos de cemento',desc:'Diversas unidades en almacén de obra'},
  {file:'fabricacion-02',name:'Fabricación · etapa 2',group:'Procesos',app:'Bloques huecos de cemento',desc:'Otra vista del proceso de producción'},
  {file:'vivienda-ceb',name:'Vivienda con bloques de tierra',group:'Sistemas constructivos',app:'Ladrillos no cocidos / bloques',desc:'Aplicación de bloque comprimido'}
];
atlasModels.forEach(m=>{m.pack=9;});
atlasModels.push(
  {pack:10,file:'banca-urbana',name:'Banca urbana con apoyos de concreto',group:'Mobiliario',app:'Bancas urbanas',desc:'Banca con estructura de concreto y acabado verde'},
  {pack:10,file:'bolardo',name:'Bolardo cilíndrico',group:'Mobiliario',app:'Bolardos y topes',desc:'Bolardo para delimitar circulación peatonal'},
  {pack:10,file:'bordillo',name:'Bordillo modular',group:'Mobiliario',app:'Bordillos y sardineles',desc:'Bordillo prefabricado de perfil continuo'},
  {pack:10,file:'jardinera-lineal',name:'Jardinera rectangular',group:'Mobiliario',app:'Macetas y jardineras',desc:'Jardinera de gran formato para espacio público'},
  {pack:10,file:'jardinera-cilindrica',name:'Maceta cilíndrica',group:'Mobiliario',app:'Macetas y jardineras',desc:'Maceta cilíndrica para vegetación ornamental'},
  {pack:10,file:'banca-jardinera',name:'Banca con jardinera integrada',group:'Mobiliario',app:'Bancas urbanas',desc:'Módulo combinado de asiento y jardinera'},
  {pack:10,file:'barrera-vial',name:'Barrera de concreto',group:'Mobiliario',app:'Barrera de protección y separadores',desc:'Barrera prefabricada para separación de flujos'},
  {pack:10,file:'estacionamiento-tope',name:'Tope de estacionamiento',group:'Mobiliario',app:'Bolardos y topes',desc:'Elemento modular de estacionamiento'},
  {pack:10,file:'mesa-picnic',name:'Mesa con bancas para parque',group:'Mobiliario',app:'Bancas urbanas',desc:'Conjunto de mesa y asientos para espacio público'},
  {pack:10,file:'adoquin-modular',name:'Adoquín modular',group:'Mobiliario',app:'Adoquines',desc:'Piezas articuladas con acabado verde'},
  {pack:11,file:'tubo-concreto',name:'Tubería de concreto',group:'Drenajes',app:'Tubos de concreto',desc:'Tubo prefabricado de sección circular'},
  {pack:11,file:'box-culvert',name:'Box culvert prefabricado',group:'Drenajes',app:'Box culvert',desc:'Módulo de conducción con sección rectangular'},
  {pack:11,file:'canal-prefabricado',name:'Canal prefabricado en U',group:'Drenajes',app:'Canales en concreto',desc:'Canal de conducción abierto'},
  {pack:11,file:'cuneta-concreto',name:'Cuneta de concreto',group:'Drenajes',app:'Cunetas y sumideros',desc:'Perfil longitudinal para escorrentía'},
  {pack:11,file:'sumidero-modular',name:'Sumidero con rejilla',group:'Drenajes',app:'Cunetas y sumideros',desc:'Caja de captación pluvial con rejilla'},
  {pack:11,file:'canal-lineal',name:'Canal de drenaje lineal',group:'Drenajes',app:'Cunetas y sumideros',desc:'Rejilla continua de drenaje superficial'},
  {pack:11,file:'gabion-modular',name:'Muro de gaviones',group:'Drenajes',app:'Gaviones',desc:'Canastillas metálicas rellenas de piedra'},
  {pack:11,file:'proteccion-ribera',name:'Bloque para protección de ribera',group:'Drenajes',app:'Jarillones y protección de riberas',desc:'Elemento de revestimiento fluvial'},
  {pack:11,file:'disipador-energia',name:'Disipador hidráulico',group:'Drenajes',app:'Disipadores de energía',desc:'Escalonamiento para moderar energía de escorrentía'},
  {pack:11,file:'dren-frances',name:'Dren francés granular',group:'Drenajes',app:'Filtros franceses',desc:'Sistema de grava, geotextil y tubo perforado'},
  {pack:12,file:'carretera-pavimento',name:'Carretera pavimentada',group:'Vías',app:'Calzadas de concreto',desc:'Vista general de calzada en zona montañosa'},
  {pack:12,file:'via-rural',name:'Vía rural de montaña',group:'Vías',app:'Afirmado rural',desc:'Referente de corredor rural; el tipo de capa superficial depende del proyecto'},
  {pack:12,file:'via-montana',name:'Infraestructura vial de montaña',group:'Vías',app:'Mezclas asfálticas',desc:'Calzada de referencia con alineamiento montañoso'},
  {pack:12,file:'anden-peatonal',name:'Andén urbano arbolado',group:'Vías',app:'Andenes peatonales',desc:'Pavimento y zonas peatonales accesibles'},
  {pack:12,file:'pavimento-permeable',name:'Pavimento permeable de plaza',group:'Vías',app:'Pavimentos permeables',desc:'Pavimento para manejo superficial de agua'},
  {pack:12,file:'puente-principal',name:'Puente sobre río montañoso',group:'Vías',app:'Puentes y tableros',desc:'Puente de concreto con tablero elevado'},
  {pack:12,file:'puente-rural',name:'Puente rural de concreto',group:'Vías',app:'Puentes y tableros',desc:'Paso sobre cauce rural'},
  {pack:12,file:'base-terraplen',name:'Terraplén vial compactado',group:'Vías',app:'Terraplenes y plataformas',desc:'Compactación por capas sobre explanación'},
  {pack:12,file:'base-compactacion',name:'Compactación de base granular',group:'Vías',app:'Bases de carreteras',desc:'Preparación de capas de apoyo vial'},
  {pack:12,file:'estabilizacion-talud',name:'Estabilización de talud vial',group:'Vías',app:'Estabilización de taludes',desc:'Terrazas y protección de ladera vial'}
);
const atlasPackNames={all:'Todos',9:'Bloques y ladrillos',10:'Mobiliario',11:'Drenajes',12:'Vías e infraestructura'};
let atlasSelectedPack='all';
const atlasRoadmap = [
  {code:'09',name:'Bloques y ladrillos',desc:'Bloques huecos, encajables, unidades no cocidas, celosías y fabricación',state:'10 modelos incorporados'},
  {code:'10',name:'Mobiliario y espacio público',desc:'Bancas, bolardos, jardineras, bordillos, separadores y piezas ornamentales',state:'10 modelos incorporados'},
  {code:'11',name:'Drenaje y contención',desc:'Tubos, box culvert, filtros, canales, gaviones, escolleras y sumideros',state:'10 modelos incorporados'},
  {code:'12',name:'Vías e infraestructura',desc:'Pavimentos, vías de montaña, andenes, puentes, plataformas y bases',state:'10 modelos incorporados'},
  {code:'13',name:'Morteros y acabados',desc:'Morteros, grout, repellos, pegantes, nivelaciones y concretos',state:'Por ampliar'},
  {code:'14',name:'Vivienda y sistemas modulares',desc:'Muros, paneles, fachadas, unidades y secuencias constructivas',state:'Por ampliar'}
];
let atlasOrigin = 'rio';
let atlasSelectedMaterial = 't2';
const atlasDirect = {
  rio: ['t1','t2','t3','t4','an','ag','af','pl'],
  rcd: ['rc','rf','ra','rm']
};
const atlasDerived = {
  rio: ['mi','bs','bg','dr','gr','co','mo'],
  rcd: ['rs','mi','bs','bg','dr','co','mo']
};
function atlasModelPath(m){
 const names={9:'bloques',10:'mobiliario',11:'drenajes',12:'vias'};
 const pack=m.pack||9;
 return 'imagenes/modelos/paquete-'+String(pack).padStart(2,'0')+'-'+names[pack]+'/'+m.file+'.jpg';
}
function atlasTreeTitle(o){return o==='rio'?'Canto rodado y material de río':'Residuos minerales de construcción (RCD)';}
function atlasMaterialButton(id){
  const m=materials.find(v=>v.id===id);
  if(!m) return '';
  const c=m.id===atlasSelectedMaterial?'active':'';
  return '<button type="button" class="'+c+'" onclick="setAtlasTreeMaterial(\''+id+'\')" aria-pressed="'+(m.id===atlasSelectedMaterial)+'"><img src="'+imagePath(m.id)+'" alt=""><span><strong>'+esc(m.n)+'</strong><small>'+esc(m.size)+'</small></span></button>';
}
function renderAtlasTree(){
  const originImg = atlasOrigin==='rio'?'imagenes/materiales/paquete-01/t1.jpg':'imagenes/materiales/paquete-02/rc.jpg';
  byId('treeRiver').classList.toggle('active',atlasOrigin==='rio');
  byId('treeRcd').classList.toggle('active',atlasOrigin==='rcd');
  byId('treeRoot').innerHTML='<img src="'+originImg+'" alt=""><strong>'+atlasTreeTitle(atlasOrigin)+'</strong><p>Origen con trazabilidad y autorización aplicable</p>';
  byId('treeProcess').innerHTML=(atlasOrigin==='rio'?[
    'Seleccionar y separar el material',
    'Trituración primaria y secundaria',
    'Zarandeo y clasificación por tamaño',
    'Dosificar mezclas cuando corresponda'
  ]:[
    'Separar concreto, cerámica y asfalto',
    'Retirar materiales impropios',
    'Trituración y clasificación',
    'Caracterización y dosificación según destino'
  ]).map((x,i)=>'<div class="tree-process-step"><span>'+(i+1)+'.</span> '+esc(x)+'</div>').join('');
  byId('treeProducts').innerHTML='<div class="tree-categories">Subproductos de clasificación</div>'+atlasDirect[atlasOrigin].map(atlasMaterialButton).join('')+'<div class="tree-categories">Mezclas y productos elaborados</div>'+atlasDerived[atlasOrigin].map(atlasMaterialButton).join('');
  const matched=apps.filter(a=>a.materials.includes(atlasSelectedMaterial));
  byId('treeUses').innerHTML=matched.map(a=>'<button type="button" onclick="openApp('+a.id+')"><img src="imagenes/aplicaciones/paquete-'+String(appPhotos[a.n]?.pack||3).padStart(2,'0')+'/'+appPhotos[a.n]?.file+'.jpg" alt=""><span><strong>'+esc(a.n)+'</strong><small>'+esc(a.desc)+'</small></span></button>').join('');
  const m=materials.find(x=>x.id===atlasSelectedMaterial);
  byId('treeSummary').textContent=(m?m.n:'Material')+' · '+matched.length+' aplicaciones relacionadas';
}
window.setAtlasOrigin=function(next){
  atlasOrigin=next==='rcd'?'rcd':'rio';
  atlasSelectedMaterial=atlasOrigin==='rio'?'t2':'rc';
  renderAtlasTree();
};
window.setAtlasTreeMaterial=function(id){
  if(!materials.find(x=>x.id===id))return;
  atlasSelectedMaterial=id;renderAtlasTree();
};
function renderAtlasModels(){
  const area=byId('modelosGrid');
  if(!area)return;
  const tabs=byId('modelosFiltros');
  if(tabs)tabs.innerHTML=Object.entries(atlasPackNames).map(([id,label])=>'<button type="button" class="'+(String(atlasSelectedPack)===id?'active':'')+'" aria-pressed="'+(String(atlasSelectedPack)===id)+'" onclick="filterAtlasModels(\''+id+'\')">'+(id==='all'?'Todos ('+atlasModels.length+')':'Paquete '+String(id).padStart(2,'0')+' · '+label)+'</button>').join('');
  const entries=atlasModels.map((m,i)=>({m,i})).filter(x=>atlasSelectedPack==='all'||String(x.m.pack)===String(atlasSelectedPack));
  area.innerHTML=entries.map(({m,i})=>'<button class="model-gallery-item" type="button" onclick="openAtlasModel('+i+')"><img src="'+atlasModelPath(m)+'" loading="lazy" alt="'+esc(m.name)+'"><strong>'+esc(m.name)+'</strong><small>Paquete '+String(m.pack).padStart(2,'0')+' · '+esc(m.group)+'</small></button>').join('');
  const count=byId('modelosCount');if(count)count.textContent=entries.length+' modelos';
}
window.filterAtlasModels=function(pack){atlasSelectedPack=pack==='all'?'all':String(pack);renderAtlasModels();};
function atlasModelsForApp(app){
  return atlasModels.map((m,i)=>({m,i})).filter(x=>x.m.app===app);
}
function paintAtlasModelChoices(group){
  const box=byId('modalModels');
  box.style.display='block';
  box.innerHTML='<h3>Otros modelos de este producto</h3><div class="model-grid">'+group.map(({m,i})=>'<button class="model-chip" type="button" onclick="showAtlasModel('+i+')"><img src="'+atlasModelPath(m)+'" loading="lazy" alt=""><span>'+esc(m.name)+'</span></button>').join('')+'</div>';
}
window.showAtlasModel=function(i){
  const m=atlasModels[i];
  if(!m)return;
  byId('modalImage').innerHTML='<img src="'+atlasModelPath(m)+'" alt="'+esc(m.name)+'">';
  byId('modalText').textContent=m.desc;
};
window.openAtlasModel=function(i){
  const m=atlasModels[i];
  if(!m)return;
  byId('modalImage').innerHTML='<img src="'+atlasModelPath(m)+'" alt="'+esc(m.name)+'">';
  byId('modalTitle').textContent=m.name;
  byId('modalEyebrow').textContent=m.group;
  byId('modalText').textContent=m.desc;
  byId('modalBadges').innerHTML='';
  paintAtlasModelChoices(atlasModelsForApp(m.app));
  byId('modalBack').classList.add('open');document.body.style.overflow='hidden';
};
const atlasOriginalOpenApp=window.openApp;
window.openApp=function(id){
  atlasOriginalOpenApp(id);
  const a=apps.find(x=>x.id===id);
  if(!a)return;
  const other=atlasModelsForApp(a.n);
  if(!other.length)return;
  if(a.n==='Macetas y jardineras'){
    const box=byId('modalModels');
    box.style.display='block';
    box.innerHTML+='<h3>Otras variantes de macetas y jardineras</h3><div class="model-grid">'+other.map(({m,i})=>'<button class="model-chip" type="button" onclick="showAtlasModel('+i+')"><img src="'+atlasModelPath(m)+'" loading="lazy" alt=""><span>'+esc(m.name)+'</span></button>').join('')+'</div>';
  }else{paintAtlasModelChoices(other);}
};
function renderAtlasPlan(){
  byId('roadmapGrid').innerHTML=atlasRoadmap.map(r=>'<article class="roadmap-card"><span class="roadmap-index">PAQUETE '+r.code+'</span><h3>'+r.name+'</h3><p>'+r.desc+'</p><div class="roadmap-count">'+r.state+'</div></article>').join('');
}
if(document.getElementById('treeRoot')){
  renderAtlasTree();
  renderAtlasModels();
  renderAtlasPlan();
}
