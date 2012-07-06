/*
 MIT License (c) copyright B Cavalier & J Hann */
var p=!0,t=!1;
(function(m){function I(){}function w(a,b){return 0==T.call(a).indexOf("[object "+b)}function u(a){return a&&"/"==a.charAt(a.length-1)?a.substr(0,a.length-1):a}function F(a,b){var c,e,d;e=1;a=a.replace(U,function(a,b,c,g){c&&e++;d=p;return g||""});return d?(c=b.split("/"),c.splice(c.length-e,e),c.concat(a||[]).join("/")):a}function J(a){var b=a.indexOf("!");return{H:a.substr(b+1),j:0<=b&&a.substr(0,b)}}function G(){}function K(a){G.prototype=a;a=new G;G.prototype=L;return a}function s(){function a(a,b,
c){e.push([a,b,c])}function b(a,b){for(var c,d=0;c=e[d++];)(c=c[a])&&c(b)}var c,e,d;c=this;e=[];d=function(c,h){a=c?function(a){a&&a(h)}:function(a,b){b&&b(h)};d=I;b(c?0:1,h);b=I;e=i};this.X=function(b,c,e){a(b,c,e)};this.h=function(a){c.ca=a;d(p,a)};this.d=function(a){c.ba=a;d(t,a)};this.o=function(a){b(2,a)}}function q(a,b,c,e){a instanceof s?a.X(b,c,e):b(a)}function x(a,b,c){var e;return function(){0<=--a&&b&&(e=b.apply(i,arguments));0==a&&c&&c(e);return e}}function z(){function a(b,e,d){var f;
f=g.f(j,i,[].concat(b));this.then=b=function(a,b){q(f,function(b){a&&a.apply(i,b)},function(a){if(b)b(a);else throw a;});return this};this.next=function(b,c){return new a(b,c,f)};e&&b(e);q(d,function(){g.i(f)})}var b=[].slice.call(arguments);w(b[0],"Object")&&(j=g.b(b.shift()));return new a(b[0],b[1])}function M(a){var b=a.id;if(b==i)if(y!==i)y={w:"Multiple anonymous defines in url"};else if(!(b=g.S()))y=a;if(b!=i){var c=l[b];b in l||(c=g.k(b,j).b,c=l[b]=g.t(c,b));if(!(c instanceof s))throw Error("duplicate define: "+
b);c.Z=t;g.u(c,a)}}var j=m.curl,A,B,C=m.document,N=C&&(C.head||C.getElementsByTagName("head")[0]),O={},P={},Q={},D={},L={},T=L.toString,i,R={loaded:1,interactive:Q,complete:1},l={},E=t,y,V=/\?/,S=/^\/|^[^:]+:\/\//,U=/(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,W=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,X=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,H,g;g={f:function(a,b,c,e){function d(a){return F(a,h.e)}function f(b,c){var f,k,n,r;f=c&&function(a){c.apply(i,a)};if(w(b,"String")){k=d(b);n=l[k];
r=n instanceof s&&n.a;if(!(k in l))throw Error("Module not resolved: "+k);if(f)throw Error("require(id, callback) not allowed");return r||n}q(g.i(g.f(a,h.e,b,e)),f)}var h;h=new s;h.e=h.id=b||"";h.T=e;h.v=c;h.p=f;f.toUrl=function(b){return g.k(d(b),a).url};h.Y=d;return h},t:function(a,b,c,e){var d,f,h;d=g.f(a,b,i,c);d.e=e==i?b:e;f=d.h;h=x(1,function(a){d.m=a;try{return g.L(d)}catch(b){d.d(b)}});d.h=function(a){q(c||E,function(){f(l[d.id]=h(a))})};d.z=function(a){q(c||E,function(){d.a&&(h(a),d.o(P))})};
return d},K:function(a,b,c,e){a=g.f(a,b,i,c);a.e=e;return a},R:function(a){return a.p},A:function(a){return a.a||(a.a={})},Q:function(a){var b=a.n;b||(b=a.n={id:a.id,uri:g.B(a),exports:g.A(a)},b.a=b.exports);return b},B:function(a){return a.url||(a.url=g.s(a.p.toUrl(a.id)))},b:function(a){var b,c,e;(b=a)||(a={});c=a.apiName;if((e=a.apiContext)||c?e[c]:A&&b)throw Error((c||"curl")+" already exists");(e||m)[c||"curl"]=z;A&&b&&(m.curl=A);c=a.defineName;if((e=a.defineContext)||c?e[c]:B&&b)throw Error((c||
"define")+" already exists");(e||m)[c||"define"]=c=function(){var a=g.P(arguments);M(a)};B&&b&&(m.define=B);c.amd={plugins:p,jQuery:p,curl:"0.6.4"};b&&(g.b=g.D);return g.D(a)},D:function(a){function b(b,c){var d,f,k,n,r;for(r in b){k=b[r];k.name=k.id||k.name||r;n=a;f=J(u(k.name||r));d=f.H;if(f=f.j)n=e[f],n||(n=e[f]=K(a),n.g=K(a.g),n.c=[]),delete b[r];if(c){f=k;var v=void 0;f.path=u(f.path||f.location||"");v=u(f.main)||"main";"."!=v.charAt(0)&&(v="./"+v);f.C=F(v,f.name+"/");f.V=F(v,f.path+"/");f.b=
f.config}else f={path:u(k)};f.I=d.split("/").length;d?(n.g[d]=f,n.c.push(d)):n.r=g.G(k,a)}}function c(a){var b=a.g;a.W=RegExp("^("+a.c.sort(function(a,c){return b[a].I<b[c].I}).join("|").replace(/\/|\./g,"\\$&")+")(?=\\/|$)");delete a.c}var e;a.r=a.baseUrl||"";a.F="pluginPath"in a?a.pluginPath:"curl/plugin";a.g={};e=a.plugins=a.plugins||{};a.c=[];b(a.paths,t);b(a.packages,p);for(var d in e){var f=e[d].c;f&&(e[d].c=f.concat(a.c),c(e[d]))}c(a);g.J(a);return a},J:function(a){var b;(b=a&&a.preloads)&&
0<b.length&&q(E,function(){E=g.i(g.f(a,i,b,p))})},k:function(a,b,c){var e,d,f,h;e=b.g;c&&(b.F&&0>a.indexOf("/")&&!(a in e))&&(f=a=u(b.F)+"/"+a);c=S.test(a)?a:a.replace(b.W,function(b){d=e[b]||{};h=d.b;return d.C&&b==a?(f=d.C,d.V):d.path||""});return{e:f||a,b:h||j,url:g.G(c,b)}},G:function(a,b){var c=b.r;return c&&!S.test(a)?u(c)+"/"+a:a},s:function(a){return a+(V.test(a)?"":".js")},U:function(a,b,c){var e=C.createElement("script");e.onload=e.onreadystatechange=function(c){c=c||m.event;if("load"==
c.type||R[e.readyState])delete D[a.id],e.onload=e.onreadystatechange=e.onerror="",b()};e.onerror=function(){c(Error("Syntax or http error: "+a.url))};e.type=a.$||"text/javascript";e.charset="utf-8";e.async=!a.aa;e.src=a.url;D[a.id]=e;N.insertBefore(e,N.firstChild);return e},M:function(a){var b=[],c;("string"==typeof a?a:a.toSource?a.toSource():a.toString()).replace(W,"").replace(X,function(a,d,f){f?c=c==f?i:c:c||b.push(d);return a});return b},P:function(a){var b,c,e,d,f,h;f=a.length;e=a[f-1];d=w(e,
"Function")?e.length:-1;2==f?w(a[0],"Array")?c=a[0]:b=a[0]:3==f&&(b=a[0],c=a[1]);!c&&0<d&&(h=p,c=["require","exports","module"].slice(0,d).concat(g.M(e)));return{id:b,m:c||[],q:0<=d?e:function(){return e},l:h}},L:function(a){var b;b=a.q.apply(a.l?a.a:i,a.m);b===i&&a.a&&(b=a.n?a.a=a.n.a:a.a);return b},u:function(a,b){a.q=b.q;a.l=b.l;a.v=b.m;g.i(a)},i:function(a){function b(a,b,c){h[b]=a;c&&o(a,b)}function c(b,c){var e,d,f,h;e=x(1,function(a){d(a);k(a,c)});d=x(1,function(a){o(a,c)});f=g.N(b,a);(h=f instanceof
s&&f.a)&&d(h);q(f,e,a.d,a.a&&function(a){f.a&&(a==O?d(f.a):a==P&&e(f.a))})}function e(){a.h(h)}var d,f,h,l,j,o,k;h=[];f=a.v;l=f.length;0==f.length&&e();o=x(l,b,function(){a.z&&a.z(h)});k=x(l,b,e);for(d=0;d<l;d++)j=f[d],j in H?(k(H[j](a),d,p),a.a&&a.o(O)):j?c(j,d):k(i,d,p);return a},O:function(a){g.B(a);g.U(a,function(){var b=y;y=i;a.Z!==t&&(!b||b.w?a.d(Error(b&&b.w||"define() missing or duplicated: "+a.url)):g.u(a,b))},a.d);return a},N:function(a,b){var c,e,d,f,h,i,m,o,k;c=b.Y;e=b.T;d=J(a);i=d.H;
f=c(d.j||i);m=g.k(f,j,!!d.j);if(d.j)h=f;else if(h=m.b.moduleLoader)i=f,f=h,m=g.k(h,j);d=l[f];f in l||(d=l[f]=g.t(m.b,f,e,m.e),d.url=g.s(m.url),g.O(d));f==h&&(o=new s,k=j.plugins[h]||j,q(d,function(a){var b,d,f;f=a.dynamic;i="normalize"in a?a.normalize(i,c,k)||"":c(i);d=h+"!"+i;b=l[d];if(!(d in l)){b=g.K(k,d,e,i);f||(l[d]=b);var j=function(a){b.h(a);f||(l[d]=a)};j.resolve=j;j.reject=b.d;a.load(i,b.p,j,k)}o!=b&&q(b,o.h,o.d,o.o)},o.d));return o||d},S:function(){var a;if(!w(m.opera,"Opera"))for(var b in D)if(R[D[b].readyState]==
Q){a=b;break}return a}};H={require:g.R,exports:g.A,module:g.Q};z.version="0.6.4";"function"==typeof define&&(B=define);"function"==typeof j&&(A=j,j=t);j=g.b(j);l.curl=z;l["curl/_privileged"]={core:g,cache:l,cfg:j,_define:M,_curl:z,Promise:s}})(this);
