/* Ruta Verde · script compartido. Cada módulo se activa solo si su sección está en la página. */
(function(){
'use strict';
function $(i){return document.getElementById(i)}
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function each(l,f){Array.prototype.forEach.call(l,f)}
var ART={"ceibo": "<svg class=\"art\" viewBox=\"0 0 300 180\" aria-hidden=\"true\"><rect width=\"300\" height=\"180\" fill=\"#F3E6BD\"/><path d=\"M0 130 C70 100 140 125 300 105 V180 H0Z\" fill=\"#9DBF70\"/><rect x=\"190\" y=\"70\" width=\"48\" height=\"66\" rx=\"10\" fill=\"#D9962B\"/><rect x=\"196\" y=\"58\" width=\"36\" height=\"14\" rx=\"4\" fill=\"#7A4A12\"/><rect x=\"198\" y=\"92\" width=\"32\" height=\"22\" rx=\"4\" fill=\"#F6E7B8\"/><g fill=\"#4F8A32\"><ellipse cx=\"80\" cy=\"120\" rx=\"16\" ry=\"30\" transform=\"rotate(-25 80 120)\"/><ellipse cx=\"108\" cy=\"116\" rx=\"16\" ry=\"30\" transform=\"rotate(10 108 116)\"/><ellipse cx=\"136\" cy=\"124\" rx=\"14\" ry=\"26\" transform=\"rotate(35 136 124)\"/></g></svg>", "aromos": "<svg class=\"art\" viewBox=\"0 0 300 180\" aria-hidden=\"true\"><rect width=\"300\" height=\"180\" fill=\"#E9EFD6\"/><path d=\"M0 140 C90 110 170 135 300 118 V180 H0Z\" fill=\"#8FB468\"/><ellipse cx=\"130\" cy=\"118\" rx=\"82\" ry=\"30\" fill=\"#E3BC58\"/><ellipse cx=\"130\" cy=\"100\" rx=\"82\" ry=\"30\" fill=\"#F2D888\"/><path d=\"M130 100 L205 100 L205 118 A82 30 0 0 1 130 148Z\" fill=\"#E9C96C\" opacity=\".55\"/><rect x=\"226\" y=\"86\" width=\"34\" height=\"46\" rx=\"8\" fill=\"#D9962B\"/><rect x=\"230\" y=\"76\" width=\"26\" height=\"12\" rx=\"3\" fill=\"#7A4A12\"/></svg>", "quesos": "<svg class=\"art\" viewBox=\"0 0 300 180\" aria-hidden=\"true\"><rect width=\"300\" height=\"180\" fill=\"#F1E8D2\"/><path d=\"M0 142 C100 118 190 140 300 124 V180 H0Z\" fill=\"#A8C281\"/><path d=\"M60 128 L170 78 L240 128Z\" fill=\"#F2D888\"/><path d=\"M60 128 L240 128 L240 146 L60 146Z\" fill=\"#E3BC58\"/><circle cx=\"130\" cy=\"112\" r=\"6\" fill=\"#E3BC58\"/><circle cx=\"178\" cy=\"120\" r=\"5\" fill=\"#E3BC58\"/></svg>", "posada": "<svg class=\"art\" viewBox=\"0 0 300 180\" aria-hidden=\"true\"><rect width=\"300\" height=\"180\" fill=\"#D4E4EE\"/><circle cx=\"238\" cy=\"48\" r=\"20\" fill=\"#FFE9A8\"/><path d=\"M0 130 C80 100 150 128 300 108 V180 H0Z\" fill=\"#8FB468\"/><rect x=\"92\" y=\"84\" width=\"116\" height=\"60\" fill=\"#FBF7EA\"/><path d=\"M82 88 L150 42 L218 88Z\" fill=\"#8A4B2A\"/><rect x=\"138\" y=\"106\" width=\"24\" height=\"38\" fill=\"#7A4A12\"/><rect x=\"104\" y=\"100\" width=\"20\" height=\"20\" fill=\"#9CC4D8\"/><rect x=\"176\" y=\"100\" width=\"20\" height=\"20\" fill=\"#9CC4D8\"/></svg>", "lana": "<svg class=\"art\" viewBox=\"0 0 300 180\" aria-hidden=\"true\"><rect width=\"300\" height=\"180\" fill=\"#EEDFCB\"/><circle cx=\"110\" cy=\"96\" r=\"48\" fill=\"#C8643C\"/><g fill=\"none\" stroke=\"#F3C9AE\" stroke-width=\"3\"><path d=\"M72 80 C100 104 130 104 148 82\"/><path d=\"M64 98 C100 124 136 122 156 98\"/><path d=\"M76 120 C104 136 130 134 146 118\"/></g><circle cx=\"200\" cy=\"112\" r=\"32\" fill=\"#5E8A3B\"/><g fill=\"none\" stroke=\"#B9D69A\" stroke-width=\"3\"><path d=\"M176 102 C196 118 214 118 226 104\"/><path d=\"M174 118 C196 132 214 130 228 118\"/></g></svg>"};
var PR={"ceibo": {"n": "Finca Agroecológica El Ceibo", "d": "Colonia", "tag": "Miel y verduras", "desc": "Miel pura, verduras de estación y visita a la huerta.", "pr": "Miel orgánica de pradera (1 kg): $350", "badge": "Cosecha fresca", "rt": "4,9"}, "aromos": {"n": "Granja Tradicional «Los Aromos»", "d": "San José", "tag": "Quesos y experiencias", "desc": "Una familia dedicada a la producción apícola y quesera, con visitas guiadas en finca.", "pr": "Queso Colonia artesanal (kilo): $520 · Visita con degustación: $400 por persona", "badge": "Visitas hoy", "rt": "4,8"}, "quesos": {"n": "Finca Quesos", "d": "Canelones", "tag": "Quesos", "desc": "Quesos artesanales de productores de la zona.", "pr": "", "badge": "Ejemplo", "rt": "4,7"}, "posada": {"n": "Posada", "d": "Colonia", "tag": "Alojamiento", "desc": "Alojamiento rural con paseos por el campo.", "pr": "", "badge": "Reserva previa", "rt": "4,9"}, "lana": {"n": "Taller Lana", "d": "San José", "tag": "Artesanías", "desc": "Piezas artesanales en lana, hechas a mano.", "pr": "", "badge": "Hecho a mano", "rt": "4,8"}};
var ORDER=["ceibo", "aromos", "quesos", "posada", "lana"];
/* ---- productores reales (fotos aportadas por el equipo, con autorización) ---- */
var _s=document.currentScript||document.querySelector('script[src*="assets/app.js"]');
var BASE=(_s&&_s.src||'').replace(/app\.js(\?.*)?$/,'');
function foto(f,a,logo){return '<img class="art" src="'+BASE+'img/'+f+'" alt="'+a+'" loading="lazy" width="500" height="300"'+(logo?' style="object-fit:contain;background:'+(typeof logo==='string'?logo:'#F2EEEB')+'"':'')+'>'}
PR.campovivo={n:'Campo Vivo',d:'Montevideo',tag:'Productores hortícolas',desc:'Productores hortícolas en Rincón del Cerro, sobre el Camino Pajas Blancas.',pr:'',badge:'Productor real',rt:'',ig:'campovivo_71',wa:'59891456068',real:1};
PR.chepastor={n:'Che Pastor',d:'Canelones',tag:'Granja familiar',desc:'Granja familiar en tiempos libres, en Los Cerrillos. Produce huevos y verduras de estación.',pr:'',badge:'Productor real',rt:'',ig:'chepastor.uy',real:1};
PR.suculentas={n:'Suculentas Adriana',d:'Canelones',tag:'Suculentas',desc:'Suculentas pequeñas muy resistentes para tu maceta. De Rincón de Pando.',pr:'',badge:'Productor real',rt:'',ig:'adriana.falero.146',wa:'59899061190',real:1};
ART.campovivo=foto('campo-vivo-logo.jpg','Logo de Campo Vivo','#fff');
ART.chepastor=foto('che-pastor-logo.jpg','Logo de Che Pastor, huerta agroecológica',true);
ART.suculentas=foto('suculentas-adriana-plantines.jpg','Plantines de suculentas de Suculentas Adriana');
ORDER=['campovivo','chepastor','suculentas'].concat(ORDER);
var GAL={};
GAL.suculentas={fotos:[['suculentas-adriana-plantines.jpg','Plantines de suculentas'],['suculentas-adriana-puesto.jpg','El puesto de Suculentas Adriana en la feria']]};
function extras(id){
  var p=PR[id],w=el('div','mini');
  if(p.ig){var a=el('a','btn sm','Instagram');a.href='https://www.instagram.com/'+p.ig+'/';a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Instagram de '+p.n+' (se abre en otra pestaña)');w.appendChild(a)}
  if(p.wa){var wa=el('a','btn sm','WhatsApp');wa.href='https://wa.me/'+p.wa+'?text='+encodeURIComponent('Hola, te encontré en Ruta Verde.');wa.target='_blank';wa.rel='noopener';wa.setAttribute('aria-label','WhatsApp de '+p.n+' (se abre en otra pestaña)');w.appendChild(wa)}
  var gm=btnMaps(id);if(gm)w.appendChild(gm);
  if(GAL[id]){var g=el('button','btn sm gal','Ver fotos y video');g.type='button';g.setAttribute('data-g',id);w.appendChild(g)}
  return w;
}
function galeria(){
  var dlg=null;
  function abrir(id){
    var g=GAL[id];if(!g)return;
    if(!dlg){dlg=document.createElement('dialog');dlg.className='galdlg';document.body.appendChild(dlg);
      dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()})}
    dlg.textContent='';dlg.setAttribute('aria-label','Fotos y video de '+PR[id].n);
    var h=el('div','gh');h.appendChild(el('h3','',PR[id].n));
    var c=el('button','btn sm','Cerrar');c.type='button';c.addEventListener('click',function(){dlg.close()});h.appendChild(c);dlg.appendChild(h);
    var grid=el('div','gg');
    g.fotos.forEach(function(f){var fg=el('figure'),im=document.createElement('img');im.src=BASE+'img/'+f[0];im.alt=f[1];im.loading='lazy';fg.appendChild(im);fg.appendChild(el('figcaption','',f[1]));grid.appendChild(fg)});
    dlg.appendChild(grid);
    var gv=el('div','gv');(g.videos||[]).forEach(function(v){var vd=document.createElement('video');vd.controls=true;vd.preload='none';vd.muted=true;vd.setAttribute('playsinline','');vd.poster=BASE+'img/'+v[1];vd.src=BASE+'img/'+v[0];vd.setAttribute('aria-label',v[2]);gv.appendChild(vd)});if(gv.childNodes.length)dlg.appendChild(gv);
    if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');
    c.focus();
  }
  document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.gal');if(b)abrir(b.getAttribute('data-g'))});
}

var saved=[];
try{saved=JSON.parse(localStorage.getItem('rv-guardados')||'[]')||[]}catch(e){saved=[]}
function persist(){try{localStorage.setItem('rv-guardados',JSON.stringify(saved))}catch(e){}}
function toggle(id){var i=saved.indexOf(id);if(i>-1)saved.splice(i,1);else saved.push(id);persist();refrescar()}
var refrescos=[];
function refrescar(){refrescos.forEach(function(f){try{f()}catch(e){}})}
function conteo(){var c=$('gcount');if(c)c.textContent=saved.length?'('+saved.length+')':''}
refrescos.push(conteo);

/* ---- menú ---- */
function menu(){
  var h=document.querySelector('.sitehd'),b=document.querySelector('.burger');
  if(!h||!b)return;
  function cerrar(){h.classList.remove('open');b.setAttribute('aria-expanded','false')}
  b.addEventListener('click',function(){var o=h.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  each(h.querySelectorAll('.mn a'),function(a){a.addEventListener('click',cerrar)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&h.classList.contains('open')){cerrar();b.focus()}});
}

/* ---- inicio: tarjetas, corazones, filtros, voz ---- */
function tarjetas(){
  var list=$('list');if(!list)return;
  var cards=Array.prototype.slice.call(list.querySelectorAll('.pc'));
  cards.forEach(function(c){var id=c.getAttribute('data-id'),mn=c.querySelector('.mini');if(mn&&!mn.querySelector('.gm')){var gm=btnMaps(id);if(gm)mn.appendChild(gm)}});
  cards.forEach(function(c){var id=c.getAttribute('data-id'),mn=c.querySelector('.mini');if(mn&&GAL[id]&&!mn.querySelector('.gal')){var g=el('button','btn sm gal','Ver fotos y video');g.type='button';g.setAttribute('data-g',id);mn.appendChild(g)}});
  function pinta(){cards.forEach(function(c){c.querySelector('.heart').setAttribute('aria-pressed',saved.indexOf(c.getAttribute('data-id'))>-1)})}
  refrescos.push(pinta);
  cards.forEach(function(c){c.querySelector('.heart').addEventListener('click',function(){toggle(c.getAttribute('data-id'))})});
  pinta();
  var chips=document.querySelectorAll('#chips .chip'),q=$('q'),cat='todo';
  function apply(){
    function sinTildes(x){return x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
    var t=sinTildes((q&&q.value||'').trim());
    cards.forEach(function(c){
      var okc=cat==='todo'||(' '+c.getAttribute('data-c')+' ').indexOf(' '+cat+' ')>-1;
      var okt=!t||sinTildes(c.textContent).indexOf(t)>-1;
      c.style.display=(okc&&okt)?'':'none';
    });
  }
  each(chips,function(b){b.addEventListener('click',function(){
    cat=b.getAttribute('data-c');each(chips,function(x){x.setAttribute('aria-pressed',x===b)});apply();
  })});
  if(q)q.addEventListener('input',apply);
  var synth=window.speechSynthesis,cur=null;
  function texto(card){
    var p=[];['h3','.m','p','.pr'].forEach(function(sel){var n=card.querySelector(sel);if(n)p.push(n.textContent.trim())});
    return p.join('. ').replace(/\$(\d[\d.]*)/g,'$1 pesos').replace(/\s+/g,' ');
  }
  each(list.querySelectorAll('.speak'),function(b){b.addEventListener('click',function(){
    if(!synth||!window.SpeechSynthesisUtterance){b.textContent='No disponible en este navegador';return}
    if(cur===b){synth.cancel();return}
    synth.cancel();
    var u=new SpeechSynthesisUtterance(texto(b.closest('.card')));u.lang='es-AR';u.rate=.95;
    function fin(){b.setAttribute('aria-pressed','false');b.textContent='Escuchar';if(cur===b)cur=null}
    u.onend=fin;u.onerror=fin;cur=b;b.setAttribute('aria-pressed','true');b.textContent='Detener';synth.speak(u);
  })});
}

/* ---- mapa de productores y guardados ---- */
/* Ubicación de cada productor para el mapa: [latitud, longitud]. Los puntos son aproximados.
   gm: lo que abre «Cómo llegar con Google Maps». Puede ser una dirección o un enlace de Google Maps
   copiado desde la app (Compartir → Copiar enlace). Solo se muestra en los productores reales. */
var GEO={
  campovivo:{ll:[-34.835,-56.360],gm:'Camino Pajas Blancas, Rincón del Cerro, Montevideo'},
  chepastor:{ll:[-34.600,-56.355],gm:'Los Cerrillos, Canelones'},
  suculentas:{ll:[-34.715,-55.945],gm:'Rincón de Pando, Canelones'},
  ceibo:{ll:[-34.300,-57.600]},aromos:{ll:[-34.330,-56.700]},quesos:{ll:[-34.560,-56.120]},
  posada:{ll:[-34.250,-57.950]},lana:{ll:[-34.470,-56.880]}
};
function gmaps(id){
  var g=GEO[id];if(!g||!g.gm||!PR[id]||!PR[id].real)return '';
  return /^https?:\/\//.test(g.gm)?g.gm:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(g.gm);
}
function btnMaps(id){
  var u=gmaps(id);if(!u)return null;
  var a=el('a','btn sm gm','Cómo llegar con Google Maps');a.href=u;a.target='_blank';a.rel='noopener';
  a.setAttribute('aria-label','Cómo llegar a '+PR[id].n+' con Google Maps (se abre en otra pestaña)');return a;
}
var ZONAS={metro:{w:-56.55,e:-55.75,n:-34.38,s:-34.98},uy:{w:-59.25,e:-52.75,n:-29.9,s:-35.15}};
var BORDE=[[-58.43,-33.90],[-58.40,-33.45],[-58.32,-33.10],[-58.17,-32.65],[-58.10,-32.30],[-57.92,-31.85],[-57.98,-31.40],[-57.80,-30.95],[-57.62,-30.20],[-57.10,-30.10],[-56.50,-30.38],[-56.00,-30.62],[-55.55,-30.87],[-55.10,-31.25],[-54.55,-31.50],[-54.10,-31.90],[-53.65,-32.15],[-53.25,-32.55],[-53.10,-33.05],[-53.45,-33.55],[-53.48,-33.69]];
var COSTA=[[-53.48,-33.69],[-53.78,-34.40],[-54.15,-34.67],[-54.60,-34.85],[-54.95,-34.97],[-55.05,-34.90],[-55.40,-34.80],[-55.80,-34.84],[-55.95,-34.86],[-56.05,-34.89],[-56.13,-34.905],[-56.20,-34.915],[-56.26,-34.90],[-56.33,-34.89],[-56.40,-34.86],[-56.44,-34.80],[-56.75,-34.68],[-57.00,-34.55],[-57.43,-34.45],[-57.85,-34.47],[-58.20,-34.15],[-58.43,-33.90]];
var CAPS=[['Artigas',-30.40,-56.47],['Melo',-32.37,-54.17],['Colonia',-34.47,-57.84],['Durazno',-33.38,-56.52],['Trinidad',-33.52,-56.90],['Florida',-34.10,-56.21],['Minas',-34.37,-55.23],['Maldonado',-34.90,-54.95],['Montevideo',-34.88,-56.17],['Paysandú',-32.32,-58.08],['Fray Bentos',-33.13,-58.30],['Rivera',-30.90,-55.55],['Rocha',-34.48,-54.33],['Salto',-31.39,-57.96],['San José',-34.34,-56.71],['Mercedes',-33.25,-58.03],['Tacuarembó',-31.71,-55.98],['Treinta y Tres',-33.23,-54.38],['Canelones',-34.52,-56.28]];
function proy(z){
  var b=ZONAS[z],mid=(b.n+b.s)/2*Math.PI/180,W=360,H=Math.round(W*(b.n-b.s)/((b.e-b.w)*Math.cos(mid)));
  return {W:W,H:H,px:function(lon,lat){return [(lon-b.w)/(b.e-b.w)*W,(lat-b.n)/(b.s-b.n)*H]}};
}
function enZona(id,z){var g=GEO[id];if(!g)return false;var b=ZONAS[z];return g.ll[1]>b.w&&g.ll[1]<b.e&&g.ll[0]<b.n&&g.ll[0]>b.s}
function pinSVG(x,y,s){return '<g transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') scale('+s+')"><ellipse cx="0" cy="0" rx="8" ry="2.4" class="ring"/><path class="lh" d="M0 0 C-4 -9 -13 -14 -13 -22 A13 13 0 0 1 0 -35 Z"/><path class="rh" d="M0 0 C4 -9 13 -14 13 -22 A13 13 0 0 0 0 -35 Z"/><circle cx="0" cy="-22" r="8" fill="#fff"/><path d="M0 -16 V-22" stroke="#0E401F" stroke-width="1.6" stroke-linecap="round"/><path class="lf" d="M-0.4 -21 C-5 -20.5 -7.5 -24 -6.5 -27.5 C-2.5 -27.5 -0.4 -25 -0.4 -21Z"/><path class="lf2" d="M0.4 -22 C1 -26.5 4 -28.6 7 -28.6 C7 -25 4.2 -22.2 0.4 -22Z"/></g>'}
function mapaSVG(z,cur){
  var P=proy(z),px=P.px;
  function pt(c){return px(c[0],c[1]).map(function(v){return v.toFixed(1)}).join(',')}
  function tx(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  var uy='M'+BORDE.concat(COSTA.slice(1)).map(pt).join(' L')+'Z';
  var agua='M'+[[-52.6,-33.0],[-53.15,-33.35]].concat(COSTA).concat([[-58.6,-33.95],[-59.4,-33.95],[-59.4,-35.4],[-52.6,-35.4]]).map(pt).join(' L')+'Z';
  var g='<rect class="g-vec" width="'+P.W+'" height="'+P.H+'"/><path class="g-agua" d="'+agua+'"/><path class="g-rio" d="M'+BORDE.slice(0,9).map(pt).join(' L')+'"/><path class="g-uy" d="'+uy+'"/>';
  function pueblo(n,lon,lat,dx,dy){var c=px(lon,lat);return '<circle cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="2.2" class="g-dot"/><text class="g-lugar" x="'+(c[0]+dx).toFixed(1)+'" y="'+(c[1]+dy).toFixed(1)+'">'+n+'</text>'}
  if(z==='metro'){
    g+='<path class="g-rio2" d="M'+pt([-56.47,-34.40])+' C'+pt([-56.42,-34.55])+' '+pt([-56.48,-34.66])+' '+pt([-56.42,-34.78])+'"/>';
    [[[-56.19,-34.89],[-56.24,-34.75],[-56.28,-34.52],[-56.30,-34.40]],[[-56.17,-34.88],[-56.06,-34.73],[-55.95,-34.62],[-55.80,-34.52]]].forEach(function(r){var d='M'+r.map(pt).join(' L');g+='<path class="g-ruta-b" d="'+d+'"/><path class="g-ruta" d="'+d+'"/>'});
    var c=px(-56.18,-34.86);g+='<ellipse class="g-ciudad" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" rx="30" ry="12"/>';
    var w=px(-56.35,-34.945);g+='<text class="g-agua-t" x="'+w[0].toFixed(1)+'" y="'+w[1].toFixed(1)+'">Río de la Plata</text>';
    g+=pueblo('Montevideo',-56.165,-34.885,8,-6)+pueblo('Canelones',-56.28,-34.52,-60,4)+pueblo('Las Piedras',-56.22,-34.73,7,4)+pueblo('Pando',-55.96,-34.72,7,4)+pueblo('Santa Lucía',-56.39,-34.45,7,4);
  }else{
    CAPS.forEach(function(k){g+=pueblo(k[0],k[2],k[1],4,-4).replace('class="g-lugar"','class="g-lugar sm"')});
    var t=function(n,lon,lat,cl){var q=px(lon,lat);return '<text class="'+cl+'" x="'+q[0].toFixed(1)+'" y="'+q[1].toFixed(1)+'">'+n+'</text>'};
    g+=t('Brasil',-55.2,-30.25,'g-pais')+t('Argentina',-59.15,-32.9,'g-pais')+t('Río de la Plata',-57.6,-34.85,'g-agua-t')+t('Océano Atlántico',-54.6,-35.05,'g-agua-t');
    var b=ZONAS.metro,a1=px(b.w,b.n),a2=px(b.e,b.s);
    g+='<rect class="g-caja" x="'+a1[0].toFixed(1)+'" y="'+a1[1].toFixed(1)+'" width="'+(a2[0]-a1[0]).toFixed(1)+'" height="'+(a2[1]-a1[1]).toFixed(1)+'" rx="3"/>';
  }
  var s=z==='uy'?.62:1,ids=ORDER.filter(function(id){return enZona(id,z)});
  ids.sort(function(a,b){return (a===cur)-(b===cur)});
  ids.forEach(function(id){
    var q=px(GEO[id].ll[1],GEO[id].ll[0]),sel=id===cur;
    g+='<g class="gpin'+(PR[id].real?'':' ej')+(sel?' sel':'')+'" data-id="'+id+'" tabindex="0" role="button" aria-pressed="'+sel+'" aria-label="'+tx(PR[id].n+', '+PR[id].d)+'"><title>'+tx(PR[id].n)+'</title>'+(sel?'<circle class="halo" cx="'+q[0].toFixed(1)+'" cy="'+(q[1]-22*s*1.2).toFixed(1)+'" r="'+(22*s*1.2).toFixed(1)+'"/>':'')+pinSVG(q[0],q[1],sel?s*1.2:s)+'</g>';
  });
  return '<svg viewBox="0 0 '+P.W+' '+P.H+'" role="group" aria-label="'+(z==='uy'?'Mapa de Uruguay con productores':'Mapa de Montevideo y Canelones con productores')+'">'+g+'</svg>';
}
function flash(e){if(!e)return;e.classList.remove('flash');void e.offsetWidth;e.classList.add('flash')}
function mapa(){
  var tb=$('gmap'),ml=$('mlist'),pop=$('pop');
  if(tb&&ml&&pop){
    var cur='campovivo',zona='metro',zb=document.querySelectorAll('#gzona button');
    function art(id){var d=document.createElement('div');d.innerHTML=ART[id];var a=d.firstChild;a.removeAttribute('class');return a}
    function elegir(id,foco){cur=id;if(!enZona(id,zona))zona='uy';pinta();flash(pop);
      if(!foco&&window.innerWidth<760&&tb.scrollIntoView)tb.scrollIntoView({behavior:'smooth',block:'center'});
      if(foco){var p=tb.querySelector('.gpin[data-id="'+id+'"]');if(p)p.focus()}}
    each(zb,function(b){b.addEventListener('click',function(){zona=b.getAttribute('data-z');pinta()})});
    tb.addEventListener('click',function(e){var p=e.target.closest&&e.target.closest('.gpin');if(p)elegir(p.getAttribute('data-id'),true)});
    tb.addEventListener('keydown',function(e){var p=e.target.closest&&e.target.closest('.gpin');if(p&&(e.key==='Enter'||e.key===' ')){e.preventDefault();elegir(p.getAttribute('data-id'),true)}});
    function pinta(){
      each(zb,function(b){b.setAttribute('aria-pressed',b.getAttribute('data-z')===zona)});
      tb.innerHTML=mapaSVG(zona,cur);
      ml.textContent='';
      ORDER.forEach(function(id){
        var b=el('button','mi');b.type='button';b.setAttribute('aria-pressed',id===cur);b.appendChild(art(id));
        var d=el('div');d.appendChild(el('b','',PR[id].n));d.appendChild(el('small','',[PR[id].tag,PR[id].d].filter(Boolean).join(' · ')));b.appendChild(d);
        b.addEventListener('click',function(){elegir(id)});ml.appendChild(b);
      });
      pop.textContent='';pop.appendChild(art(cur));
      var dd=el('div');dd.style.flex='1';dd.appendChild(el('b','',PR[cur].n));dd.appendChild(el('small','',[PR[cur].d,PR[cur].rt?'★ '+PR[cur].rt:'',PR[cur].real?'':'Ejemplo ficticio'].filter(Boolean).join(' · ')));dd.appendChild(extras(cur));pop.appendChild(dd);
      var g=el('button','btn sm',saved.indexOf(cur)>-1?'♥ Guardado':'♡ Guardar');g.type='button';
      g.setAttribute('aria-pressed',saved.indexOf(cur)>-1);g.addEventListener('click',function(){toggle(cur)});pop.appendChild(g);
    }
    refrescos.push(pinta);pinta();
  }
  var gl=$('glist'),ge=$('gempty');
  if(gl&&ge){
    function lista(){
      gl.textContent='';
      saved.forEach(function(id){
        if(!PR[id])return;var p=PR[id];
        var a=el('article','card prod pc');a.setAttribute('data-id',id);
        a.innerHTML='<div class="aw">'+ART[id]+'<span class="badge'+(p.real?' real':'')+'">'+p.badge+'</span><button class="heart" type="button" aria-pressed="true" aria-label="Quitar de guardados">♥</button></div><div class="bd">'+(p.rt?'<span class="rt"><i>★</i> '+p.rt+'</span>':'')+'<span class="tag">'+p.tag+'</span><h3>'+p.n+'</h3>'+(p.d?'<div class="m">'+p.d+'</div>':'')+'<p>'+p.desc+'</p>'+(p.pr?'<div class="pr">'+p.pr+'</div>':'')+'</div>';
        a.querySelector('.heart').addEventListener('click',function(){toggle(id)});if(p.real)a.querySelector('.bd').appendChild(extras(id));
        gl.appendChild(a);
      });
      ge.style.display=saved.length?'none':'block';
    }
    refrescos.push(lista);lista();
  }
}

/* ---- productores: demo sin señal ---- */
function offline(){
  var sw=$('off-sw');if(!sw)return;
  var st=$('off-status'),lst=$('off-list'),msg=$('off-msg'),items=[],timer=null;
  function render(){
    lst.textContent='';
    items.forEach(function(it){
      var li=el('li');li.appendChild(el('span','',it.n+' · $'+it.p+' por kilo · '+it.s+' kg'));
      var lab=it.st==='pend'?['p','Pendiente de sincronizar']:it.st==='sync'?['s','Sincronizando…']:['g','Publicado en el mapa'];
      li.appendChild(el('span','pill '+lab[0],lab[1]));lst.appendChild(li);
    });
  }
  function cuenta(x){return items.filter(function(i){return i.st===x}).length}
  sw.addEventListener('change',function(){
    if(timer){clearTimeout(timer);timer=null}
    if(sw.checked){st.textContent='● Sin conexión';st.className='status off';msg.textContent='Sin señal, sin problema: lo que cargues queda guardado cifrado en tu celular.'}
    else{
      st.textContent='● Con conexión';st.className='status';
      var n=cuenta('pend');items.forEach(function(i){if(i.st==='pend')i.st='sync'});render();
      if(n){
        msg.textContent='Volvió la señal: se envían '+n+(n===1?' producto':' productos')+' a la nube.';
        timer=setTimeout(function(){
          items.forEach(function(i){if(i.st==='sync')i.st='pub'});render();
          msg.textContent='Listo: '+(n===1?'el producto ya está publicado':'los '+n+' productos ya están publicados')+' en el mapa, sin que el productor haga nada.';
        },1400);
      }else{msg.textContent='Con conexión, lo que cargues se publica enseguida.'}
    }
  });
  $('off-add').addEventListener('click',function(){
    var n=$('off-n').value.trim();
    if(!n){msg.textContent='Escribí el nombre del producto.';return}
    var p=parseFloat($('off-p').value),q=parseFloat($('off-s').value);
    items.push({n:n,p:isNaN(p)?0:p,s:isNaN(q)?0:q,st:sw.checked?'pend':'pub'});
    $('off-n').value='';$('off-p').value='';$('off-s').value='';render();
    msg.textContent=sw.checked?'Guardado en el celular. Se publicará cuando haya conexión ('+cuenta('pend')+' pendiente'+(cuenta('pend')===1?'':'s')+').':'Publicado en el mapa.';
  });
}

/* ---- confianza: verificador de sello ---- */
function verificador(){
  var vin=$('v-code');if(!vin)return;
  var SEL={
    'RV-0001':{t:'v',n:'Finca Agroecológica El Ceibo (ejemplo)',p:86,d:[['Manejo ambiental',27,30],['Bienestar animal e inocuidad',22,25],['Identidad territorial',22,25],['Origen y escala',15,20]],x:'Re-auditoría anual obligatoria dentro de 10 meses.'},
    'RV-0002':{t:'p',n:'Taller Lana (ejemplo)',x:'Vigencia de 60 días corridos desde la validación de la Declaración Jurada Digital. Quedan 24 días. Con el Plan Premium puede solicitar la auditoría presencial para el sello Verificado.'},
    'RV-0003':{t:'s',n:'Productor de ejemplo',x:'Sello suspendido temporalmente tras una denuncia fundamentada. Tiene 30 días para corregir las observaciones antes de una eventual revocación.'}
  };
  var res=$('v-res');
  function verificar(c){
    var k=(c||'').toUpperCase().replace(/\s+/g,'');if(/^RV\d{4}$/.test(k))k='RV-'+k.slice(2);
    res.textContent='';var d=SEL[k],box;
    if(!d){box=el('div','res no');box.appendChild(el('b','big','Código no encontrado'));box.appendChild(el('span','','Revisá el código del sello. Si no coincide con ninguno registrado, no lo tomes como válido.'));res.appendChild(box);return}
    if(d.t==='v'){
      box=el('div','res ok');box.appendChild(el('b','big','Sello Verde Verificado'));
      box.appendChild(el('span','',d.n+' · puntaje '+d.p+' sobre 100 (mínimo 80)'));
      d.d.forEach(function(r){
        var w=el('div','bar');w.style.marginTop='10px';var t=el('div','t');t.appendChild(el('span','',r[0]));t.appendChild(el('b','',r[1]+' / '+r[2]));w.appendChild(t);
        var tr=el('div','track'),f=el('div','fill');f.style.width=(r[1]/r[2]*100)+'%';tr.appendChild(f);w.appendChild(tr);box.appendChild(w);
      });
      box.appendChild(el('p','demo',d.x));
    }else{
      box=el('div','res '+(d.t==='p'?'pr':'no'));box.appendChild(el('b','big',d.t==='p'?'Sello Verde Provisional':'Sello suspendido'));
      box.appendChild(el('span','',d.n));box.appendChild(el('p','demo',d.x));
    }
    res.appendChild(box);
  }
  $('v-go').addEventListener('click',function(){verificar(vin.value)});
  vin.addEventListener('keydown',function(e){if(e.key==='Enter')verificar(vin.value)});
  each(document.querySelectorAll('#v-ex button'),function(b){b.addEventListener('click',function(){vin.value=b.getAttribute('data-v');verificar(vin.value)})});
}

/* ---- proyecto: despliegue por fases ---- */
function fases(){
  var tiles=document.querySelectorAll('.tile');if(!tiles.length)return;
  var F={
    '1':['Meses 1 a 4','Lanzamiento piloto en el eje metropolitano, hortifrutícola, quesero y turístico. Captación presencial en cooperativas, sociedades de fomento y ferias. Auditoría inicial de 30 a 40 fincas para el Sello Verde.'],
    '2':['Meses 5 a 8','Expansión a la cuenca lechera, los corredores turísticos, las sierras y el litoral agroindustrial y citrícola. Pauta digital geolocalizada y convenios con intendencias y centros turísticos.'],
    '3':['Meses 9 a 12','Integración nacional completa. Incorporación digital masiva de productores mediante acuerdos con el MGAP, el MINTUR (Uruguay Natural) y las intendencias, y presencia en eventos como la Expo Prado y la Semana de la Cerveza.']
  };
  each(tiles,function(t){t.addEventListener('click',function(){
    each(tiles,function(x){x.setAttribute('aria-pressed',x===t)});
    var f=t.getAttribute('data-f');
    $('d-t').textContent=t.getAttribute('data-d')+': Fase '+f;$('d-s').textContent=F[f][0];
    $('d-p').textContent=F[f][1]+' La app y la web ya funcionan en este departamento desde el primer día.';
    flash($('d-t').closest('.panel'));
  })});
}

/* ---- productores: recomendador y registro ---- */
function recomendador(){
  var go=$('r-go');if(!go)return;
  go.addEventListener('click',function(){
    var prod=+$('r-prod').value,rut=+$('r-rut').value,sel=+$('r-sel').value,wa=+$('r-wa').value,plan,precio,anual,r=[];
    if(rut||sel||prod===3){
      plan='Premium';precio='$800 por mes';anual='o $7.800 por año (18,75 % menos)';
      if(prod===3)r.push('Tenés más de 20 productos: el catálogo ilimitado es del Plan Premium.');
      if(rut)r.push('Las rutas turísticas sugeridas son del Plan Premium.');
      if(sel)r.push('El Sello Verde Verificado, con auditoría en finca, es exclusivo del Plan Premium.');
    }else if(prod===2||wa){
      plan='Estándar';precio='$400 por mes';anual='o $4.000 por año (16,7 % menos)';
      if(prod===2)r.push('Entre 6 y 20 productos entran en el catálogo del Plan Estándar (hasta 20).');
      if(wa)r.push('Incluye enlace a WhatsApp y botón de llamada directa.');
    }else{
      plan='Gratuito';precio='$0 por mes';anual='sin costo';
      r.push('Hasta 5 productos y una ficha con tus datos de contacto alcanzan para empezar.');
      r.push('Recibís el Sello Verde Provisional al firmar la Declaración Jurada Digital.');
    }
    var o=$('r-out');o.textContent='';
    var box=el('div','res ok');box.appendChild(el('b','big','Plan '+plan));box.appendChild(el('span','',precio+' · '+anual));
    var ul=el('ul');ul.style.margin='8px 0 0';ul.style.paddingLeft='20px';r.forEach(function(x){ul.appendChild(el('li','',x))});box.appendChild(ul);
    box.appendChild(el('p','demo','Al registrarte, probás el Plan Premium 30 días sin costo.'));
    var eb=el('button','btn sm elegir-plan','Elegir este plan y registrarme');eb.type='button';eb.setAttribute('data-p',plan);box.appendChild(eb);o.appendChild(box);
  });
}
function registro(){
  var go=$('g-go');if(!go)return;var msg=$('g-msg'),ok=$('g-ok'),geo=null;
  ok.addEventListener('change',function(){go.disabled=!ok.checked});go.disabled=!ok.checked;
  /* mensual / anual */
  var per=document.querySelectorAll('#g-per button');
  each(per,function(b){b.addEventListener('click',function(){
    var y=b.getAttribute('data-a')==='1';each(per,function(x){x.setAttribute('aria-pressed',x===b)});
    each(document.querySelectorAll('#regf .pp,#regf .pu'),function(e){e.textContent=e.getAttribute(y?'data-y':'data-m')});
  })});
  /* ubicación del celular */
  var gb=$('g-geo'),gm=$('g-geomsg');
  if(gb)gb.addEventListener('click',function(){
    if(!navigator.geolocation){gm.textContent='Este navegador no da la ubicación. Escribí la localidad.';return}
    gb.textContent='Buscando tu ubicación…';
    navigator.geolocation.getCurrentPosition(function(pos){
      var la=pos.coords.latitude,lo=pos.coords.longitude;gb.textContent='Usar la ubicación de mi celular';
      if(la>-35.2&&la<-30&&lo>-58.6&&lo<-53){geo=[la,lo];gm.textContent='Listo: usamos la ubicación de tu celular ('+la.toFixed(4)+', '+lo.toFixed(4)+').'}
      else gm.textContent='Tu ubicación parece estar fuera de Uruguay. Elegí el departamento y escribí la localidad.';
    },function(){gb.textContent='Usar la ubicación de mi celular';gm.textContent='No pudimos obtener tu ubicación. Elegí el departamento y escribí la localidad.'},{timeout:8000});
  });
  function err(t,f){msg.textContent='';var b=el('div','res no');b.appendChild(el('b','',t));msg.appendChild(b);if(f)$(f).focus()}
  go.addEventListener('click',function(){
    var n=$('g-n').value.trim(),fa=$('g-f').value.trim(),w=$('g-w').value.trim(),d=$('g-d').value,l=$('g-l').value.trim();
    var pl=document.querySelector('input[name="g-plan"]:checked'),anual=document.querySelector('#g-per [data-a="1"]').getAttribute('aria-pressed')==='true';
    if(!n)return err('Escribí el nombre de tu emprendimiento.','g-n');
    if(!/^0?9\d[\s-]?\d{3}[\s-]?\d{3}$/.test(w))return err('Escribí un celular uruguayo, por ejemplo 099 123 456.','g-w');
    if(!d&&!geo)return err('Elegí tu departamento o usá la ubicación de tu celular.','g-d');
    if(!pl)return err('Elegí un plan.');
    if(!ok.checked)return err('Para continuar, aceptá los términos y condiciones.');
    var q=geo?geo[0].toFixed(5)+','+geo[1].toFixed(5):[l,d,'Uruguay'].filter(Boolean).join(', ');
    var lugar=geo?'la ubicación de tu celular':([l,d].filter(Boolean).join(', '));
    msg.textContent='';var b=el('div','res ok');
    b.appendChild(el('b','big','¡Listo, '+n+'!'));
    var ul=el('ul');ul.style.margin='8px 0 0';ul.style.paddingLeft='20px';
    [(fa?fa+' · ':'')+'WhatsApp '+w,'Ubicación: '+lugar,'Plan '+pl.value+(pl.value==='Gratuito'?'':(anual?', pago anual':', pago mensual'))+'. Empezás con 30 días del Plan Premium sin costo.','Términos y condiciones aceptados.'].forEach(function(x){ul.appendChild(el('li','',x))});
    b.appendChild(ul);
    var a=el('a','btn sm gm','Ver tu ubicación en Google Maps');a.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);a.target='_blank';a.rel='noopener';a.style.marginTop='12px';b.appendChild(a);
    b.appendChild(el('p','demo','En la versión real, el equipo de Ruta Verde te contacta para activar tu perfil y tu punto aparece en el mapa. Esta es una demostración: no se envió ningún dato.'));
    msg.appendChild(b);
  });
}
/* recomendador → elegir el plan sugerido en el registro */
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('.elegir-plan');if(!b)return;
  var r=document.querySelector('input[name="g-plan"][value="'+b.getAttribute('data-p')+'"]');
  if(r){r.checked=true;var reg=$('registro');if(reg)reg.scrollIntoView({behavior:'smooth'});setTimeout(function(){r.focus()},400)}
});

/* ---- mapa: bienvenida y términos para clientes (se muestra una vez por navegador) ---- */
function bienvenida(){
  var g=$('bienv');if(!g)return;
  var ok=false;try{ok=localStorage.getItem('rv-terminos-cliente')==='1'}catch(e){}
  if(ok)return;
  var p1=$('bv-1'),p2=$('bv-2'),chk=$('bv-ok'),go=$('bv-go');
  g.hidden=false;document.documentElement.classList.add('bv-open');$('bv-t').focus();
  function paso(n){p1.hidden=n!==1;p2.hidden=n!==2;$(n===1?'bv-t':'bv-t2').focus();g.querySelector('.bienv-in').scrollTop=0}
  $('bv-cli').addEventListener('click',function(){paso(2)});
  $('bv-volver').addEventListener('click',function(){paso(1)});
  chk.addEventListener('change',function(){go.disabled=!chk.checked});
  go.addEventListener('click',function(){
    if(!chk.checked)return;try{localStorage.setItem('rv-terminos-cliente','1')}catch(e){}
    g.hidden=true;document.documentElement.classList.remove('bv-open');
    var m=$('mapa');if(m){m.scrollIntoView();var t=m.querySelector('h2');if(t){t.setAttribute('tabindex','-1');t.focus({preventScroll:true})}}
  });
  g.addEventListener('keydown',function(e){ /* mantener el foco dentro del cuadro */
    if(e.key!=='Tab')return;var f=Array.prototype.filter.call(g.querySelectorAll('button,a,input,[tabindex="0"]'),function(x){return x.offsetParent&&!x.disabled});
    if(!f.length)return;var a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}
  });
}

/* ---- preguntas frecuentes ---- */
function faq(){
  var b=$('faqtog');if(!b)return;
  function todas(){return document.querySelectorAll('#preguntas details')}
  function estado(){var a=0;each(todas(),function(d){if(d.open)a++});b.textContent=a?'Cerrar todas':'Abrir todas'}
  b.addEventListener('click',function(){var abrir=b.textContent==='Abrir todas';each(todas(),function(d){d.open=abrir});estado()});
  each(todas(),function(d){d.addEventListener('toggle',estado)});estado();
}

/* ---- aparición suave al bajar ---- */
function reveal(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!('IntersectionObserver' in window)||reduce)return;
  var els=document.querySelectorAll('.card:not(.pc), .pc, .panel, details, .stat, .tarifa, .hecho .st');
  each(els,function(e,i){e.classList.add('rv');e.style.transitionDelay=((i%4)*70)+'ms'});
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
  each(els,function(e){io.observe(e)});
}

[menu,galeria,tarjetas,mapa,bienvenida,offline,verificador,fases,recomendador,registro,faq,reveal,conteo].forEach(function(f){try{f()}catch(e){if(window.console)console.error(f.name,e)}});
})();
