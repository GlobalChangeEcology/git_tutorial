import{p as N}from"./chunk-K2ZEYYM2-WJiSvk8g.js";import{p as B}from"./radar-MK3ICKWK-55CS4JTO-DQMCUM4E.js";import{a as i,g as U,s as H,b as V,c as Z,x as j,v as q,l as C,d as J,H as K,aP as Q,aR as X,aS as z,aT as Y,f as tt,B as et,aU as at,L as rt}from"./two-cols-DCuRUhpq.js";import"./chunk-TGZYFRKZ-MkbxDsnr.js";import"./index-DgioIlpz.js";import"./modules/vue-CVKTJEpb.js";import"./modules/shiki-sGyC1fjy.js";import"./modules/file-saver-C8BEGaqa.js";import"./ProgressBar-BUW02oH2.js";var it=rt.pie,D={sections:new Map,showData:!1},m=D.sections,w=D.showData,st=structuredClone(it),ot=i(()=>structuredClone(st),"getConfig"),nt=i(()=>{m=new Map,w=D.showData,et()},"clear"),lt=i(({label:t,value:a})=>{m.has(t)||(m.set(t,a),C.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ct=i(()=>m,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),F={getConfig:ot,clear:nt,setDiagramTitle:q,getDiagramTitle:j,setAccTitle:Z,getAccTitle:V,setAccDescription:H,getAccDescription:U,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,a)=>{N(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),ut={parse:i(async t=>{const a=await B("pie",t);C.debug(a),gt(a,F)},"parse")},ft=i(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),mt=ft,ht=i(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return at().value(s=>s.value)(a)},"createPieArcs"),St=i((t,a,G,s)=>{C.debug(`rendering pie chart
`+t);const n=s.db,y=J(),T=K(n.getConfig(),y.pie),$=40,o=18,d=4,c=450,h=c,S=Q(a),l=S.append("g");l.attr("transform","translate("+h/2+","+c/2+")");const{themeVariables:r}=y;let[A]=X(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(h,c)/2-$,P=z().innerRadius(0).outerRadius(g),R=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),v=ht(b),W=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=Y(W);l.selectAll("mySlices").data(v).enter().append("path").attr("d",P).attr("fill",e=>p(e.data.label)).attr("class","pieCircle");let E=0;b.forEach(e=>{E+=e}),l.selectAll("mySlices").data(v).enter().append("text").text(e=>(e.data.value/E*100).toFixed(0)+"%").attr("transform",e=>"translate("+R.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(e,u)=>{const f=o+d,M=f*p.domain().length/2,O=12*o,I=u*f-M;return"translate("+O+","+I+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(e=>{const{label:u,value:f}=e.data;return n.getShowData()?`${u} [${f}]`:u});const L=Math.max(...x.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),k=h+$+o+d+L;S.attr("viewBox",`0 0 ${k} ${c}`),tt(S,c,k,T.useMaxWidth)},"draw"),vt={draw:St},bt={parser:ut,db:F,renderer:vt,styles:mt};export{bt as diagram};
