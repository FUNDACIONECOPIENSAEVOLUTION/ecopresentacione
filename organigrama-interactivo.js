/* Atlas Ecopiensa · mapa base → derivado → aplicación y modelos (v1.9.0) */
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
const atlasRoadmap = [
  {code:'09',name:'Bloques y ladrillos',desc:'Bloques huecos, encajables, unidades no cocidas, celosías y fabricación',state:'10 modelos incorporados'},
  {code:'10',name:'Mobiliario y espacio público',desc:'Bancas, bolardos, jardineras, bordillos, separadores y piezas ornamentales',state:'Próximo paquete'},
  {code:'11',name:'Drenaje y contención',desc:'Tubos, box culvert, filtros, canales, gaviones, escolleras y sumideros',state:'Por ampliar'},
  {code:'12',name:'Vías e infraestructura',desc:'Adoquines, pavimentos, ciclovías, puentes, losetas y bases',state:'Por ampliar'},
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
function atlasModelPath(m){return 'imagenes/modelos/paquete-09-bloques/'+m.file+'.jpg';}
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
  area.innerHTML=atlasModels.map((m,i)=>'<button class="model-gallery-item" type="button" onclick="openAtlasModel('+i+')"><img src="'+atlasModelPath(m)+'" loading="lazy" alt="'+esc(m.name)+'"><strong>'+esc(m.name)+'</strong><small>'+esc(m.group)+'</small></button>').join('');
}
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
  if(!a||a.n==='Macetas y jardineras')return;
  const other=atlasModelsForApp(a.n);
  if(other.length)paintAtlasModelChoices(other);
};
function renderAtlasPlan(){
  byId('roadmapGrid').innerHTML=atlasRoadmap.map(r=>'<article class="roadmap-card"><span class="roadmap-index">PAQUETE '+r.code+'</span><h3>'+r.name+'</h3><p>'+r.desc+'</p><div class="roadmap-count">'+r.state+'</div></article>').join('');
}
if(document.getElementById('treeRoot')){
  renderAtlasTree();
  renderAtlasModels();
  renderAtlasPlan();
}
