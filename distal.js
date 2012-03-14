function distal(f,g){"use strict";var h=new Function;h.prototype=g;var g=new h,h=distal.resolve,b=f,r=f.ownerDocument,n=!!f.querySelectorAll,t="innerText"in f?"innerText":"textContent",A={className:1,"class":1,innerHTML:1,style:1,src:1,href:1,id:1,value:1,checked:1,selected:1,label:1,htmlFor:1,text:1,disabled:1},i=distal,u=i.beforeAttr,v=i.beforeText,w=i.qif||"data-qif",s=i.qrepeat||"data-qrepeat",x=i.qattr||"data-qattr",y=i.qtext||"data-qtext",z=i.format,i=i.qdef||"data-qdef",q="*["+[i,w,s,x,y].join("],*[")+ "]",c,B=function(a){return this[a]},d=f.parentNode;for(;(b=f.nextSibling)&&1==b.nodeType&&(b.qdup||b.getAttribute("qdup"));)d.removeChild(b);var o,p=[0],l,j=0,a,e;if(n){for(l=f.querySelectorAll("*[qdup]");b=l[j++];)b.parentNode.removeChild(b);j=0}o=[n?f.querySelectorAll(q):f.getElementsByTagName("*")];for(l=[f];;){for(b=l[j++];!b&&(l=o.pop());)j=p.pop(),b=l[j++];if(!b)break;if(a=b.getAttribute(i))a=a.split(" "),g[a[0]]=h(g,a[1]);if(a=b.getAttribute(w)){a=a.split(" ");0==a[0].indexOf("not:")&&(a=[a[0].substr(4),"not",0]);if((c=h(g,a[0]))&&c.join&&-1<c.length)c=c.length;if(2<a.length)switch("number"==typeof c&&(a[2]*=1),a[1]){case"not":a=!c;break;case"eq":a=c==a[2];break;case"ne":a=c!=a[2];break;case"gt":a=c>a[2];break;case"lt":a=c<a[2];break;case"cn":a=c&&0<=c.indexOf(a[2]);break;case"nc":a=c&&0>c.indexOf(a[2]);break;default:throw b;}if(a)b.style.display="";else{b.style.display="none";j=n?j+b.querySelectorAll(q).length:j+b.getElementsByTagName("*").length;continue}}if(a=b.getAttribute(s)){e=a.split(" ");if(!n)for(c=b.parentNode;(d=b.nextSibling)&&1==d.nodeType&&(d.qdup||d.getAttribute("qdup"));)c.removeChild(d);if((c=h(g,e[1]))&&c.length)b.style.display="",g[e[0]]=c[0];else{b.style.display="none";j=n?j+b.querySelectorAll(q).length:j+b.getElementsByTagName("*").length;continue}if(1<c.length){c=Array(c.length-1);for(e=d=c.length;0<e;e--)c[d-e]=e;d=b.cloneNode(!0);"form"in d&&(d.checked=!1);d.setAttribute(i,a);d.removeAttribute(s);d.setAttribute("qdup","1");d=d.outerHTML||r.createElement("div").appendChild(d).parentNode.innerHTML;e=d.indexOf(" "+i+'="'+a+'"');-1==e&&(e=d.indexOf(" "+i+"='"+a+"'"));e=e+i.length+3+a.length;c=d.substr(0,e)+"."+c.join(d.substr(e)+d.substr(0,e)+".")+d.substr(e);d=r.createElement("div");"cells"in b?(d.innerHTML="<table>"+c+"</table>",d=d.firstChild.tBodies[0].childNodes):"cellIndex"in b?(d.innerHTML="<table><tr>"+c+"</tr></table>",d=d.firstChild.tBodies[0].firstChild.childNodes):"selected"in b&&"text"in b?(d.innerHTML="<select>"+c+"</select>",d=d.firstChild.options):(d.innerHTML=c,d=d.childNodes);var k=r.createDocumentFragment();if(n||b==f){o.push(l);p.push(j);l={getAttribute:B};l[i]=a+".0";o.push([l]);p.push(0);l=[];for(e=d.length-1;0<=e;e--)c=d[e],o.push(n?c.querySelectorAll(q):c.getElementsByTagName("*")),p.push(0),o.push([c]),p.push(0),c.qdup=1,k.appendChild(c)}else for(e=d.length-1;0<=e;e--)c=d[e],c.qdup=1,k.appendChild(c);c=b.parentNode;c.insertBefore(k,b.nextSibling);c.selectedIndex=-1}}if(a=b.getAttribute(x)){var m;c=a.split("; ");for(e=c.length-1;0<=e;e--){a=c[e].split(" ");k=a[0];m=h(g,a[1])||"";u&&u(b,k,m);if(a=a[2]&&z[a[2]])m=a(m);if(A[k])switch(k){case"innerHTML":throw b;case"disabled":case"checked":case"selected":b[k]=!!m;break;case"style":b.style.cssText=m;break;case"text":b[n?k:t]=m;break;case"class":k="className";default:b[k]=m}else b.setAttribute(k,m)}}if(a=b.getAttribute(y)){a=a.split(" ");c="html"==a[0];e=h(g,a[c?1:0])||"";v&&v(b,e);if((a=a[c?2:1])&&(a=z[a]))e=a(e);c?b.innerHTML=e:b["form"in b?"value":t]=e}}}distal.resolve=function(f,g,h,b){if(h=f[g])return"function"==typeof h?h.call(f,g):h;g=g.split(".");for(h=0;g[h]&&(b=f)&&(f=f[g[h++]]););return"function"==typeof f?f.call(b,g.join(".")):f};distal.format={",.":function(f,g){g=1*f;return isNaN(g)?f:(g%1?g.toFixed(2):parseInt(g)+"").replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g,"$1,")}};"function"==typeof define&&define.amd&&define("distal",function(){return distal});