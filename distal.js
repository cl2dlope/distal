function distal(a,b){var c=new Function();c.prototype=b;b=new c();var d=distal.resolve;var e=a;var f=a.ownerDocument;var g=!!a.querySelectorAll;var h="innerText"in a?"innerText":"textContent";var j={className:1,"class":1,innerHTML:1,style:1,src:1,href:1,id:1,value:1,checked:1,label:1,htmlFor:1,text:1,disabled:1};var k=distal;var l=k.qif||"data-qif";var m=k.qrepeat||"data-qrepeat";var n=k.qattr||"data-qattr";var o=k.qtext||"data-qtext";k=k.qdef||"data-qdef";var p="*["+[k,l,m,n,o].join("],*[")+"]";var q;var r=function(s){return this[s]};var t=a.parentNode;while((e=a.nextSibling)&&e.nodeType==1&&(e.qdup||e.getAttribute("qdup"))){t.removeChild(e)}var u;var v=[0];var w;var x=0;var y;var z;if(g){w=a.querySelectorAll("*[qdup]");while((e=w[x++]))e.parentNode.removeChild(e);x=0}u=[g?a.querySelectorAll(p):a.getElementsByTagName("*")];w=[a];while(true){e=w[x++];while(!e&&(w=u.pop())){x=v.pop();e=w[x++]}if(!e)break;y=e.getAttribute(k);if(y){y=y.split(" ");b[y[0]]=d(b,y[1])}y=e.getAttribute(l);if(y){if((z=(y.indexOf("not:")==0)))y=y.substr(5);var A=d(b,y);if(A&&A.length>-1)A=!!A.length;if(!!A^z){e.style.display=""}else{e.style.display="none";if(g){x+=e.querySelectorAll(p).length}else{x+=e.getElementsByTagName("*").length}continue}}y=e.getAttribute(m);if(y){z=y.split(" ");if(!g){q=e.parentNode;while((t=e.nextSibling)&&t.nodeType==1&&(t.qdup||t.getAttribute("qdup"))){q.removeChild(t)}}var B=d(b,z[1]);if(B&&B.length){e.style.display="";b[z[0]]=B[0]}else{e.style.display="none";if(g){x+=e.querySelectorAll(p).length}else{x+=e.getElementsByTagName("*").length}continue}if(B.length>1){q=new Array(B.length-1),len=q.length;for(var i=len;i>0;i--)q[len-i]=i;t=e.cloneNode(true);t.setAttribute(k,y);t.removeAttribute(m);t.setAttribute("qdup","1");t=t.outerHTML||f.createElement("div").appendChild(t).parentNode.innerHTML;var C=t.indexOf(' '+k+'="'+y+'"');if(C==-1)C=t.indexOf(" "+k+"='"+y+"'");C=C+k.length+3+y.length;q=t.substr(0,C)+"."+q.join(t.substr(C)+t.substr(0,C)+".")+t.substr(C);t=f.createElement("div");if("cells"in e){t.innerHTML="<table>"+q+"<\/table>";t=t.firstChild.tBodies[0].childNodes}else if("cellIndex"in e){t.innerHTML="<table><tr>"+q+"<\/tr><\/table>";t=t.firstChild.tBodies[0].firstChild.childNodes}else if("selected"in e&&"text"in e){t.innerHTML="<select>"+q+"<\/select>";t=t.firstChild.options}else{t.innerHTML=q;t=t.childNodes}var D=f.createDocumentFragment();if(g||e==a){u.push(w);v.push(x);w={getAttribute:r};w[k]=y+".0";u.push([w]);v.push(0);w=[];for(var i=t.length-1;i>=0;i--){q=t[i];u.push(g?q.querySelectorAll(p):q.getElementsByTagName("*"));v.push(0);u.push([q]);v.push(0);q.qdup=1;D.appendChild(q)}}else{for(var i=t.length-1;i>=0;i--){q=t[i];q.qdup=1;D.appendChild(q)}}e.parentNode.insertBefore(D,e.nextSibling)}}y=e.getAttribute(n);if(y){y=y.split(" ");var E;var F;for(var i=y.length-1;i>=0;i-=2){E=y[i-1];F=d(b,y[i]);if(j[E]){switch(E){case"innerHTML":throw e;case"disabled":case"checked":e[E]=!!F;break;case"style":e.style.cssText=F;break;case"text":e[g?E:h]=F;break;case"class":E="className";default:e[E]=F}}else{e.setAttribute(E,F)}}}y=e.getAttribute(o);if(y){if(y.indexOf("html ")==0){y=y.split(" ");e.innerHTML=d(b,y[1])||""}else{e["value"in e?"value":h]=d(b,y)||""}}}}distal.resolve=function(a,b,x){if((x=a[b]))return x;b=b.split(".");x=0;while(b[x]&&(a=a[b[x++]]));return a};