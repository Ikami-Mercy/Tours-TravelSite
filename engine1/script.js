// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_seven(m,A,o){var p=jQuery;var w=p(this);var n=m.distance||5;var d=m.cols;var z=m.rows;var a=m.duration*2;var q=m.blur||50;var E=o.find(".ws_list");var x=p("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"});var c=x.clone().css("overflow","hidden");x.addClass("ws_effect ws_seven");var t=!m.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;var l;var e=p("<div>").addClass("ws_parts").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8,transform:"translate3d(0,0,0)"});var B=p("<div>").addClass("ws_zoom").css({position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:2,transform:"translate3d(0,0,0)"});x.append(e,B,c).appendTo(o);var f={t:p(window).scrollTop(),l:p(window).scrollLeft(),w:p(window).width(),h:p(window).height()};var D=Math.max((m.width||e.width())/(m.height||e.height())||3,3);d=d||Math.round(D<1?3:3*D);z=z||Math.round(D<1?3/D:3);var J=[];var y=[];for(var v=0;v<d*z;v++){var H=v%d;var G=Math.floor(v/d);p(J[v]=p("<div>")[0]).css({position:"absolute",overflow:"hidden",transform:"translate3d(0,0,0)"}).appendTo(e).append(p("<img>").css({position:"absolute",transform:"translate3d(0,0,0)"}));p(y[v]=p("<div>")[0]).css({position:"absolute",overflow:"hidden",transform:"translate3d(0,0,0)"}).appendTo(B).append(p("<img>").css({position:"absolute",transform:"translate3d(0,0,0)"}))}J=p(J);y=p(y);jQuery.extend(jQuery.easing,{easeOutQuart:function(j,K,i,M,L){return -M*((K=K/L-1)*K*K*K-1)+i},easeInExpo:function(j,K,i,M,L){return(K==0)?i:M*Math.pow(2,10*(K/L-1))+i},easeInCirc:function(j,K,i,M,L){return -M*(Math.sqrt(1-(K/=L)*K)-1)+i}});function s(j,i){return Math.abs((i%2?1:0)+((i-i%2)/2)-j)/i}function I(M,L,N,i){var K=(L>=i)?(i)/(L):1;var j=(M>=N)?(N)/(M):1;return{l:j,t:K,m:Math.min(j,K)}}function k(j,L){var K=0;for(var i in j){(function(N,O){var M=O[N];wowAnimate(M.item,M.begin,M.end,M.duration,M.delay,M.easing,function(){if(M.callback){M.callback()}K++;if(K==O.length&&L){L()}})}(i,j))}}function u(U,i,j,M,W){var Q=e.width(),S=e.height(),T=n*Q/d,O=n*S/z,P=a*(M?4:5)/(d*z),L=M?"easeInExpo":"easeOutQuart";var K=f.h+f.t-S/z,R=f.w+f.l-Q/d,X=e.offset().top+e.height(),N=e.offset().left+e.width();if(K<X){K=X}if(R<N){R=N}var V=[];p(U).each(function(af){var ac=af%d,Z=Math.floor(af/d),ad=a*0.2*(s(ac,d)*45+Z*4)/(d*z),ab=e.offset().left+f.l+T*ac-Q*n/2+T,ae=e.offset().top+f.t+O*Z-S*n/2+O,Y=I(ab,ae,R,K);if(m.support.transform){var ag={opacity:1,translate:[Q*ac/d,S*Z/z,0],scale:1,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(ac,d)*100)},aj={opacity:0,translate:[(T*ac-Q*n/2.115)*Y.l,(O*Z-S*n/2.115)*Y.t,0],scale:n*Y.m,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(ac,d)*100)};p(this).find("img").css({transform:"translate3d("+(-Q*ac/d+j.marginLeft)+"px,"+(-S*Z/z+j.marginTop)+"px,0px)",width:j.width,height:j.height})}else{var ag={opacity:1,left:Q*ac/d,top:S*Z/z,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(ac,d)*100)},aj={opacity:0,left:(T*ac-Q*n/2)*Y.l,top:(O*Z-S*n/2)*Y.t,width:T*Y.m,height:O*Y.m},ai={left:-(Q*ac/d)+j.marginLeft,top:-(S*Z/z)+j.marginTop,width:j.width,height:j.height},ah={left:-n*(Q/d*ac-j.marginLeft)*Y.m,top:-n*(S/z*Z-j.marginTop)*Y.m,width:n*j.width*Y.m,height:n*j.height*Y.m}}if(!M){var aa=ag;ag=aj;aj=aa;aa=ai;ai=ah;ah=aa}V.push({item:p(this).show(),begin:ag,end:aj,easing:L,delay:ad,duration:P,callback:M?function(){this.item.hide()}:0});if(ai){V.push({item:p(this).find("img"),begin:ai,end:ah,easing:L,delay:ad,duration:P})}});if(M){p(i).each(function(ac){var Z=ac%d;var Y=Math.floor(ac/d);var aa=a*0.2+a*0.15*(s(Z,d)*35+Y*4)/(d*z);var ab=a*4/(d*z);if(m.support.transform){var ad={opacity:0,translate:[Q/2,S/2,0],scale:0,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(Z,d)*100)},af={opacity:1,translate:[Q*Z/d,S*Y/z,0],scale:1,width:Q/d,height:S/z,zIndex:Math.ceil(100-s(Z,d)*100)};p(this).find("img").css({transform:"translate3d("+(-Q*Z/d+j.marginLeft)+"px,"+(-S*Y/z+j.marginTop)+"px,0px)",width:j.width,height:j.height})}else{var ad={left:Q/2,top:S/2,width:0,height:0,zIndex:Math.ceil(100-s(Z,d)*100)},af={left:Q*Z/d,top:S*Y/z,width:Q/d,height:S/z},ag={left:0,top:0,width:0,height:0},ae={left:-Q*Z/d+j.marginLeft,top:-S*Y/z+j.marginTop,width:j.width,height:j.height}}V.push({item:p(this),begin:ad,end:af,easing:"easeOutBack",delay:aa,duration:ab});if(ag){V.push({item:p(this).find("img"),begin:ag,end:ae,easing:"easeOutBack",delay:aa,duration:ab})}});B.delay(a*0.1).animate({opacity:1},a*0.2,"easeInCirc")}k(V,W);return{stop:function(){W()}}}var h;this.go=function(i,j,M){if(h){return j}if(M==undefined){M=(j==0&&i!=j+1)||(i==j-1)?false:true}f.t=p(window).scrollTop();f.l=p(window).scrollLeft();f.w=p(window).width();f.h=p(window).height();var N=p(A.get(j));N={width:N.width(),height:N.height(),marginTop:parseFloat(N.css("marginTop")),marginLeft:parseFloat(N.css("marginLeft"))};J.find("img").attr("src",A.get(M?j:i).src);y.find("img").attr("src",A.get(i).src);e.show();if(M){B.show()}var L=0;if(M){if(t){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(K){t=0}l='<canvas width="'+x.width+'" height="'+x.height+'"/>';l=p(l).css({"z-index":1,position:"absolute",left:0,top:0}).css(N).appendTo(c);L=F(p(A.get(j)),N,q,l.get(0))}if(!t||!L){t=0;L=F(p(A.get(j)),N,8);if(l){l.remove();l=0}}}h=new u(J,y,N,M,function(){w.trigger("effectEnd");e.hide();B.hide();if(l){l.remove()}else{if(L){L.remove()}}h=0})};function F(P,K,O,L){var S=(parseInt(P.parent().css("z-index"))||0)+1;if(t){var V=L.getContext("2d");V.drawImage(P.get(0),0,0,K.width,K.height);if(!b(V,0,0,L.width,L.height,O)){return 0}return p(L)}var W=p("<div></div>").css({position:"absolute","z-index":S,left:0,top:0,overflow:"hidden"}).css(K).appendTo(c);var U=(Math.sqrt(5)+1)/2;var M=1-U/2;for(var N=0;M*N<O;N++){var Q=Math.PI*U*N;var j=(M*N+1);var T=j*Math.cos(Q);var R=j*Math.sin(Q);p(document.createElement("img")).attr("src",P.attr("src")).css({opacity:1/(N/1.8+1),position:"absolute","z-index":S,left:Math.round(T)+"px",top:Math.round(R)+"px",width:"100%",height:"100%"}).appendTo(W)}return W}var r=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var C=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function b(az,ag,ae,j,K,ap){if(isNaN(ap)||ap<1){return}ap|=0;var au;try{au=az.getImageData(ag,ae,j,K)}catch(ay){console.log("error:unable to access image data: "+ay);return false}var O=au.data;var an,am,aw,at,V,Y,S,M,N,ad,T,af,ab,aj,ao,W,R,X,Z,ai;var ax=ap+ap+1;var ak=j<<2;var U=j-1;var ar=K-1;var Q=ap+1;var aq=Q*(Q+1)/2;var ah=new g();var ac=ah;for(aw=1;aw<ax;aw++){ac=ac.next=new g();if(aw==Q){var P=ac}}ac.next=ah;var av=null;var al=null;S=Y=0;var aa=r[ap];var L=C[ap];for(am=0;am<K;am++){aj=ao=W=M=N=ad=0;T=Q*(R=O[Y]);af=Q*(X=O[Y+1]);ab=Q*(Z=O[Y+2]);M+=aq*R;N+=aq*X;ad+=aq*Z;ac=ah;for(aw=0;aw<Q;aw++){ac.r=R;ac.g=X;ac.b=Z;ac=ac.next}for(aw=1;aw<Q;aw++){at=Y+((U<aw?U:aw)<<2);M+=(ac.r=(R=O[at]))*(ai=Q-aw);N+=(ac.g=(X=O[at+1]))*ai;ad+=(ac.b=(Z=O[at+2]))*ai;aj+=R;ao+=X;W+=Z;ac=ac.next}av=ah;al=P;for(an=0;an<j;an++){O[Y]=(M*aa)>>L;O[Y+1]=(N*aa)>>L;O[Y+2]=(ad*aa)>>L;M-=T;N-=af;ad-=ab;T-=av.r;af-=av.g;ab-=av.b;at=(S+((at=an+ap+1)<U?at:U))<<2;aj+=(av.r=O[at]);ao+=(av.g=O[at+1]);W+=(av.b=O[at+2]);M+=aj;N+=ao;ad+=W;av=av.next;T+=(R=al.r);af+=(X=al.g);ab+=(Z=al.b);aj-=R;ao-=X;W-=Z;al=al.next;Y+=4}S+=j}for(an=0;an<j;an++){ao=W=aj=N=ad=M=0;Y=an<<2;T=Q*(R=O[Y]);af=Q*(X=O[Y+1]);ab=Q*(Z=O[Y+2]);M+=aq*R;N+=aq*X;ad+=aq*Z;ac=ah;for(aw=0;aw<Q;aw++){ac.r=R;ac.g=X;ac.b=Z;ac=ac.next}V=j;for(aw=1;aw<=ap;aw++){Y=(V+an)<<2;M+=(ac.r=(R=O[Y]))*(ai=Q-aw);N+=(ac.g=(X=O[Y+1]))*ai;ad+=(ac.b=(Z=O[Y+2]))*ai;aj+=R;ao+=X;W+=Z;ac=ac.next;if(aw<ar){V+=j}}Y=an;av=ah;al=P;for(am=0;am<K;am++){at=Y<<2;O[at]=(M*aa)>>L;O[at+1]=(N*aa)>>L;O[at+2]=(ad*aa)>>L;M-=T;N-=af;ad-=ab;T-=av.r;af-=av.g;ab-=av.b;at=(an+(((at=am+Q)<ar?at:ar)*j))<<2;M+=(aj+=(av.r=O[at]));N+=(ao+=(av.g=O[at+1]));ad+=(W+=(av.b=O[at+2]));av=av.next;T+=(R=al.r);af+=(X=al.g);ab+=(Z=al.b);aj-=R;ao-=X;W-=Z;al=al.next;Y+=j}}az.putImageData(au,ag,ae);return true}function g(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blur(r,p,c){var h=jQuery;var o=h(this);var n=h("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(c);var b=!r.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(b){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(m){b=0}}var d;function k(s,e,t){wowAnimate(s.css({visibility:"visible"}),{opacity:0},{opacity:1},e,t)}function i(s,e,t){wowAnimate(s,{opacity:1},{opacity:0},e,t)}var l;this.go=function(e,s){if(l){return -1}l=1;var w=h(p.get(s)),u=h(p.get(e)),x={width:w.width(),height:w.height(),marginTop:w.css("marginTop"),marginLeft:w.css("marginLeft")};var v;if(b){if(!d){d='<canvas width="'+x.width+'" height="'+x.height+'"/>';d=h(d+d).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(n)}d.css(x).attr({width:x.width,height:x.height});v=g(w,x,30,d.get(0))}if(b&&v){var t=g(u,x,30,d.get(1));k(v,r.duration/3,function(){c.find(".ws_list").css({visibility:"hidden"});i(v,r.duration/6);k(t,r.duration/6,function(){v.css({visibility:"hidden"});c.find(".ws_list").css({visibility:"visible"});o.trigger("effectEnd",{delay:r.duration/2});i(t,r.duration/2,function(){l=0})})})}else{b=0;v=g(w,x,8);v.fadeIn(r.duration/3,"linear",function(){o.trigger("effectEnd",{delay:r.duration/3});v.fadeOut(r.duration/3,"linear",function(){v.remove();l=0})})}};function g(z,v,w,s){var C=(parseInt(z.parent().css("z-index"))||0)+1;if(b){var F=s.getContext("2d");F.drawImage(z.get(0),0,0,v.width,v.height);if(!j(F,0,0,s.width,s.height,w)){return 0}return h(s)}var G=h("<div></div>").css({position:"absolute","z-index":C,left:0,top:0,display:"none"}).css(v).appendTo(n);var E=(Math.sqrt(5)+1)/2;var t=1-E/2;for(var u=0;t*u<w;u++){var A=Math.PI*E*u;var e=(t*u+1);var D=e*Math.cos(A);var B=e*Math.sin(A);h(document.createElement("img")).attr("src",z.attr("src")).css({opacity:1/(u/1.8+1),position:"absolute","z-index":C,left:Math.round(D)+"px",top:Math.round(B)+"px",width:"100%",height:"100%"}).appendTo(G)}return G}var q=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var a=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function j(aj,R,P,s,t,aa){if(isNaN(aa)||aa<1){return}aa|=0;var ae;try{ae=aj.getImageData(R,P,s,t)}catch(ai){console.log("error:unable to access image data: "+ai);return false}var z=ae.data;var Y,X,ag,ad,G,J,D,v,w,O,E,Q,M,U,Z,H,C,I,K,T;var ah=aa+aa+1;var V=s<<2;var F=s-1;var ac=t-1;var B=aa+1;var ab=B*(B+1)/2;var S=new f();var N=S;for(ag=1;ag<ah;ag++){N=N.next=new f();if(ag==B){var A=N}}N.next=S;var af=null;var W=null;D=J=0;var L=q[aa];var u=a[aa];for(X=0;X<t;X++){U=Z=H=v=w=O=0;E=B*(C=z[J]);Q=B*(I=z[J+1]);M=B*(K=z[J+2]);v+=ab*C;w+=ab*I;O+=ab*K;N=S;for(ag=0;ag<B;ag++){N.r=C;N.g=I;N.b=K;N=N.next}for(ag=1;ag<B;ag++){ad=J+((F<ag?F:ag)<<2);v+=(N.r=(C=z[ad]))*(T=B-ag);w+=(N.g=(I=z[ad+1]))*T;O+=(N.b=(K=z[ad+2]))*T;U+=C;Z+=I;H+=K;N=N.next}af=S;W=A;for(Y=0;Y<s;Y++){z[J]=(v*L)>>u;z[J+1]=(w*L)>>u;z[J+2]=(O*L)>>u;v-=E;w-=Q;O-=M;E-=af.r;Q-=af.g;M-=af.b;ad=(D+((ad=Y+aa+1)<F?ad:F))<<2;U+=(af.r=z[ad]);Z+=(af.g=z[ad+1]);H+=(af.b=z[ad+2]);v+=U;w+=Z;O+=H;af=af.next;E+=(C=W.r);Q+=(I=W.g);M+=(K=W.b);U-=C;Z-=I;H-=K;W=W.next;J+=4}D+=s}for(Y=0;Y<s;Y++){Z=H=U=w=O=v=0;J=Y<<2;E=B*(C=z[J]);Q=B*(I=z[J+1]);M=B*(K=z[J+2]);v+=ab*C;w+=ab*I;O+=ab*K;N=S;for(ag=0;ag<B;ag++){N.r=C;N.g=I;N.b=K;N=N.next}G=s;for(ag=1;ag<=aa;ag++){J=(G+Y)<<2;v+=(N.r=(C=z[J]))*(T=B-ag);w+=(N.g=(I=z[J+1]))*T;O+=(N.b=(K=z[J+2]))*T;U+=C;Z+=I;H+=K;N=N.next;if(ag<ac){G+=s}}J=Y;af=S;W=A;for(X=0;X<t;X++){ad=J<<2;z[ad]=(v*L)>>u;z[ad+1]=(w*L)>>u;z[ad+2]=(O*L)>>u;v-=E;w-=Q;O-=M;E-=af.r;Q-=af.g;M-=af.b;ad=(Y+(((ad=X+B)<ac?ad:ac)*s))<<2;v+=(U+=(af.r=z[ad]));w+=(Z+=(af.g=z[ad+1]));O+=(H+=(af.b=z[ad+2]));af=af.next;E+=(C=W.r);Q+=(I=W.g);M+=(K=W.b);U-=C;Z-=I;H-=K;W=W.next;J+=s}}aj.putImageData(ae,R,P);return true}function f(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_slices(k,h,i){var b=jQuery;var f=b(this);function g(q,p,o,m,l,n){if(k.support.transform){if(p.top){p.translate=[0,p.top||0,0]}if(o.top){o.translate=[0,o.top||0,0]}delete p.top;delete o.top}wowAnimate(q,p,o,m,l,"swing",n)}var e=function(r,x){var q=b.extend({},{effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,container:null,onEffectEnd:0},x);var t={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",stop:false};var o=b(r);o.data("wow:vars",t);if(!/absolute|relative/.test(o.css("position"))){o.css("position","relative")}var m=x.container||o;var p=o.children();t.totalSlides=p.length;if(q.startSlide>0){if(q.startSlide>=t.totalSlides){q.startSlide=t.totalSlides-1}t.currentSlide=q.startSlide}if(b(p[t.currentSlide]).is("img")){t.currentImage=b(p[t.currentSlide])}else{t.currentImage=b(p[t.currentSlide]).find("img:first")}if(b(p[t.currentSlide]).is("a")){b(p[t.currentSlide]).css("display","block")}for(var s=0;s<q.slices;s++){var w=Math.round(m.width()/q.slices);var v=b('<div class="wow-slice"></div>').css({left:w*s+"px",overflow:"hidden",width:((s==q.slices-1)?(m.width()-(w*s)):w)+"px",position:"absolute"}).appendTo(m);b("<img>").css({position:"absolute",left:0,top:0,transform:"translate3d(0,0,0)"}).appendTo(v)}var n=0;this.sliderRun=function(y,z){if(t.busy){return false}q.effect=z||q.effect;t.currentSlide=y-1;u(o,p,q,false);return true};var l=function(){if(q.onEffectEnd){q.onEffectEnd(t.currentSlide)}m.hide();b(".wow-slice",m).css({transition:"",transform:""});t.busy=0};var u=function(y,z,C,E){var F=y.data("wow:vars");if((!F||F.stop)&&!E){return false}F.busy=1;F.currentSlide++;if(F.currentSlide==F.totalSlides){F.currentSlide=0}if(F.currentSlide<0){F.currentSlide=(F.totalSlides-1)}F.currentImage=b(z[F.currentSlide]);if(!F.currentImage.is("img")){F.currentImage=F.currentImage.find("img:first")}var A=b(h[F.currentSlide]);A={width:A.width(),heiht:A.height(),marginTop:A.css("marginTop"),marginLeft:A.css("marginLeft")};b(".wow-slice",m).each(function(J){var L=b(this),I=b("img",L);var K=Math.round(m.width()/C.slices);I.width(m.width());I.attr("src",F.currentImage.attr("src"));I.css({left:-K*J+"px"}).css(A);L.css({height:"100%",opacity:0,left:K*J,width:((J==C.slices-1)?(m.width()-(K*J)):K)})});m.show();if(C.effect=="random"){var G=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDownRight","sliceUpDownLeft","fold","fade");F.randAnim=G[Math.floor(Math.random()*(G.length+1))];if(F.randAnim==undefined){F.randAnim="fade"}}if(C.effect.indexOf(",")!=-1){var G=C.effect.split(",");F.randAnim=b.trim(G[Math.floor(Math.random()*G.length)])}if(C.effect=="sliceDown"||C.effect=="sliceDownRight"||F.randAnim=="sliceDownRight"||C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"-100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUp"||C.effect=="sliceUpRight"||F.randAnim=="sliceUpRight"||C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUpDown"||C.effect=="sliceUpDownRight"||F.randAnim=="sliceUpDownRight"||C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:((I%2)?"-":"")+"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fold"||F.randAnim=="fold"){var B=0;var H=b(".wow-slice",m);var D=H.width();H.each(function(I){g(b(this),{width:0,opacity:0},{width:D,opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fade"||F.randAnim=="fade"){var H=b(".wow-slice",m);b(".wow-slice",m).each(function(I){b(this).css("height","100%");b(this).animate({opacity:"1.0"},(C.animSpeed*2),(I==C.slices-1)?l:0)})}}}}}}};b.fn._reverse=[].reverse;var a=b("li",i);var c=b("ul",i);var d=b("<div>").addClass("ws_effect ws_slices").css({left:0,top:0,"z-index":8,overflow:"hidden",width:"100%",height:"100%",position:"absolute"}).appendTo(i);var j=new e(c,{keyboardNav:false,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:k.duration,startSlide:k.startSlide,container:d,onEffectEnd:function(l){f.trigger("effectEnd")}});this.go=function(m,l){var n=j.sliderRun(m);if(k.fadeOut){c.fadeOut(k.duration)}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_basic_linear(j,g,a){var c=jQuery;var f=c(this);var e=a.find(".ws_list");var i=c("<div>").addClass("ws_effect ws_basic_linear").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(a);var b=c("<div>").css({position:"absolute",display:"none","z-index":2,width:"200%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(i);var h=c("<div>").css({position:"absolute",left:"auto",top:"auto",width:"50%",height:"100%",overflow:"hidden"}),d=h.clone();b.append(h,d);this.go=function(k,n,m){b.stop(1,1);if(m==undefined){m=(!!((k-n+1)%g.length)^j.revers?"left":"right")}else{m=m?"left":"right"}var o=c(g[n]);var l={width:o.width()||j.width,height:o.height()||j.height};o.clone().css(l).appendTo(h).css(m,0);c(g[k]).clone().css(l).appendTo(d).show();if(m=="right"){h.css("left","50%");d.css("left",0)}else{h.css("left",0);d.css("left","50%")}var q={},p={};q[m]=0;p[m]=-a.width();if(j.support.transform){if(m=="right"){q.left=q.right;p.left=-p.right}q={translate:[q.left,0,0]};p={translate:[p.left,0,0]}}e.hide();wowAnimate(b.css({left:"auto",right:"auto",top:0}).css(m,0).show(),q,p,j.duration,"easeInOutExpo",function(){f.trigger("effectEnd");b.hide().find("div").html("")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fly(c,a,b){var e=jQuery;var f=e(this);var h={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};var d=b.find(".ws_list");var g=e("<div>").addClass("ws_effect ws_fly").css(h).css({overflow:"visible"}).appendTo(b);this.go=function(p,m,l){if(l==undefined){l=!!c.revers}else{l=!l}var k=-(c.distance||g.width()/4),n=Math.min(-k,Math.max(0,e(window).width()-g.offset().left-g.width())),i=(l?n:k),q=(l?k:n);var j=e(a.get(m));j={width:j.width(),height:j.height()};var r=e("<div>").css(h).css({"z-index":1,overflow:"hidden"}).html(e(a.get(m)).clone().css(j)).appendTo(g);var o=e("<div>").css(h).css({"z-index":3,overflow:"hidden"}).html(e(a.get(p)).clone().css(j)).appendTo(g).show();wowAnimate(o,{opacity:0},{opacity:1},c.duration);wowAnimate(o,{left:i},{left:0},2*c.duration/3);d.hide();wowAnimate(r,{left:0,opacity:1},{left:q,opacity:0},2*c.duration/3,c.duration/3,function(){r.remove();f.trigger("effectEnd");o.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutOneBounce:function(e,i,c,a,d,g){var j=0.8;var b=0.2;var f=j*j;if(i<0.0001){return 0}else{if(i<j){return i*i/f}else{return 1-b*b+(i-j-b)*(i-j-b)}}},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}}});function ws_page(c,b,a){var e=jQuery;var h=c.angle||17;var g=e(this);var f=e("<div>").addClass("ws_effect ws_page").css({position:"absolute",width:"100%",height:"100%",top:"0%",overflow:"hidden"});var d=a.find(".ws_list");f.hide().appendTo(a);this.go=function(l,j){function o(){f.find("div").stop(1,1);f.hide();f.empty()}o();d.hide();var k=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden","z-index":9}).append(e(b.get(l)).clone()).appendTo(f);var i=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",outline:"1px solid transparent","z-index":10,"transform-origin":"top left","backface-visibility":"hidden"}).append(e(b.get(j)).clone()).appendTo(f);f.show();if(c.responsive<3){k.find("img").css("width","100%");i.find("img").css("width","100%")}var q=i;var p=q.width(),m=q.height();var n=!document.addEventListener;wowAnimate(q,{rotate:0},{rotate:h},n?0:2*c.duration/3,"easeOutOneBounce",function(){wowAnimate(q,{top:0},{top:"100%"},(n?2:1)*c.duration/3)});wowAnimate(k,{top:"-100%"},{top:"-30%"},n?0:c.duration/2,function(){wowAnimate(k,{top:"-30%"},{top:0},(n?2:1)*c.duration/2,"easeOutBounce",function(){q.hide();o();g.trigger("effectEnd")})})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"seven,blur,slices,basic_linear,fly,page",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:480,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:3,fullScreen:false,gestures:2,onBeforeStep:0,images:0});