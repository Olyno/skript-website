import{S as t,i as e,s as r,e as s,t as a,c as o,a as l,b as c,d as i,f as n,g as h,h as u,j as d,k as f,l as p,m,n as v,o as g,p as y,q as k,r as E,u as b,v as $,w,x as I,y as D,z as S,A as V,B as C,C as x,D as A,E as R,F as T,G as P,H as L,I as G}from"./client.2cdcb56c.js";import{s as B}from"./utils.af8da1fa.js";function O(t){let e,r;return{c(){e=s("p"),r=a(t[0]),this.h()},l(s){e=o(s,"P",{class:!0,style:!0});var a=l(e);r=c(a,t[0]),a.forEach(i),this.h()},h(){n(e,"class","card-header-title"),h(e,"color",t[1].secondaryColor)},m(t,s){u(t,e,s),d(e,r)},p(t,s){1&s&&f(r,t[0]),2&s&&h(e,"color",t[1].secondaryColor)},d(t){t&&i(e)}}}function F(t){let e,r,a,c,f,b=t[0]&&O(t);const $=t[3].default,w=p($,t,t[2],null);return{c(){e=s("div"),r=s("header"),b&&b.c(),a=m(),c=s("div"),w&&w.c(),this.h()},l(t){e=o(t,"DIV",{class:!0,style:!0});var s=l(e);r=o(s,"HEADER",{class:!0});var n=l(r);b&&b.l(n),n.forEach(i),a=v(s),c=o(s,"DIV",{class:!0});var h=l(c);w&&w.l(h),h.forEach(i),s.forEach(i),this.h()},h(){n(r,"class","card-header"),n(c,"class","card-content"),n(e,"class","card"),h(e,"background-color",t[1].primaryColor),h(e,"color",t[1].secondaryColor)},m(t,s){u(t,e,s),d(e,r),b&&b.m(r,null),d(e,a),d(e,c),w&&w.m(c,null),f=!0},p(t,[s]){t[0]?b?b.p(t,s):(b=O(t),b.c(),b.m(r,null)):b&&(b.d(1),b=null),w&&w.p&&4&s&&w.p(g($,t,t[2],null),y($,t[2],s,null)),(!f||2&s)&&h(e,"background-color",t[1].primaryColor),(!f||2&s)&&h(e,"color",t[1].secondaryColor)},i(t){f||(k(w,t),f=!0)},o(t){E(w,t),f=!1},d(t){t&&i(e),b&&b.d(),w&&w.d(t)}}}function H(t,e,r){let s;b(t,$,t=>r(1,s=t));let{title:a}=e,{$$slots:o={},$$scope:l}=e;return t.$set=t=>{"title"in t&&r(0,a=t.title),"$$scope"in t&&r(2,l=t.$$scope)},[a,s,l,o]}class N extends t{constructor(t){super(),e(this,t,H,F,r,{title:0})}}function j(t){let e,r,p,g,y,k,E,b,$,I,D,S,V,C,x=t[0].name+"",A=t[0].roles.join("\n")+"";return{c(){e=s("div"),r=s("img"),g=m(),y=s("div"),k=s("div"),E=s("div"),b=s("a"),$=s("strong"),I=a(x),S=m(),V=s("p"),C=a(A),this.h()},l(t){e=o(t,"DIV",{class:!0,style:!0});var s=l(e);r=o(s,"IMG",{src:!0,alt:!0,class:!0}),g=v(s),y=o(s,"DIV",{class:!0});var a=l(y);k=o(a,"DIV",{class:!0});var n=l(k);E=o(n,"DIV",{class:!0});var h=l(E);b=o(h,"A",{href:!0,class:!0});var u=l(b);$=o(u,"STRONG",{});var d=l($);I=c(d,x),d.forEach(i),u.forEach(i),h.forEach(i),n.forEach(i),S=v(a),V=o(a,"P",{});var f=l(V);C=c(f,A),f.forEach(i),a.forEach(i),s.forEach(i),this.h()},h(){r.src!==(p="https://www.github.com/"+t[0].name+".png")&&n(r,"src",p),n(r,"alt","Developer Profile Image"),n(r,"class","card-image svelte-1jq6a90"),n(b,"href",D="https://www.github.com/"+t[0].name),n(b,"class","subtitle"),n(E,"class","media-content has-text-centered"),n(k,"class","media"),n(y,"class","card-content"),n(e,"class","card"),h(e,"background-color",t[1].primaryColor),h(e,"color",t[1].secondaryColor)},m(t,s){u(t,e,s),d(e,r),d(e,g),d(e,y),d(y,k),d(k,E),d(E,b),d(b,$),d($,I),d(y,S),d(y,V),d(V,C)},p(t,[s]){1&s&&r.src!==(p="https://www.github.com/"+t[0].name+".png")&&n(r,"src",p),1&s&&x!==(x=t[0].name+"")&&f(I,x),1&s&&D!==(D="https://www.github.com/"+t[0].name)&&n(b,"href",D),1&s&&A!==(A=t[0].roles.join("\n")+"")&&f(C,A),2&s&&h(e,"background-color",t[1].primaryColor),2&s&&h(e,"color",t[1].secondaryColor)},i:w,o:w,d(t){t&&i(e)}}}function W(t,e,r){let s;b(t,$,t=>r(1,s=t));let{developer:a}=e;return t.$set=t=>{"developer"in t&&r(0,a=t.developer)},[a,s]}class q extends t{constructor(t){super(),e(this,t,W,j,r,{developer:0})}}var U=[{name:"bensku",roles:["Skript maintainer","Skript Developer"]},{name:"FranKusmiruk",roles:["Skript Developer"]},{name:"Pikachu920",roles:["Skript Developer"]},{name:"Nicofisi",roles:["Skript Developer"]},{name:"TheBentoBox",roles:["Issue tracker manager","Aliases developer"]}];const{document:_}=L;function Y(t,e,r){const s=t.slice();return s[4]=e[r],s}function M(t){let e,r,h,f,p;return{c(){e=s("div"),r=s("article"),h=s("div"),f=s("p"),p=a("Can't get the latest version of Skript. Please refresh the page."),this.h()},l(t){e=o(t,"DIV",{class:!0});var s=l(e);r=o(s,"ARTICLE",{class:!0});var a=l(r);h=o(a,"DIV",{class:!0});var n=l(h);f=o(n,"P",{});var u=l(f);p=c(u,"Can't get the latest version of Skript. Please refresh the page."),u.forEach(i),n.forEach(i),a.forEach(i),s.forEach(i),this.h()},h(){n(h,"class","message-body"),n(r,"class","message is-danger"),n(e,"class","small-section")},m(t,s){u(t,e,s),d(e,r),d(r,h),d(h,f),d(f,p)},d(t){t&&i(e)}}}function z(t){let e,r,h,f,p;return{c(){e=s("p"),r=a("Found something incorrect in this documentation? Please report\n\t\t\t\t\t\t\t\t\t\tit to the "),h=s("a"),f=a("issue tracker"),p=a("."),this.h()},l(t){e=o(t,"P",{class:!0});var s=l(e);r=c(s,"Found something incorrect in this documentation? Please report\n\t\t\t\t\t\t\t\t\t\tit to the "),h=o(s,"A",{href:!0});var a=l(h);f=c(a,"issue tracker"),a.forEach(i),p=c(s,"."),s.forEach(i),this.h()},h(){n(h,"href","https://github.com/bensku/Skript/issues"),n(e,"class","content")},m(t,s){u(t,e,s),d(e,r),d(e,h),d(h,f),d(e,p)},d(t){t&&i(e)}}}function K(t){let e,r,h,f,p;return{c(){e=s("p"),r=a("Currently, the only documentation is generated automatically. It would be\n\t\t\t\t\t\t\t\t\t\tnice to have some hand-written content such as tutorials on the docs as well. For example, currently we don't have\n\t\t\t\t\t\t\t\t\t\ta tutorial on how to use loops here; This makes it harder for newcomers to learn.\n\t\t\t\t\t\t\t\t\t\tCheck "),h=s("a"),f=a("this issue"),p=a(" for\n\t\t\t\t\t\t\t\t\t\tmore details and if you're interested in helping out."),this.h()},l(t){e=o(t,"P",{class:!0});var s=l(e);r=c(s,"Currently, the only documentation is generated automatically. It would be\n\t\t\t\t\t\t\t\t\t\tnice to have some hand-written content such as tutorials on the docs as well. For example, currently we don't have\n\t\t\t\t\t\t\t\t\t\ta tutorial on how to use loops here; This makes it harder for newcomers to learn.\n\t\t\t\t\t\t\t\t\t\tCheck "),h=o(s,"A",{href:!0});var a=l(h);f=c(a,"this issue"),a.forEach(i),p=c(s," for\n\t\t\t\t\t\t\t\t\t\tmore details and if you're interested in helping out."),s.forEach(i),this.h()},h(){n(h,"href","https://github.com/bensku/Skript/issues/611"),n(e,"class","content")},m(t,s){u(t,e,s),d(e,r),d(e,h),d(h,f),d(e,p)},d(t){t&&i(e)}}}function J(t){let e,r,h,f,p,g,y,k,E,b,$,w,I,D,S,V,C,x,A,R;return{c(){e=s("div"),r=s("span"),h=s("i"),f=m(),p=s("strong"),g=a("View source codes on GitHub"),y=m(),k=s("br"),E=s("br"),b=m(),$=s("div"),w=s("div"),I=s("strong"),D=s("a"),S=a("Skript"),V=m(),C=s("div"),x=s("strong"),A=s("a"),R=a("Website"),this.h()},l(t){e=o(t,"DIV",{class:!0});var s=l(e);r=o(s,"SPAN",{});var a=l(r);h=o(a,"I",{class:!0}),l(h).forEach(i),f=v(a),p=o(a,"STRONG",{});var n=l(p);g=c(n,"View source codes on GitHub"),n.forEach(i),a.forEach(i),y=v(s),k=o(s,"BR",{}),E=o(s,"BR",{}),b=v(s),$=o(s,"DIV",{class:!0});var u=l($);w=o(u,"DIV",{class:!0});var d=l(w);I=o(d,"STRONG",{});var m=l(I);D=o(m,"A",{href:!0});var T=l(D);S=c(T,"Skript"),T.forEach(i),m.forEach(i),d.forEach(i),V=v(u),C=o(u,"DIV",{class:!0});var P=l(C);x=o(P,"STRONG",{});var L=l(x);A=o(L,"A",{href:!0});var G=l(A);R=c(G,"Website"),G.forEach(i),L.forEach(i),P.forEach(i),u.forEach(i),s.forEach(i),this.h()},h(){n(h,"class","fab fa-github"),n(D,"href","https://github.com/SkriptLang/Skript"),n(w,"class","level-item"),n(A,"href","https://github.com/Olyno/skript-website"),n(C,"class","level-item"),n($,"class","level"),n(e,"class","content has-text-centered")},m(t,s){u(t,e,s),d(e,r),d(r,h),d(r,f),d(r,p),d(p,g),d(e,y),d(e,k),d(e,E),d(e,b),d(e,$),d($,w),d(w,I),d(I,D),d(D,S),d($,V),d($,C),d(C,x),d(x,A),d(A,R)},d(t){t&&i(e)}}}function Q(t){let e,r,a;const c=new q({props:{developer:t[4]}});return{c(){e=s("div"),I(c.$$.fragment),r=m(),this.h()},l(t){e=o(t,"DIV",{class:!0});var s=l(e);D(c.$$.fragment,s),r=v(s),s.forEach(i),this.h()},h(){n(e,"class","column is-3")},m(t,s){u(t,e,s),S(c,e,null),d(e,r),a=!0},p:w,i(t){a||(k(c.$$.fragment,t),a=!0)},o(t){E(c.$$.fragment,t),a=!1},d(t){t&&i(e),V(c)}}}function X(t){let e,r,p,g,y,b,$,w,T,P,L,B,O,F,H,j,W,q,X,Z,tt,et,rt,st,at,ot,lt,ct,it,nt,ht,ut,dt,ft,pt,mt,vt,gt,yt,kt,Et,bt,$t,wt,It,Dt,St,Vt,Ct,xt,At,Rt,Tt,Pt,Lt,Gt,Bt,Ot,Ft,Ht,Nt,jt,Wt,qt,Ut,_t,Yt,Mt,zt,Kt,Jt,Qt,Xt,Zt,te,ee,re,se,ae,oe,le,ce,ie=("error"===t[0]?"Latest":t[0])+"",ne="error"===t[0]&&M();const he=new N({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),ue=new N({props:{title:"Looking for docs author!",$$slots:{default:[K]},$$scope:{ctx:t}}}),de=new N({props:{withoutTitle:!0,$$slots:{default:[J]},$$scope:{ctx:t}}});let fe=U,pe=[];for(let e=0;e<fe.length;e+=1)pe[e]=Q(Y(t,fe,e));const me=t=>E(pe[t],1,1,()=>{pe[t]=null});return{c(){e=m(),r=s("section"),p=s("div"),g=s("div"),y=s("div"),b=s("img"),w=m(),T=s("h1"),P=s("strong"),L=a("Documentation"),B=m(),O=s("div"),F=s("div"),H=s("div"),j=s("div"),ne&&ne.c(),W=m(),q=s("div"),X=s("div"),Z=s("div"),tt=s("div"),et=s("p"),rt=s("strong"),st=a("Download latest"),at=m(),ot=s("div"),lt=s("a"),ct=a(ie),it=m(),nt=s("div"),ht=s("p"),ut=a("Skript is (surprise, surprise) a scripting plugin for Bukkit platform. It\n\t\t\t\t\t\t\t\t\tis easy to use for simple tasks, but yet you can create really complex things\n\t\t\t\t\t\t\t\t\twith it. The syntax of Skript is close to English, but it is still not magic.\n\t\t\t\t\t\t\t\t\tWhile for simple tasks you might succeed with experimentation, for anything\n\t\t\t\t\t\t\t\t\tmore complex you will need some guidance."),dt=m(),ft=s("div"),pt=s("p"),mt=a("This is the Skript documentation. You will find all supported features of Skript\n\t\t\t\t\t\t\t\t\tplugin here. You might also find some useful examples, in case you need more\n\t\t\t\t\t\t\t\t\tthan what was shipped with Skript distribution. We do not currently have\n\t\t\t\t\t\t\t\t\ttutorials here, but you can find good ones using whatever search engine you prefer."),vt=m(),gt=s("div"),yt=s("div"),kt=s("div"),I(he.$$.fragment),Et=m(),bt=s("div"),$t=s("div"),I(ue.$$.fragment),wt=m(),It=s("div"),Dt=s("div"),I(de.$$.fragment),St=m(),Vt=s("div"),Ct=s("div"),xt=s("h1"),At=a("Relevant Resources"),Rt=m(),Tt=s("ul"),Pt=s("li"),Lt=s("a"),Gt=a("SkUnity Forums"),Bt=m(),Ot=s("li"),Ft=s("a"),Ht=a("Original Skript at BukkitDev"),Nt=a(" (inactive)"),jt=m(),Wt=s("li"),qt=s("a"),Ut=a("Addon Releases @SkUnity"),_t=m(),Yt=s("li"),Mt=s("a"),zt=a("Skript Chat Discord Invite"),Kt=m(),Jt=s("li"),Qt=s("a"),Xt=a("SkriptHub"),Zt=m(),te=s("div"),ee=s("div"),re=s("h1"),se=a("Developers"),ae=m(),oe=s("div");for(let t=0;t<pe.length;t+=1)pe[t].c();this.h()},l(t){C('[data-svelte="svelte-hqh1yq"]',_.head).forEach(i),e=v(t),r=o(t,"SECTION",{class:!0,style:!0});var s=l(r);p=o(s,"DIV",{class:!0});var a=l(p);g=o(a,"DIV",{class:!0});var n=l(g);y=o(n,"DIV",{class:!0,style:!0});var h=l(y);b=o(h,"IMG",{class:!0,src:!0,alt:!0,width:!0,style:!0}),w=v(h),T=o(h,"H1",{class:!0,style:!0});var u=l(T);P=o(u,"STRONG",{});var d=l(P);L=c(d,"Documentation"),d.forEach(i),u.forEach(i),h.forEach(i),B=v(n),O=o(n,"DIV",{style:!0});var f=l(O);F=o(f,"DIV",{class:!0});var m=l(F);H=o(m,"DIV",{class:!0});var k=l(H);j=o(k,"DIV",{class:!0});var E=l(j);ne&&ne.l(E),W=v(E),q=o(E,"DIV",{class:!0});var $=l(q);X=o($,"DIV",{class:!0,style:!0});var I=l(X);Z=o(I,"DIV",{class:!0});var S=l(Z);tt=o(S,"DIV",{class:!0,style:!0});var V=l(tt);et=o(V,"P",{});var x=l(et);rt=o(x,"STRONG",{});var A=l(rt);st=c(A,"Download latest"),A.forEach(i),x.forEach(i),V.forEach(i),at=v(S),ot=o(S,"DIV",{class:!0,style:!0});var R=l(ot);lt=o(R,"A",{style:!0,href:!0});var G=l(lt);ct=c(G,ie),G.forEach(i),R.forEach(i),S.forEach(i),I.forEach(i),$.forEach(i),it=v(E),nt=o(E,"DIV",{class:!0});var N=l(nt);ht=o(N,"P",{});var U=l(ht);ut=c(U,"Skript is (surprise, surprise) a scripting plugin for Bukkit platform. It\n\t\t\t\t\t\t\t\t\tis easy to use for simple tasks, but yet you can create really complex things\n\t\t\t\t\t\t\t\t\twith it. The syntax of Skript is close to English, but it is still not magic.\n\t\t\t\t\t\t\t\t\tWhile for simple tasks you might succeed with experimentation, for anything\n\t\t\t\t\t\t\t\t\tmore complex you will need some guidance."),U.forEach(i),N.forEach(i),dt=v(E),ft=o(E,"DIV",{class:!0});var Y=l(ft);pt=o(Y,"P",{});var M=l(pt);mt=c(M,"This is the Skript documentation. You will find all supported features of Skript\n\t\t\t\t\t\t\t\t\tplugin here. You might also find some useful examples, in case you need more\n\t\t\t\t\t\t\t\t\tthan what was shipped with Skript distribution. We do not currently have\n\t\t\t\t\t\t\t\t\ttutorials here, but you can find good ones using whatever search engine you prefer."),M.forEach(i),Y.forEach(i),E.forEach(i),k.forEach(i),vt=v(m),gt=o(m,"DIV",{class:!0});var z=l(gt);yt=o(z,"DIV",{class:!0});var K=l(yt);kt=o(K,"DIV",{class:!0});var J=l(kt);D(he.$$.fragment,J),J.forEach(i),K.forEach(i),Et=v(z),bt=o(z,"DIV",{class:!0});var Q=l(bt);$t=o(Q,"DIV",{class:!0});var le=l($t);D(ue.$$.fragment,le),le.forEach(i),Q.forEach(i),wt=v(z),It=o(z,"DIV",{class:!0});var ce=l(It);Dt=o(ce,"DIV",{class:!0});var fe=l(Dt);D(de.$$.fragment,fe),fe.forEach(i),ce.forEach(i),z.forEach(i),m.forEach(i),St=v(f),Vt=o(f,"DIV",{class:!0});var me=l(Vt);Ct=o(me,"DIV",{class:!0});var ve=l(Ct);xt=o(ve,"H1",{class:!0});var ge=l(xt);At=c(ge,"Relevant Resources"),ge.forEach(i),Rt=v(ve),Tt=o(ve,"UL",{class:!0});var ye=l(Tt);Pt=o(ye,"LI",{});var ke=l(Pt);Lt=o(ke,"A",{href:!0,target:!0});var Ee=l(Lt);Gt=c(Ee,"SkUnity Forums"),Ee.forEach(i),ke.forEach(i),Bt=v(ye),Ot=o(ye,"LI",{});var be=l(Ot);Ft=o(be,"A",{href:!0,target:!0});var $e=l(Ft);Ht=c($e,"Original Skript at BukkitDev"),$e.forEach(i),Nt=c(be," (inactive)"),be.forEach(i),jt=v(ye),Wt=o(ye,"LI",{});var we=l(Wt);qt=o(we,"A",{href:!0,target:!0});var Ie=l(qt);Ut=c(Ie,"Addon Releases @SkUnity"),Ie.forEach(i),we.forEach(i),_t=v(ye),Yt=o(ye,"LI",{});var De=l(Yt);Mt=o(De,"A",{href:!0,target:!0});var Se=l(Mt);zt=c(Se,"Skript Chat Discord Invite"),Se.forEach(i),De.forEach(i),Kt=v(ye),Jt=o(ye,"LI",{});var Ve=l(Jt);Qt=o(Ve,"A",{href:!0,target:!0});var Ce=l(Qt);Xt=c(Ce,"SkriptHub"),Ce.forEach(i),Ve.forEach(i),ye.forEach(i),ve.forEach(i),me.forEach(i),Zt=v(f),te=o(f,"DIV",{class:!0});var xe=l(te);ee=o(xe,"DIV",{class:!0});var Ae=l(ee);re=o(Ae,"H1",{class:!0});var Re=l(re);se=c(Re,"Developers"),Re.forEach(i),ae=v(Ae),oe=o(Ae,"DIV",{class:!0});var Te=l(oe);for(let t=0;t<pe.length;t+=1)pe[t].l(Te);Te.forEach(i),Ae.forEach(i),xe.forEach(i),f.forEach(i),n.forEach(i),a.forEach(i),s.forEach(i),this.h()},h(){_.title="Skript Website",n(b,"class","level-item"),b.src!==($="favicon.png")&&n(b,"src","favicon.png"),n(b,"alt","Skript icon"),n(b,"width","60px"),h(b,"max-width","150px"),n(T,"class","main-title level-item svelte-1uo197m"),h(T,"color",t[1].secondaryColor),n(y,"class","level"),h(y,"margin-top","50px"),n(tt,"class","level-item"),h(tt,"color",t[1].secondaryColor),h(lt,"color","inherit"),n(lt,"href",t[2]),n(ot,"class","level-item button is-rounded"),h(ot,"background-color",t[1].primaryColor),h(ot,"color",t[1].secondaryColor),h(ot,"border-color",t[1].secondaryColor),n(Z,"class","level"),n(X,"class","small-section has-text-centered"),h(X,"background-color",t[1].primaryColor),n(q,"class","section"),n(nt,"class","small-section"),n(ft,"class","small-section"),n(j,"class","special-section svelte-1uo197m"),n(H,"class","column is-7"),n(kt,"class","has-yellow-border svelte-1uo197m"),n(yt,"class","small-section"),n($t,"class","has-yellow-border svelte-1uo197m"),n(bt,"class","small-section"),n(Dt,"class","has-yellow-border svelte-1uo197m"),n(It,"class","small-section"),n(gt,"class","column"),n(F,"class","columns"),n(xt,"class","title"),n(Lt,"href","https://forums.skunity.com"),n(Lt,"target","_blank"),n(Ft,"href","https://dev.bukkit.org/projects/skript"),n(Ft,"target","_blank"),n(qt,"href","https://forums.skunity.com/resources/categories/addons.1/"),n(qt,"target","_blank"),n(Mt,"href","https://discord.gg/V4qFVnh"),n(Mt,"target","_blank"),n(Qt,"href","https://skripthub.net"),n(Qt,"target","_blank"),n(Tt,"class","is-list"),n(Ct,"class","small-section"),n(Vt,"class","section"),n(re,"class","title"),n(oe,"class","columns is-multiline has-text-centered"),n(ee,"class","small-section"),n(te,"class","section"),h(O,"background-color",t[1].secondaryColor),h(O,"color",t[1].primaryColor),n(g,"class","container"),n(p,"class","hero-body"),n(r,"class","hero is-fullheight"),h(r,"background-color",t[1].primaryColor)},m(s,a){u(s,e,a),u(s,r,a),d(r,p),d(p,g),d(g,y),d(y,b),d(y,w),d(y,T),d(T,P),d(P,L),d(g,B),d(g,O),d(O,F),d(F,H),d(H,j),ne&&ne.m(j,null),d(j,W),d(j,q),d(q,X),d(X,Z),d(Z,tt),d(tt,et),d(et,rt),d(rt,st),d(Z,at),d(Z,ot),d(ot,lt),d(lt,ct),d(j,it),d(j,nt),d(nt,ht),d(ht,ut),d(j,dt),d(j,ft),d(ft,pt),d(pt,mt),d(F,vt),d(F,gt),d(gt,yt),d(yt,kt),S(he,kt,null),d(gt,Et),d(gt,bt),d(bt,$t),S(ue,$t,null),d(gt,wt),d(gt,It),d(It,Dt),S(de,Dt,null),d(O,St),d(O,Vt),d(Vt,Ct),d(Ct,xt),d(xt,At),d(Ct,Rt),d(Ct,Tt),d(Tt,Pt),d(Pt,Lt),d(Lt,Gt),d(Tt,Bt),d(Tt,Ot),d(Ot,Ft),d(Ft,Ht),d(Ot,Nt),d(Tt,jt),d(Tt,Wt),d(Wt,qt),d(qt,Ut),d(Tt,_t),d(Tt,Yt),d(Yt,Mt),d(Mt,zt),d(Tt,Kt),d(Tt,Jt),d(Jt,Qt),d(Qt,Xt),d(O,Zt),d(O,te),d(te,ee),d(ee,re),d(re,se),d(ee,ae),d(ee,oe);for(let t=0;t<pe.length;t+=1)pe[t].m(oe,null);le=!0,ce=x(ot,"click",t[3])},p(t,[e]){(!le||2&e)&&h(T,"color",t[1].secondaryColor),"error"===t[0]?ne||(ne=M(),ne.c(),ne.m(j,W)):ne&&(ne.d(1),ne=null),(!le||2&e)&&h(tt,"color",t[1].secondaryColor),(!le||1&e)&&ie!==(ie=("error"===t[0]?"Latest":t[0])+"")&&f(ct,ie),(!le||2&e)&&h(ot,"background-color",t[1].primaryColor),(!le||2&e)&&h(ot,"color",t[1].secondaryColor),(!le||2&e)&&h(ot,"border-color",t[1].secondaryColor),(!le||2&e)&&h(X,"background-color",t[1].primaryColor);const s={};128&e&&(s.$$scope={dirty:e,ctx:t}),he.$set(s);const a={};128&e&&(a.$$scope={dirty:e,ctx:t}),ue.$set(a);const o={};if(128&e&&(o.$$scope={dirty:e,ctx:t}),de.$set(o),0&e){let r;for(fe=U,r=0;r<fe.length;r+=1){const s=Y(t,fe,r);pe[r]?(pe[r].p(s,e),k(pe[r],1)):(pe[r]=Q(s),pe[r].c(),k(pe[r],1),pe[r].m(oe,null))}for(G(),r=fe.length;r<pe.length;r+=1)me(r);A()}(!le||2&e)&&h(O,"background-color",t[1].secondaryColor),(!le||2&e)&&h(O,"color",t[1].primaryColor),(!le||2&e)&&h(r,"background-color",t[1].primaryColor)},i(t){if(!le){k(he.$$.fragment,t),k(ue.$$.fragment,t),k(de.$$.fragment,t);for(let t=0;t<fe.length;t+=1)k(pe[t]);le=!0}},o(t){E(he.$$.fragment,t),E(ue.$$.fragment,t),E(de.$$.fragment,t),pe=pe.filter(Boolean);for(let t=0;t<pe.length;t+=1)E(pe[t]);le=!1},d(t){t&&i(e),t&&i(r),ne&&ne.d(),V(he),V(ue),V(de),R(pe,t),ce()}}}async function Z(t,e){return this.fetch("https://github.com/SkriptLang/Skript/releases/latest/").then(t=>{const e=t.url.split("/");return{latestVersion:e[e.length-1]}}).catch(t=>({latestVersion:"error"}))}function tt(t,e,r){let s;b(t,$,t=>r(1,s=t));let{latestVersion:a}=e;const o="error"!==a?`https://github.com/SkriptLang/Skript/releases/download/${a}/Skript.jar`:"https://github.com/SkriptLang/Skript/releases/latest/";T(async()=>{B()}),P(async()=>{if("error"===a)return document.location.reload(!0)});return t.$set=t=>{"latestVersion"in t&&r(0,a=t.latestVersion)},[a,s,o,()=>window.open(o)]}export default class extends t{constructor(t){super(),e(this,t,tt,X,r,{latestVersion:0})}}export{Z as preload};
