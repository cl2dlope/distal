function distal(f,i){var j=new Function;j.prototype=i;var i=new j,j=distal.resolve,c=f,r=f.ownerDocument,n=!!f.querySelectorAll,t="innerText"in f?"innerText":"textContent",A={className:1,"class":1,innerHTML:1,style:1,src:1,href:1,id:1,value:1,checked:1,selected:1,label:1,htmlFor:1,text:1,disabled:1},h=distal,u=h.beforeAttr,v=h.beforeText,w=h.qif||"data-qif",s=h.qrepeat||"data-qrepeat",x=h.qattr||"data-qattr",y=h.qtext||"data-qtext",z=h.format,h=h.qdef||"data-qdef",q="*["+[h,w,s,x,y].join("],*[")+ "]",e,B=function(a){return this[a]},d=f.parentNode;for(;(c=f.nextSibling)&&1==c.nodeType&&(c.qdup||c.getAttribute("qdup"));)d.removeChild(c);var o,p=[0],l,k=0,a,b;if(n){for(l=f.querySelectorAll("*[qdup]");c=l[k++];)c.parentNode.removeChild(c);k=0}o=[n?f.querySelectorAll(q):f.getElementsByTagName("*")];for(l=[f];;){for(c=l[k++];!c&&(l=o.pop());)k=p.pop(),c=l[k++];if(!c)break;if(a=c.getAttribute(h))a=a.split(" "),i[a[0]]=j(i,a[1]);if(a=c.getAttribute(w)){a=a.split(" ");0==a[0].indexOf("not:")&&(a=[a[0].substr(4), "not",0]);if((b=j(i,a[0]))&&b.join&&-1<b.length)b=b.length;if(2<a.length)switch("number"==typeof b&&(a[2]*=1),a[1]){case"not":a=!b;break;case"eq":a=b==a[2];break;case"ne":a=b!=a[2];break;case"gt":a=b>a[2];break;case"lt":a=b<a[2];break;case"cn":a=b&&0<=b.indexOf(a[2]);break;case"nc":a=b&&0>b.indexOf(a[2]);break;default:throw c;}if(a)c.style.display="";else{c.style.display="none";k=n?k+c.querySelectorAll(q).length:k+c.getElementsByTagName("*").length;continue}}if(a=c.getAttribute(s)){b=a.split(" "); if(!n)for(e=c.parentNode;(d=c.nextSibling)&&1==d.nodeType&&(d.qdup||d.getAttribute("qdup"));)e.removeChild(d);var g=j(i,b[1]);if(g&&g.length)c.style.display="",i[b[0]]=g[0];else{c.style.display="none";k=n?k+c.querySelectorAll(q).length:k+c.getElementsByTagName("*").length;continue}if(1<g.length){e=Array(g.length-1);len=e.length;for(b=len;0<b;b--)e[len-b]=b;d=c.cloneNode(!0);"form"in d&&(d.checked=!1);d.setAttribute(h,a);d.removeAttribute(s);d.setAttribute("qdup","1");d=d.outerHTML||r.createElement("div").appendChild(d).parentNode.innerHTML; b=d.indexOf(" "+h+'="'+a+'"');-1==b&&(b=d.indexOf(" "+h+"='"+a+"'"));b=b+h.length+3+a.length;e=d.substr(0,b)+"."+e.join(d.substr(b)+d.substr(0,b)+".")+d.substr(b);d=r.createElement("div");"cells"in c?(d.innerHTML="<table>"+e+"</table>",d=d.firstChild.tBodies[0].childNodes):"cellIndex"in c?(d.innerHTML="<table><tr>"+e+"</tr></table>",d=d.firstChild.tBodies[0].firstChild.childNodes):"selected"in c&&"text"in c?(d.innerHTML="<select>"+e+"</select>",d=d.firstChild.options):(d.innerHTML=e,d=d.childNodes); g=r.createDocumentFragment();if(n||c==f){o.push(l);p.push(k);l={getAttribute:B};l[h]=a+".0";o.push([l]);p.push(0);l=[];for(b=d.length-1;0<=b;b--)e=d[b],o.push(n?e.querySelectorAll(q):e.getElementsByTagName("*")),p.push(0),o.push([e]),p.push(0),e.qdup=1,g.appendChild(e)}else for(b=d.length-1;0<=b;b--)e=d[b],e.qdup=1,g.appendChild(e);e=c.parentNode;e.insertBefore(g,c.nextSibling);e.selectedIndex=-1}}if(a=c.getAttribute(x)){var m;e=a.split("; ");for(b=e.length-1;0<=b;b--){a=e[b].split(" ");g=a[0];m= j(i,a[1])||"";u&&u(c,g,m);if(a=a[2]&&z[a[2]])m=a(m);if(A[g])switch(g){case"innerHTML":throw c;case"disabled":case"checked":case"selected":c[g]=!!m;break;case"style":c.style.cssText=m;break;case"text":c[n?g:t]=m;break;case"class":g="className";default:c[g]=m}else c.setAttribute(g,m)}}if(a=c.getAttribute(y)){a=a.split(" ");e="html"==a[0];b=j(i,a[e?1:0])||"";v&&v(c,b);if((a=a[e?2:1])&&(a=z[a]))b=a(b);e?c.innerHTML=b:c["form"in c?"value":t]=b}}} distal.resolve=function(f,i,j){if(j=f[i])return j;i=i.split(".");for(j=0;i[j]&&(f=f[i[j++]]););return f};distal.format={",.":function(v,f){f=v*1;return isNaN(f)?v:(f%1?f.toFixed(2):parseInt(f)+"").replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g,"$1,")}};