(this["webpackJsonpreact-tile-renderer"]=this["webpackJsonpreact-tile-renderer"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e){e.exports=JSON.parse("{}")},19:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i(1),o=i.n(r),c=i(10),a=i.n(c),s=(i(16),i(9)),h=i(4),d=i.p+"static/media/2d.9b5d6335.png",l=i(3),x=i(7);function u(e){var t=e.image,i=e.data,r=e.children,o=e.onClick,c=e.hover,a=e.text,s=Object(x.a)(e,["image","data","children","onClick","hover","text"]),h=i.y,d=i.x,u=i.h,y=i.w;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:Object(l.a)({height:"".concat(u,"px"),width:"".concat(y,"px"),backgroundImage:"url("+t+")",backgroundRepeat:"no-repeat",backgroundPosition:"-".concat(d,"px -").concat(h,"px"),cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box"},s.style),onClick:o,className:"".concat(c&&"sprite-hover"),children:a&&Object(n.jsx)("p",{children:a})}),r]})}function y(e,t,i){for(var r=[],o=function(o){for(var c=function(c){r.push((function(r){return Object(n.jsx)(u,Object(l.a)({image:e,data:{y:o,x:c,h:t,w:i}},r))}))},a=0;a<10*i;a+=i)c(a)},c=0;c<10*t;c+=t)o(c);return r}function p(e){var t=e.children,i=e.top,o=e.left,c=e.together,a=e.onClick;return c?r.Children.toArray(t).map((function(e,t){return Object(n.jsx)("div",{style:{position:"absolute",top:i,left:o},children:e},t)})):Object(n.jsx)("div",{style:{position:"absolute",top:i,left:o},onClick:a,children:t})}p.displayName="RenderObjects";var b=p;function j(e){var t=e.number,i=e.spriteSheet,r=e.height,o=void 0===r?64:r,c=e.width,a=void 0===c?64:c,s=Object(x.a)(e,["number","spriteSheet","height","width"]),h=y(i,o,a)[t];return Object(n.jsx)(h,Object(l.a)({},s))}function g(e){for(var t=e.tileSet,i=e.size,r=e.setActiveTile,o=e.zoom,c=void 0===o?1:o,a=e.tHeight,s=e.tWidth,h=y(t,a,s),d=i.width,l=i.height,x=[],u=0,p=0;p<l;p+=a/2){for(var b=[],j=0;j<d;j+=s/2)b.push({x:j,y:p,id:u++});x.push(b)}return Object(n.jsx)("div",{id:"palette",style:{boxSizing:"border-box",position:"relative",border:"1px solid black",zIndex:100,backgroundColor:"white",margin:"30px auto",zoom:"".concat(100*c,"%"),MozTransform:"scale(".concat(c,")")},children:Object(n.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:h.map((function(e,i){return Object(n.jsx)(e,{onClick:function(){r({tile:i,spriteSheet:t,height:a,width:s})},hover:!0},i)}))})})}var f=o.a.memo((function(e){var t=e.activeTile,i=(e.tileMap,e.image,e.zoom),o=void 0===i?1:i,c=e.background,a=e.children,s=e.addTile,d=e.onClick,x=e.origin,u=e.tileSize,y=e.worldSize,p=Object(l.a)({},u),g=Object(l.a)({},y),f=Object(l.a)({},x),v=Object(r.useState)({x:0,y:0}),O=Object(h.a)(v,2),m=O[0],w=O[1],S=Object(r.useState)({x:0,y:0}),z=Object(h.a)(S,2),k=z[0],C=z[1],T=function(e,t,i,n,r,o){return(e-i)*(o-n)-(t-n)*(r-i)},M={x:p.x*g.x,y:p.y*g.y};return Object(n.jsxs)("div",{style:{boxSizing:"border-box",position:"relative",border:"1px solid gray",backgroundImage:"url("+c+")",backgroundRepeat:"no-repeat",width:M.x,height:M.y+64,zoom:"".concat(100*o,"%"),MozTransform:"scale(".concat(o,")")},onClick:function(){console.log("clicked"),d({x:m.x,y:m.y})},onMouseMove:function(e){var t,i,n=e.currentTarget.getBoundingClientRect(),r=e.clientX/o-n.left,c=e.clientY/o-n.top,a=parseInt(r/p.x),s=parseInt(c/p.y),h=r%p.x,d=c%p.y,l={x:s-f.y+(a-f.x),y:s-f.y-(a-f.x)},x={x:l.x,y:l.y};h<p.x/2&&d<p.y/2?T(h,d,p.x/2,0,0,p.y/2)<0&&(x.x-=1):h<p.x/2&&d>p.y/2?T(h,d,0,p.y/2,p.x/2,p.y)<0&&(x.y+=1):h>p.x/2&&d<p.y/2?T(h,d,p.x/2,0,p.x,p.y/2)>0&&(x.y-=1):h>p.x/2&&d>p.y/2&&T(h,d,p.x/2,p.y,p.x,p.y/2)<0&&(x.x+=1),w(x),C((t=x.x,i=x.y,{x:f.x*p.x+(t-i)*(p.x/2),y:f.y*p.y+(t+i)*(p.y/2)}))},children:[a,Object(n.jsx)(b,{left:k.x,top:k.y-p.y,children:Object(n.jsx)("div",{className:"sprite-hover-sheet",children:t&&Object(n.jsx)(j,{number:t.tile,spriteSheet:t.spriteSheet,onClick:function(){s({x:m.x,y:m.y,image:t.spriteSheet,tile:t.tile,height:t.height,width:t.width})},height:t.height,width:t.width})})})]})})),v=(i(17),i(18),i(2)),O=i.p+"static/media/background.3732d207.jpg";var m=function(e){var t=e.map,i=e.spriteSheet,c=e.tileSize,a=e.origin,s=e.worldSize,h=e.children;return Object(r.useMemo)((function(){var e=[];h&&o.a.Children.forEach(h,(function(t){e.push(t.props)}));for(var n=[],r=function(r){for(var o=function(o){var h=e.find((function(e){return e.x===o&&e.y===r})),d=function(e,t,i,n){return{x:e.x*t.x+(i-n)*(t.x/2),y:e.y*t.y+(i+n)*(t.y/2)}}(a,c,o,r);h?n.push({x:d.x,y:d.y-c.y,sprite:h.tile,spriteSheet:h.spriteSheet}):n.push({x:d.x,y:d.y-c.y,sprite:t[r*s.x+o]-1,spriteSheet:i})},h=0;h<s.x;h++)o(h)},d=0;d<s.y;d++)r(d);return n}),[t,h]).map((function(e,t){return e.sprite>0&&Object(n.jsx)(b,{left:e.x,top:e.y,children:Object(n.jsx)("div",{className:"sprite-hover-sheet",children:Object(n.jsx)(j,{number:e.sprite,spriteSheet:e.spriteSheet})})},t)}))};var w=function(e){e.tileMap};var S=function(e){var t=Object(r.useState)(null),i=Object(h.a)(t,2),o=i[0],c=i[1],a=Object(r.useState)([]),l=Object(h.a)(a,2),x=(l[0],l[1],Object(r.useState)({width:1152,height:700})),u=Object(h.a)(x,2),y=u[0],p=(u[1],Object(r.useState)((window.screen.width/1600).toFixed(1))),b=Object(h.a)(p,2),j=b[0],S=b[1];Object(r.useEffect)((function(){window.onresize=function(){S((window.screen.width/1600).toFixed(1))}}),[]);var z=Object(r.useState)([]),k=Object(h.a)(z,2),C=k[0],T=k[1];return Object(n.jsxs)("div",{className:"content",style:{backgroundColor:"#EDF5E1"},children:[Object(n.jsx)("div",{style:{position:"relative",marginBottom:"50px",paddingTop:"50px",display:"flex",justifyContent:"space-around",width:"100%",height:y.height*j},children:Object(n.jsxs)(f,{activeTile:o,tileMap:v,tileSize:{x:64,y:32},origin:{y:1,x:v.width/2},worldSize:{x:v.width,y:v.height},image:d,zoom:j,background:O,addTile:function(e){T((function(t){var i=Object(s.a)(t),n=i.find((function(t){return t.x===e.x&&t.y===e.y}));return n?(n.image=e.image,n.tile=e.tile,i):[].concat(Object(s.a)(t),[{x:e.x,y:e.y,tile:e.tile,image:e.image,height:e.height,width:e.width}])}))},onClick:function(e){console.log(e)},children:[Object(n.jsx)(m,{map:v.layers[0].data,spriteSheet:d,tileSize:{x:64,y:32},origin:{x:10,y:1},worldSize:{x:v.width,y:v.height}}),Object(n.jsx)(m,{map:v.layers[1].data,spriteSheet:d,tileSize:{x:64,y:32},origin:{x:10,y:1},worldSize:{x:v.width,y:v.height},children:C.map((function(e,t){return Object(n.jsx)(w,{x:e.x,y:e.y,tile:e.tile,spriteSheet:e.image,height:e.height,width:e.width},t)}))})]})}),Object(n.jsx)("div",{style:{width:"80%",margin:"50px auto",height:400},children:Object(n.jsx)(g,{tileSet:d,setActiveTile:c,size:{height:64,width:64},zoom:j,tWidth:64,tHeight:64})})]})},z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),o(e),c(e)}))};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),z()},2:function(e){e.exports=JSON.parse('{"compressionlevel":-1,"height":20,"infinite":false,"layers":[{"data":[85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,4,4,4,85,85,85,85,85,85,85,85,4,4,4,85,85,85,85,85,85,4,85,4,85,85,85,85,85,85,85,85,4,85,4,85,85,85,85,85,85,4,4,4,85,85,85,85,85,85,85,85,4,85,4,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,4,4,4,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,88,88,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,88,88,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,88,88,85,85,85,85,85,85,65,65,85,85,85,85,85,85,85,85,85,85,88,88,85,85,85,85,85,85,85,65,65,65,65,65,65,65,65,85,85,85,87,87,87,87,87,85,65,85,65,65,85,85,85,85,85,85,85,85,85,85,87,86,86,86,87,85,65,65,65,82,82,82,82,82,82,82,82,82,85,85,87,86,60,86,87,85,85,85,85,82,85,85,85,82,82,82,85,85,85,85,87,86,60,86,87,85,85,85,85,82,85,85,85,82,82,82,82,82,85,85,87,86,86,86,87,85,85,85,85,82,85,85,85,82,86,82,85,85,85,85,87,87,87,87,87,85,85,85,85,82,82,82,82,82,60,82,85,85,85,85,85,85,85,85,85,85,85,85,85,82,82,82,82,84,86,81,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85],"height":20,"id":1,"name":"layer0","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[2,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,2,89,84,84,84,84,0,0,0,0,55,0,0,0,0,0,0,0,0,0,89,89,84,30,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,89,89,56,0,25,0,0,0,0,0,51,0,0,0,0,86,0,0,0,0,89,89,84,0,0,0,0,0,0,0,51,0,0,0,0,86,0,0,0,0,89,89,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,30,0,51,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,12,0,76,0,0,0,0,0,0,0,0,39,89,0,0,0,0,0,0,0,0,75,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,53,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,53,52,53,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,53,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,2,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,2],"height":20,"id":2,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextlayerid":3,"nextobjectid":1,"orientation":"isometric","renderorder":"right-down","tiledversion":"1.4.3","tileheight":32,"tilesets":[{"firstgid":1,"source":"2d.tsx"}],"tilewidth":64,"type":"map","version":1.4,"width":20}')}},[[19,1,2]]]);
//# sourceMappingURL=main.4ce05e64.chunk.js.map