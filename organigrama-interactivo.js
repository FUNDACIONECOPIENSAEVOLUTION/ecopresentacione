/* Atlas Ecopiensa · mapa base → derivado → aplicación y modelos (v1.13.0) */
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
atlasModels.push(
 {pack:13,file:'grout-mamposteria',name:'Relleno de celdas con grout',group:'Morteros y acabados',app:'Muros de mampostería reforzada',desc:'Relleno cementicio de celdas de mampostería con acero de refuerzo'},
 {pack:13,file:'estuco-pared',name:'Acabado de estuco y pañete',group:'Morteros y acabados',app:'Repellos y pañetes',desc:'Aplicación y alisado de revestimiento de muro'},
 {pack:13,file:'adhesivo-baldosas',name:'Adhesivo para revestimiento cerámico',group:'Morteros y acabados',app:'Pegantes cementicios',desc:'Aplicación de mortero adhesivo y colocación de baldosas'},
 {pack:14,file:'casa-sostenible',name:'Vivienda sostenible contemporánea',group:'Viviendas y sistemas modulares',app:'Prefabricados arquitectónicos',desc:'Propuesta arquitectónica de vivienda sostenible para desarrollar soluciones constructivas'},
 {pack:14,file:'fachada-celosias',name:'Fachada con celosías decorativas',group:'Viviendas y sistemas modulares',app:'Prefabricados arquitectónicos',desc:'Fachada y elementos de ventilación formados por piezas modulares'},
 {pack:14,file:'cabana-modular',name:'Cabaña modular en entorno natural',group:'Viviendas y sistemas modulares',app:'Prefabricados arquitectónicos',desc:'Concepto de vivienda modular en un entorno rural'}
);
atlasModels.push(
 {pack:15,file:'pavimento-permeable',name:'Pavimento permeable · sección de drenaje',group:'Detalles constructivos',app:'Pavimentos permeables',desc:'Sección visual de capas y circulación de agua'},
 {pack:15,file:'dren-frances-corte',name:'Dren francés · corte transversal',group:'Detalles constructivos',app:'Filtros franceses',desc:'Geotextil, agregado drenante y tubería perforada'},
 {pack:15,file:'muro-mamposteria-corte',name:'Muro reforzado · sección',group:'Detalles constructivos',app:'Muros de mampostería reforzada',desc:'Bloques huecos, acero y relleno de celdas'},
 {pack:15,file:'box-culvert-corte',name:'Box culvert · sección hidráulica',group:'Detalles constructivos',app:'Box culvert',desc:'Cajón de concreto y capas de apoyo'},
 {pack:15,file:'gaviones-corte',name:'Gaviones · sección de talud',group:'Detalles constructivos',app:'Gaviones',desc:'Malla metálica, roca drenante y relleno de trasdós'},
 {pack:15,file:'granulometria-guia',name:'Guía visual de tamaños de agregados',group:'Detalles constructivos',app:'Bases de carreteras',desc:'Fracciones granulares representativas, sin escala granulométrica certificada'},
 {pack:15,file:'carretera-corte',name:'Carretera · capas de pavimento',group:'Detalles constructivos',app:'Bases de carreteras',desc:'Rodadura, base, subbase y subrasante'},
 {pack:15,file:'drenaje-pluvial',name:'Sumidero urbano · corte',group:'Detalles constructivos',app:'Cunetas y sumideros',desc:'Captación y evacuación de agua superficial'},
 {pack:15,file:'fachada-celosias-corte',name:'Fachada modular · detalle de celosías',group:'Detalles constructivos',app:'Prefabricados arquitectónicos',desc:'Elementos de fijación, ventilación y piezas modulares'},
 {pack:15,file:'jardinera-banca-corte',name:'Jardinera y banca iluminada · sección',group:'Detalles constructivos',app:'Macetas y jardineras',desc:'Iluminación, drenaje, sustrato y base nivelable'},
 {pack:16,file:'patio-nocturno',name:'Patio iluminado con macetas',group:'Paisajismo y diseño',app:'Macetas y jardineras',desc:'Conjunto de macetas y jardineras con iluminación cálida'},
 {pack:16,file:'plaza-bolardos',name:'Plaza con bolardos y topes',group:'Paisajismo y diseño',app:'Bolardos y topes',desc:'Solución urbana de delimitación de espacios'},
 {pack:16,file:'jardineras-terraza',name:'Jardineras de terraza',group:'Paisajismo y diseño',app:'Macetas y jardineras',desc:'Conjunto modular de jardineras al aire libre'},
 {pack:16,file:'jardineras-geometricas',name:'Jardineras geométricas',group:'Paisajismo y diseño',app:'Macetas y jardineras',desc:'Diseños contemporáneos de geometría facetada'},
 {pack:16,file:'escalera-concreto',name:'Escalera de concreto',group:'Paisajismo y diseño',app:'Escaleras prefabricadas',desc:'Referencia arquitectónica de escalera de concreto; método constructivo por definir'},
 {pack:16,file:'macetas-luminosas',name:'Terraza con macetas iluminadas',group:'Paisajismo y diseño',app:'Macetas y jardineras',desc:'Macetas con iluminación ambiental perimetral'},
 {pack:16,file:'acceso-paisajismo',name:'Acceso peatonal ajardinado',group:'Paisajismo y diseño',app:'Elementos de paisajismo',desc:'Composición de espacios verdes y prefabricados decorativos'},
 {pack:16,file:'patio-modular',name:'Patio modular ajardinado',group:'Paisajismo y diseño',app:'Elementos de paisajismo',desc:'Acabados, bordes y jardineras integradas'},
 {pack:16,file:'elementos-arquitectonicos',name:'Prefabricados arquitectónicos decorativos',group:'Paisajismo y diseño',app:'Prefabricados arquitectónicos',desc:'Elementos arquitectónicos y celosías de concreto'},
 {pack:16,file:'plaza-jardinera-banca',name:'Plaza con jardinera y banca',group:'Paisajismo y diseño',app:'Bancas urbanas',desc:'Banca y jardineras con iluminación integrada'}
);
atlasModels.push(
 {pack:17,file:'panete-interior',name:'Aplicación de pañete interior',group:'Morteros y acabados',app:'Repellos y pañetes',desc:'Proceso de alisado de revestimiento cementicio',family:'morteros'},
 {pack:17,file:'nivelacion-piso',name:'Nivelación de piso con mortero',group:'Morteros y acabados',app:'Morteros de nivelación',desc:'Extendido y nivelación de una capa de piso',family:'morteros'},
 {pack:17,file:'revestimiento-ceramico',name:'Colocación de revestimiento cerámico',group:'Morteros y acabados',app:'Pegantes cementicios',desc:'Colocación de baldosas sobre adhesivo cementicio',family:'morteros'},
 {pack:17,file:'grout-celdas',name:'Relleno de celdas en muro reforzado',group:'Morteros y acabados',app:'Muros de mampostería reforzada',desc:'Vaciado de relleno cementicio en unidades huecas con acero',family:'morteros'},
 {pack:17,file:'vivienda-minimalista',name:'Vivienda minimalista con concreto visto',group:'Viviendas y sistemas modulares',app:'Prefabricados arquitectónicos',desc:'Concepto de vivienda contemporánea con elementos de concreto',family:'viviendas'},
 {pack:17,file:'vivienda-montana',name:'Vivienda sostenible de montaña',group:'Viviendas y sistemas modulares',app:'Prefabricados arquitectónicos',desc:'Concepto de vivienda adaptable a entorno montañoso',family:'viviendas'},
 {pack:17,file:'fachada-celosias',name:'Fachada tropical con celosías',group:'Viviendas y sistemas modulares',app:'Prefabricados arquitectónicos',desc:'Fachada ventilada de unidades arquitectónicas caladas',family:'viviendas'},
 {pack:17,file:'cabana-montana',name:'Cabaña modular panorámica',group:'Viviendas y sistemas modulares',app:'Prefabricados arquitectónicos',desc:'Concepto de alojamiento modular para entorno natural',family:'viviendas'},
 {pack:17,file:'comunidad-modular',name:'Conjunto de viviendas modulares',group:'Viviendas y sistemas modulares',app:'Prefabricados arquitectónicos',desc:'Conjunto residencial de unidades modulares repetibles',family:'viviendas'},
 {pack:17,file:'muro-verde-modular',name:'Muro jardinera modular',group:'Viviendas y sistemas modulares',app:'Elementos de paisajismo',desc:'Muro modular de piezas vegetadas para espacios comunes',family:'viviendas'},
 {pack:18,file:'cimientos-mamposteria',name:'Cimientos y mampostería en construcción',group:'Estructuras y obra civil',app:'Cimentaciones y zapatas',desc:'Construcción de cimientos y muros de bloques',family:'estructuras'},
 {pack:18,file:'estructura-concreto',name:'Pórticos de concreto en construcción',group:'Estructuras y obra civil',app:'Pórticos, vigas y columnas',desc:'Estructura de columnas y vigas de concreto en obra',family:'estructuras'},
 {pack:18,file:'losa-cimentacion',name:'Losa de cimentación',group:'Estructuras y obra civil',app:'Cimentaciones y zapatas',desc:'Preparación de una losa de concreto',family:'estructuras'},
 {pack:18,file:'concreto-tuberias',name:'Concreto de protección de tuberías',group:'Estructuras y obra civil',app:'Obras de arte de drenaje',desc:'Vaciado de concreto en obra con conducción enterrada',family:'estructuras'},
 {pack:18,file:'contencion-vial',name:'Muro de contención en carretera',group:'Estructuras y obra civil',app:'Muros de contención',desc:'Protección y sostenimiento de borde vial',family:'estructuras'},
 {pack:18,file:'gaviones-arroyo',name:'Gaviones junto a un arroyo',group:'Drenajes y contención',app:'Gaviones',desc:'Protección de margen con cestas rellenas de piedra',family:'drenajes'},
 {pack:18,file:'escollera-rio',name:'Escollera de roca natural',group:'Drenajes y contención',app:'Enrocados / escolleras',desc:'Protección de cauce mediante roca de gran tamaño',family:'drenajes'},
 {pack:18,file:'dren-frances-vivienda',name:'Dren francés perimetral de vivienda',group:'Drenajes y contención',app:'Filtros franceses',desc:'Conducción y grava drenante junto a cimentación',family:'drenajes'},
 {pack:18,file:'desague-urbano',name:'Sumidero urbano durante lluvia',group:'Drenajes y contención',app:'Cunetas y sumideros',desc:'Captación de aguas lluvias en vía urbana',family:'drenajes'},
 {pack:18,file:'alcantarilla-concreto',name:'Alcantarilla de concreto en cauce',group:'Drenajes y contención',app:'Obras de arte de drenaje',desc:'Salida de conducción hidráulica protegida con rocas',family:'drenajes'}
);
const atlasPackNames={all:'Todos',9:'Bloques y ladrillos',10:'Mobiliario',11:'Drenajes',12:'Vías e infraestructura',13:'Morteros y acabados',14:'Viviendas y sistemas modulares',15:'Detalles constructivos',16:'Paisajismo y diseño'};
let atlasSelectedPack='all';
const atlasRoadmap = [
  {code:'09',name:'Bloques y ladrillos',desc:'Bloques huecos, encajables, unidades no cocidas, celosías y fabricación',state:'10 modelos incorporados'},
  {code:'10',name:'Mobiliario y espacio público',desc:'Bancas, bolardos, jardineras, bordillos, separadores y piezas ornamentales',state:'10 modelos incorporados'},
  {code:'11',name:'Drenaje y contención',desc:'Tubos, box culvert, filtros, canales, gaviones, escolleras y sumideros',state:'10 modelos incorporados'},
  {code:'12',name:'Vías e infraestructura',desc:'Pavimentos, vías de montaña, andenes, puentes, plataformas y bases',state:'10 modelos incorporados'},
  {code:'13',name:'Morteros y acabados',desc:'Morteros, grout, repellos, pegantes, nivelaciones y concretos',state:'7 variantes disponibles'},
  {code:'14',name:'Vivienda y sistemas modulares',desc:'Muros, paneles, fachadas, unidades y secuencias constructivas',state:'9 variantes disponibles'},
  {code:'15',name:'Detalles constructivos',desc:'Cortes de carreteras, drenajes, mampostería, gaviones, granulometrías y prefabricados',state:'10 ilustraciones añadidas'},
  {code:'16',name:'Paisajismo y diseño',desc:'Variantes de macetas, bancos, plazas, accesos y arquitectura verde',state:'10 variantes disponibles'},
  {code:'18',name:'Estructuras y obra civil',desc:'Cimentaciones, losas, pórticos y muros de contención',state:'5 variantes nuevas'}
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
 const names={9:'bloques',10:'mobiliario',11:'drenajes',12:'vias',13:'morteros',14:'viviendas',15:'detalles',16:'paisajismo',17:'acabados-viviendas',18:'estructuras-hidraulica'};
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
const atlasFamilies={all:'Todos',bloques:'Bloques y ladrillos',mobiliario:'Mobiliario',drenajes:'Drenajes y contención',vias:'Vías e infraestructura',morteros:'Morteros y acabados',viviendas:'Viviendas y sistemas modulares',detalles:'Detalles constructivos',paisajismo:'Paisajismo y diseño',estructuras:'Estructuras y obra civil'};
const atlasFamilyByPack={9:'bloques',10:'mobiliario',11:'drenajes',12:'vias',13:'morteros',14:'viviendas',15:'detalles',16:'paisajismo'};
function atlasFamilyFor(m){return m.family||atlasFamilyByPack[m.pack]||'all';}
let atlasSelectedFamily='all';
function renderAtlasModels(){
  const area=byId('modelosGrid');
  if(!area)return;
  const tabs=byId('modelosFiltros');
  if(tabs)tabs.innerHTML=Object.entries(atlasFamilies).map(([id,label])=>'<button type="button" class="'+(atlasSelectedFamily===id?'active':'')+'" aria-pressed="'+(atlasSelectedFamily===id)+'" onclick="filterAtlasModels(\''+id+'\')">'+(id==='all'?'Todos ('+atlasModels.length+')':label)+'</button>').join('');
  const entries=atlasModels.map((m,i)=>({m,i})).filter(x=>atlasSelectedFamily==='all'||atlasFamilyFor(x.m)===atlasSelectedFamily);
  area.innerHTML=entries.map(({m,i})=>'<button class="model-gallery-item" type="button" onclick="openAtlasModel('+i+')"><img src="'+atlasModelPath(m)+'" loading="lazy" alt="'+esc(m.name)+'"><strong>'+esc(m.name)+'</strong><small>'+esc(m.group)+'</small></button>').join('');
  const count=byId('modelosCount');if(count)count.textContent=entries.length+' modelos';
}
window.filterAtlasModels=function(family){atlasSelectedFamily=atlasFamilies[family]?family:'all';renderAtlasModels();};
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
  byId('roadmapGrid').innerHTML=atlasRoadmap.map(r=>'<article class="roadmap-card"><span class="roadmap-index">FAMILIA DE PRODUCTOS</span><h3>'+r.name+'</h3><p>'+r.desc+'</p><div class="roadmap-count">'+r.state+'</div></article>').join('');
}
if(document.getElementById('treeRoot')){
  renderAtlasTree();
  renderAtlasModels();
  renderAtlasPlan();
}
