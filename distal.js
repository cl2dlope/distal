function distal(f,g){var i=new Function;i.prototype=g;var g=new i,i=distal.resolve,c=f,s=f.ownerDocument,n=!!f.querySelectorAll,u="innerText"in f?"innerText":"textContent",B={className:1,"class":1,innerHTML:1,style:1,src:1,href:1,id:1,value:1,checked:1,selected:1,label:1,htmlFor:1,text:1,disabled:1},h=distal,v=h.beforeAttr,w=h.beforeText,x=h.qif||"data-qif",t=h.qrepeat||"data-qrepeat",y=h.qattr||"data-qattr",z=h.qtext||"data-qtext",q=h.qdup||"data-qdup",A=h.format,h=h.qdef||"data-qdef",r="*["+[h,x,t,y,z].join("],*[")+"]",b,C=function(a){return this[a]},d=f.parentNode;for(;(c=f.nextSibling)&&(c.qdup||1==c.nodeType&&c.getAttribute(q));)d.removeChild(c);var o,p=[0],l,j=0,a,e;if(n){for(l=f.querySelectorAll("*["+q+"]");c=l[j++];)c.parentNode.removeChild(c);j=0}o=[n?f.querySelectorAll(r):f.getElementsByTagName("*")];for(l=[f];;){for(c=l[j++];!c&&(l=o.pop());)j=p.pop(),c=l[j++];if(!c)break;if(a=c.getAttribute(h))a=a.split(" "),g[a[0]]=i(g,a[1]);if(a=c.getAttribute(x)){a=a.split(" ");0==a[0].indexOf("not:")&&(a=[a[0].substr(4),"not",0]);if((b=i(g,a[0]))&&b.join&&-1<b.length)b=b.length;if(2<a.length)switch("number"==typeof b&&(a[2]*=1),a[1]){case"not":a=!b;break;case"eq":a=b==a[2];break;case"ne":a=b!=a[2];break;case"gt":a=b>a[2];break;case"lt":a=b<a[2];break;case"cn":a=b&&0<=b.indexOf(a[2]);break;case"nc":a=b&&0>b.indexOf(a[2]);break;default:throw c;}else a=b;if(a)c.style.display="";else{c.style.display="none";j=n?j+c.querySelectorAll(r).length:j+c.getElementsByTagName("*").length;continue}}if(a=c.getAttribute(t)){e=a.split(" ");if(!n)for(b=c.parentNode;(d=c.nextSibling)&&(d.qdup||1==d.nodeType&&d.getAttribute(q));)b.removeChild(d);if((b=i(g,e[1]))&&b.length)c.style.display="",g[e[0]]=b[0];else{c.style.display="none";j=n?j+c.querySelectorAll(r).length:j+c.getElementsByTagName("*").length;continue}if(1<b.length){b=Array(b.length-1);for(e=d=b.length;0<e;e--)b[d-e]=e;d=c.cloneNode(!0);"form"in d&&(d.checked=!1);d.setAttribute(h,a);d.removeAttribute(t);d.setAttribute(q,"1");d=d.outerHTML||s.createElement("div").appendChild(d).parentNode.innerHTML;e=d.indexOf(" "+h+'="'+a+'"');-1==e&&(e=d.indexOf(" "+h+"='"+a+"'"));e=e+h.length+3+a.length;b=d.substr(0,e)+"."+b.join(d.substr(e)+d.substr(0,e)+".")+d.substr(e);d=s.createElement("div");"cells"in c?(d.innerHTML="<table>"+b+"</table>",d=d.firstChild.tBodies[0].childNodes):"cellIndex"in c?(d.innerHTML="<table><tr>"+b+"</tr></table>",d=d.firstChild.tBodies[0].firstChild.childNodes):"selected"in c&&"text"in c?(d.innerHTML="<select>"+b+"</select>",d=d.firstChild.childNodes):(d.innerHTML=b,d=d.childNodes);var k=s.createDocumentFragment();if(n||c==f){o.push(l);p.push(j);l={getAttribute:C};l[h]=a+".0";o.push([l]);p.push(0);l=[];for(e=d.length-1;0<=e;e--)b=d[e],o.push(n?b.querySelectorAll(r):b.getElementsByTagName("*")),p.push(0),o.push([b]),p.push(0),b.qdup=1,k.appendChild(b)}else for(e=d.length-1;0<=e;e--)b=d[e],b.qdup=1,k.appendChild(b);b=c.parentNode;b.insertBefore(k,c.nextSibling)}b.selectedIndex=-1}if(a=c.getAttribute(y)){var m;b=a.split("; ");for(e=b.length-1;0<=e;e--){a=b[e].split(" ");k=a[0];m=i(g,a[1])||"";v&&v(c,k,m);if(a=a[2]&&A[a[2]])m=a(m);if(B[k])switch(k){case"innerHTML":throw c;case"disabled":case"checked":case"selected":c[k]=!!m;break;case"style":c.style.cssText=m;break;case"text":c[n?k:u]=m;break;case"class":k="className";default:c[k]=m}else c.setAttribute(k,m)}}if(a=c.getAttribute(z)){a=a.split(" ");b="html"==a[0];e=i(g,a[b?1:0])||"";w&&w(c,e);if((a=a[b?2:1])&&(a=A[a]))e=a(e);b?c.innerHTML=e:c["form"in c?"value":u]=e}}}distal.resolve=function(f,g,i,c){if(i=f[g])return"function"==typeof i?i.call(f,g):i;g=g.split(".");for(i=0;g[i]&&(c=f)&&(f=f[g[i++]]););return"function"==typeof f?f.call(c,g.join(".")):f};distal.format={",.":function(f,g){g=1*f;return isNaN(g)?f:(g%1?g.toFixed(2):parseInt(g)+"").replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g,"$1,")}};"function"==typeof define&&define.amd&&define("distal",function(){return distal});