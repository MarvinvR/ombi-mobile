!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{viRw:function(e,i,r){"use strict";r.r(i),r.d(i,"PagesRoutingModule",(function(){return Mt}));var s,a,c,u=r("tyNb"),l=r("F8fz"),h=r("NSnu"),p=r("AUE5"),b=function(t){return t.OFF="off",t.ON="on",t.CURRENT_PASSWORD="current-password",t.EMAIL="email",t.USERNAME="username",t}({}),f=function(t){return t.TEXT="text",t.EMAIL="email",t.PASSWORD="password",t.URL="url",t}({}),d=r("fXoL"),g=r("3Ewt"),v=r("LLt/"),m=r("fPRZ"),y=r("YTkz"),O=r("TEn/"),w=((a=function(){function t(){n(this,t),this.title=""}return o(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=d.Bb({type:a,selectors:[["app-header"]],inputs:{title:"title"},decls:2,vars:1,template:function(t,e){1&t&&(d.Kb(0,"h1"),d.gc(1),d.Jb()),2&t&&(d.xb(1),d.hc(e.title))},styles:["h1[_ngcontent-%COMP%]{margin:55px 0 0 20px;font-size:3em}"]}),a),k=((s=function(){function t(){n(this,t),this.label="",this.autocomplete=b.OFF,this.type=f.TEXT,this.required=!1,this.disabled=!1,this.placeholder="",this.value="",this.valueChange=new d.n}return o(t,[{key:"ngOnInit",value:function(){}},{key:"updateValue",value:function(t){this.value=t,this.valueChange.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=d.Bb({type:s,selectors:[["app-input"]],inputs:{label:"label",autocomplete:"autocomplete",type:"type",required:"required",disabled:"disabled",placeholder:"placeholder",value:"value"},outputs:{valueChange:"valueChange"},decls:4,vars:6,consts:[["position","floating"],[3,"autocomplete","type","required","disabled","value","ionChange"]],template:function(t,e){1&t&&(d.Kb(0,"ion-item"),d.Kb(1,"ion-label",0),d.gc(2),d.Jb(),d.Kb(3,"ion-input",1),d.Sb("ionChange",(function(t){return e.updateValue(t.detail.value)})),d.Jb(),d.Jb()),2&t&&(d.xb(2),d.hc(e.label),d.xb(1),d.Yb("autocomplete",e.autocomplete),d.Yb("type",e.type),d.Yb("required",e.required),d.Yb("disabled",e.disabled),d.Xb("value",e.value))},directives:[O.k,O.l,O.j,O.A],styles:[""]}),s),C=r("ofXK"),M=((c=function(){function t(){n(this,t),this.label="",this.size="default",this.disabled=!1,this.color="primary",this.fill="solid",this.action=new d.n}return o(t,[{key:"ngOnInit",value:function(){}},{key:"handleClick",value:function(t){null==t||t.stopPropagation(),this.action.emit()}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=d.Bb({type:c,selectors:[["app-button"]],inputs:{label:"label",size:"size",disabled:"disabled",color:"color",fill:"fill"},outputs:{action:"action"},decls:2,vars:5,consts:[["expand","block",3,"size","disabled","color","fill","click"]],template:function(t,e){1&t&&(d.Kb(0,"ion-button",0),d.Sb("click",(function(t){return e.handleClick(t)})),d.gc(1),d.Jb()),2&t&&(d.Xb("size",e.size)("disabled",e.disabled)("color",e.color)("fill",e.fill),d.xb(1),d.ic(" ",e.label,"\n"))},directives:[O.d],styles:["ion-button[_ngcontent-%COMP%]{text-transform:capitalize;margin:0}"]}),c);function P(t,e){1&t&&(d.Kb(0,"p"),d.gc(1,"or"),d.Jb())}function x(t,e){if(1&t){var n=d.Lb();d.Kb(0,"app-button",11),d.Sb("action",(function(){return d.bc(n),d.Ub(2).submitWithPlex()})),d.Jb()}if(2&t){var i=d.Ub(2);d.Xb("disabled",!i.hasBaseUrl)}}var q=function(t){return{credentialsContainer:!0,bordered:t}};function S(t,e){if(1&t){var n=d.Lb();d.Kb(0,"div",5),d.Kb(1,"app-input",6),d.Sb("valueChange",(function(t){return d.bc(n),d.Ub().model.username=t})),d.Jb(),d.Kb(2,"app-input",7),d.Sb("valueChange",(function(t){return d.bc(n),d.Ub().model.password=t})),d.Jb(),d.Kb(3,"app-button",8),d.Sb("action",(function(){return d.bc(n),d.Ub().submit()})),d.Jb(),d.fc(4,P,2,0,"p",9),d.fc(5,x,1,1,"app-button",10),d.Jb()}if(2&t){var i=d.Ub();d.Xb("ngClass",d.Zb(9,q,i.hasOauth)),d.xb(1),d.Xb("value",i.model.username)("disabled",!i.hasBaseUrl),d.xb(1),d.Xb("type",i.inputType.PASSWORD)("value",i.model.password)("disabled",!i.hasBaseUrl),d.xb(1),d.Xb("disabled",!i.hasCredentials),d.xb(1),d.Xb("ngIf",i.hasOauth),d.xb(1),d.Xb("ngIf",i.hasOauth)}}var _,I,U,R,A=((_=function(){function t(e,i,o,r){n(this,t),this.credentials=e,this.auth=i,this.toast=o,this.settings=r,this.model={ombiUrl:"",username:"",password:""},this.validUrl=!1,this.hasOauth=!1}return o(t,[{key:"ngOnInit",value:function(){var t=this;this.model.ombiUrl=this.credentials.baseUrl,this.model.username=this.credentials.username,this.model.password=this.credentials.password,this.validUrl=this.settings.get(h.b.URL_IS_VALID),this.hasOauth=this.settings.get(h.b.URL_HAS_OAUTH),this.settings.change.subscribe((function(){t.validUrl=t.settings.get(h.b.URL_IS_VALID),t.hasOauth=t.settings.get(h.b.URL_HAS_OAUTH)}))}},{key:"submit",value:function(){var t=this;this.credentials.username=this.model.username,this.credentials.password=this.model.password,this.credentials.token="",this.auth.fetchToken().then((function(e){return t.toast.show(p.a.SUCCESS,"Successfully signed in as ".concat(t.credentials.name,"!"))})).catch((function(e){return t.toast.show(p.a.ERROR,"Unable to sign in with these credentials")}))}},{key:"submitWithPlex",value:function(){var t=this;this.auth.triggerPlexOauth().then((function(e){return t.toast.show(p.a.SUCCESS,"Successfully signed in as ".concat(t.credentials.name,"!"))})).catch((function(e){return t.toast.show(p.a.ERROR,"Unable to sign in with Plex")}))}},{key:"baseUrlChange",value:function(){var t=this;clearTimeout(this.baseUrlTimeout),this.baseUrlTimeout=setTimeout((function(){t.credentials.baseUrl=t.model.ombiUrl,t.auth.updateAuthConfig()}),500)}},{key:"inputType",get:function(){return f}},{key:"hasBaseUrl",get:function(){return""!=this.model.ombiUrl}},{key:"hasCredentials",get:function(){return""!=this.model.username&&""!=this.model.password&&this.hasBaseUrl}}]),t}()).\u0275fac=function(t){return new(t||_)(d.Hb(g.a),d.Hb(v.a),d.Hb(m.a),d.Hb(y.a))},_.\u0275cmp=d.Bb({type:_,selectors:[["app-config"]],decls:6,vars:3,consts:[["title","Config"],["scrollY","false"],[1,"form"],["label","Ombi Server URL","placeholder","Ombi Server URL",3,"type","value","valueChange","change"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["label","Username","placeholder","Username",3,"value","disabled","valueChange"],["label","Password","placeholder","Password",3,"type","value","disabled","valueChange"],["label","Sign in",3,"disabled","action"],[4,"ngIf"],["class","plex","color","light","label","Sign in with Plex",3,"disabled","action",4,"ngIf"],["color","light","label","Sign in with Plex",1,"plex",3,"disabled","action"]],template:function(t,e){1&t&&(d.Kb(0,"ion-header"),d.Ib(1,"app-header",0),d.Jb(),d.Kb(2,"ion-content",1),d.Kb(3,"div",2),d.Kb(4,"app-input",3),d.Sb("valueChange",(function(t){return e.model.ombiUrl=t}))("change",(function(){return e.baseUrlChange()})),d.Jb(),d.fc(5,S,6,11,"div",4),d.Jb(),d.Jb()),2&t&&(d.xb(4),d.Xb("type",e.inputType.URL)("value",e.model.ombiUrl),d.xb(1),d.Xb("ngIf",e.validUrl))},directives:[O.h,w,O.g,k,C.j,C.h,M],styles:[".form[_ngcontent-%COMP%]{margin-top:15px}.form[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{position:relative;top:20px;padding:0 18px;width:100%;display:inline-block}.credentialsContainer.bordered[_ngcontent-%COMP%]{margin:20px 10px 0;padding:12px 0;border:1px solid grey;border-radius:15px}.credentialsContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;color:grey;margin-bottom:0}.credentialsContainer[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{margin-bottom:12px}.credentialsContainer[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]:last-of-type{margin-top:-7px;margin-bottom:20px}"]}),_),T=function(){function t(e){n(this,t),this.movie=e,this.type=l.f.MOVIE,this.buttons=[]}return o(t,[{key:"disable",value:function(){this.movie.request.requested=!0}},{key:"id",get:function(){return this.movie.id}},{key:"title",get:function(){return this.movie.title}},{key:"description",get:function(){return this.movie.description}},{key:"posterUrl",get:function(){return this.movie.posterUrl}},{key:"tags",get:function(){var t=[];return void 0!==this.requested&&t.push({color:this.available||this.approved?"success":this.requested?"warning":"danger",text:this.available?"Available":this.approved?"Approved":this.requested?"Requested":"Not Requested"}),t.push({color:"primary",text:new Date(this.movie.releaseDate).toLocaleDateString()}),t.push({color:"tertiary",text:this.movie.rating+"/10 \u2605"}),t}},{key:"available",get:function(){return this.movie.available}},{key:"requested",get:function(){var t;return null===(t=this.movie.request)||void 0===t?void 0:t.requested},set:function(t){this.movie.request.requested=t}},{key:"approved",get:function(){var t;return null===(t=this.movie.request)||void 0===t?void 0:t.approved}}]),t}(),J=function(){function t(e){n(this,t),this.tvShow=e,this.type=l.f.TV,this.buttons=[]}return o(t,[{key:"disable",value:function(){this.tvShow.request.requested=!0}},{key:"id",get:function(){return this.tvShow.id}},{key:"title",get:function(){return this.tvShow.title}},{key:"posterUrl",get:function(){return this.tvShow.posterUrl}},{key:"description",get:function(){return this.tvShow.description}},{key:"tags",get:function(){return[{color:this.available||this.approved?"success":this.requested||this.partlyAvailable?"warning":"danger",text:this.available?"Available":this.approved?"Approved":this.requested?"Requested":this.partlyAvailable?"Partly Available":"Not Requested"},{color:"primary",text:new Date(this.tvShow.aired).toLocaleDateString()},{text:this.tvShow.status,color:"warning"},{text:this.tvShow.rating+"/10 \u2605",color:"tertiary"},{color:"tertiary",text:this.tvShow.network}]}},{key:"available",get:function(){return this.tvShow.available}},{key:"partlyAvailable",get:function(){return this.tvShow.partlyAvailable}},{key:"requested",get:function(){return this.tvShow.request.requested},set:function(t){this.tvShow.request.requested=t}},{key:"approved",get:function(){return this.tvShow.request.approved}}]),t}(),K=function(t,e,n){var i,o;return e==l.f.TV?null===(o=null===(i=t.childRequests)||void 0===i?void 0:i[0])||void 0===o?void 0:o[n]:null==t?void 0:t[n]},L=function(e){var n;return(n=Array.prototype).concat.apply(n,t(e)).sort((function(t,e){return e.request.date-t.request.date}))},E=r("hD8V"),X=((I=function(){function t(e,i){n(this,t),this.api=e,this.toast=i}return o(t,[{key:"list",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.f.MOVIE,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l.d.REQUEST_DATE_DESC,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:l.e.NO_FILTER,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:l.c.NO_FILTER;return this.api.get("/Request/".concat(e,"/").concat(n,"/").concat(i,"/").concat(o,"/").concat(r,"/").concat(s),{},{}).then((function(n){return t.format(n.collection,e)}))}},{key:"search",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.f.MOVIE,n=arguments.length>1?arguments[1]:void 0;return this.api.get("/Request/".concat(e,"/search/").concat(n),{},{}).then((function(n){return t.format(n,e)}))}},{key:"request",value:function(t,e){var n=this;return this.api.post("/Request/"+t,{},this.requestBody(t,e)).then((function(e){return n.toast.show(e.isError?p.a.ERROR:p.a.SUCCESS,e.isError?e.errorMessage:"Successfully requested "+t)}))}},{key:"performAction",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.api[t==l.a.APPROVE?"post":"put"]("/Request/".concat(e,"/").concat(t),{},{id:i}).then((function(){return n.toast.show(p.a.SUCCESS,"Successfully ".concat(t==l.a.APPROVE?"approved":"denied"," request"))}))}},{key:"format",value:function(t,e){return t.map((function(t){var n,i,o;return{id:(null==t?void 0:t.theMovieDbId)||(null==t?void 0:t.tvDbId),title:t.title,description:t.overview,posterUrl:t.posterPath,request:{id:t.id,requested:!0,approved:K(t,e,"approved"),denied:K(t,e,"denied"),date:new Date(K(t,e,"requestedDate")),user:{alias:null===(n=K(t,e,"requestedUser"))||void 0===n?void 0:n.alias,email:null===(i=K(t,e,"requestedUser"))||void 0===i?void 0:i.email,name:null===(o=K(t,e,"requestedUser"))||void 0===o?void 0:o.userName}},available:t.childRequests?-1==t.childRequests.map((function(t){return t.available})).indexOf([!0]):t.available,type:e,rating:Math.round(e==l.f.MOVIE?t.voteAverage:t.rating)}}))}},{key:"requestBody",value:function(t,e){return t==l.f.MOVIE?{theMovieDbId:e,languageCode:"en"}:{firstSeason:!1,latestSeason:!1,requestAll:!0,tvDbId:e}}}]),t}()).\u0275fac=function(t){return new(t||I)(d.Ob(E.a),d.Ob(m.a))},I.\u0275prov=d.Db({token:I,factory:I.\u0275fac,providedIn:"root"}),I),D=function(t){return t.POPULAR="popular",t.UPCOMING="upcoming",t.TOP_RATED="toprated",t.NOW_PLAYING="nowplaying",t}({}),V=((U=function(){function t(e){n(this,t),this.api=e,this.movieCache={}}return o(t,[{key:"list",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.POPULAR;return this.api.get("/search/Movie/"+e,{},{}).then(this.format).then((function(e){return t.cacheResults(e)}))}},{key:"search",value:function(t){var e=this;return this.api.post("/search/Movie/",{},{searchTerm:t,languageCode:"en"}).then(this.format).then((function(t){return e.cacheResults(t)}))}},{key:"cache",value:function(t){this.movieCache[t.id]=t}},{key:"cacheResults",value:function(t){var e=this;return t.forEach((function(t){return e.movieCache[t.id]=t})),t}},{key:"format",value:function(t){return t.map((function(t){return{id:t.id,title:t.title,description:t.overview,posterUrl:"https://image.tmdb.org/t/p/w300"+t.posterPath,request:{id:t.requestId,requested:t.requested,approved:t.approved,denied:t.denied},releaseDate:t.releaseDate,available:t.available,rating:Math.round(t.voteAverage)}}))}},{key:"movies",get:function(){return this.movieCache}}]),t}()).\u0275fac=function(t){return new(t||U)(d.Ob(E.a))},U.\u0275prov=d.Db({token:U,factory:U.\u0275fac,providedIn:"root"}),U),B=r("mrSG"),F=function(t){return t.POPULAR="popular",t.TRENDING="trending",t.MOST_WATCHED="mostwatched",t.ANTICIPATED="anticipated",t}({}),H=((R=function(){function t(e){n(this,t),this.api=e,this.showCache={}}return o(t,[{key:"list",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.POPULAR;return this.api.get("/search/Tv/"+e,{},{}).then(this.format).then((function(e){return Promise.all(e.map((function(e){return Object(B.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getInfo(e.id);case 2:if(t.t1=n=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===n;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=n.banner;case 11:return e.posterUrl=t.t2,t.abrupt("return",e);case 13:case"end":return t.stop()}}),t,this)})))})))})).then((function(e){return t.cacheResults(e)}))}},{key:"search",value:function(t){var e=this;return this.api.get("/search/Tv/"+t,{},{}).then(this.format).then((function(t){return Promise.all(t.map((function(t){return Object(B.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInfo(t.id);case 2:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===n;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=n.banner;case 11:return t.posterUrl=e.t2,e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,this)})))})))})).then((function(t){return e.cacheResults(t)}))}},{key:"getImage",value:function(t){return this.api.get("/Images/tv/"+t,{},{})}},{key:"cache",value:function(t){this.showCache[t.id]=t}},{key:"getInfo",value:function(t){return this.api.get("/search/Tv/info/"+t,{},{})}},{key:"cacheResults",value:function(t){var e=this;return t.forEach((function(t){return e.showCache[t.id]=t})),t}},{key:"format",value:function(t){return t.map((function(t){return{id:t.id,title:t.title,description:t.overview,request:{id:t.requestId,requested:t.requested,approved:t.approved,denied:t.denied,type:{all:t.requestAll,firstSeason:t.firstSeason,latestSeason:t.latestSeason},seasons:t.seasonRequests},network:t.network,status:t.status,aired:t.firstAired,available:t.available,partlyAvailable:t.partlyAvailable,rating:Math.round(t.rating)}}))}},{key:"shows",get:function(){return this.showCache}}]),t}()).\u0275fac=function(t){return new(t||R)(d.Ob(E.a))},R.\u0275prov=d.Db({token:R,factory:R.\u0275fac,providedIn:"root"}),R);function N(t,e){if(1&t&&(d.Kb(0,"ion-chip"),d.Kb(1,"ion-label",1),d.gc(2),d.Jb(),d.Jb()),2&t){var n=e.$implicit;d.xb(1),d.Xb("color",n.color),d.xb(1),d.hc(n.text)}}var j,z,Y,$=((Y=function(){function t(){n(this,t),this.tags=[]}return o(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||Y)},Y.\u0275cmp=d.Bb({type:Y,selectors:[["app-tags"]],inputs:{tags:"tags"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["disabled","true",3,"color"]],template:function(t,e){1&t&&d.fc(0,N,3,2,"ion-chip",0),2&t&&d.Xb("ngForOf",e.tags)},directives:[C.i,O.f,O.l],styles:["[_nghost-%COMP%]{overflow-x:scroll;white-space:nowrap;display:block}"]}),Y),W=((z=function(){function t(e,i,o,r,s){n(this,t),this.requests=e,this.route=i,this.router=o,this.movieService=r,this.tvService=s,this.back=new d.n}return o(t,[{key:"ngOnInit",value:function(){var t=this;this.subscription=this.route.paramMap.subscribe((function(e){var n,i,o,r,s=e.get("type"),a=e.get("id");switch(s){case l.b.TV:(null===(n=t.tvService)||void 0===n?void 0:n.shows[a])?t.content=new J(null===(i=t.tvService)||void 0===i?void 0:i.shows[a]):t.router.navigate(["/"]);break;case l.b.MOVIE:(null===(o=t.movieService)||void 0===o?void 0:o.movies[a])?t.content=new T(null===(r=t.movieService)||void 0===r?void 0:r.movies[a]):t.router.navigate(["/"])}}))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"goBack",value:function(){this.back.emit()}},{key:"request",value:function(){this.content.requested=!0,this.requests.request(this.content.type,this.content.id).then()}},{key:"type",get:function(){return this.content.type}},{key:"label",get:function(){return this.content.available?"Available":this.content.requested?"Requested":"Request "+(this.type==l.f.TV?this.type.toUpperCase():this.type)}},{key:"color",get:function(){return this.content.available?"success":this.content.requested?"warning":"success"}}]),t}()).\u0275fac=function(t){return new(t||z)(d.Hb(X),d.Hb(u.a),d.Hb(u.g),d.Hb(V),d.Hb(H))},z.\u0275cmp=d.Bb({type:z,selectors:[["app-content"]],outputs:{back:"back"},decls:18,vars:8,consts:[["translucent","true"],["slot","start"],["default-href","movies",3,"click"],[1,"content"],[1,"header"],[1,"poster",3,"src"],[1,"title"],["fill","outline",3,"disabled","label","color","action"],[1,"details"],[3,"tags"]],template:function(t,e){1&t&&(d.Kb(0,"ion-header",0),d.Kb(1,"ion-toolbar"),d.Kb(2,"ion-buttons",1),d.Kb(3,"ion-back-button",2),d.Sb("click",(function(){return e.goBack()})),d.Jb(),d.Jb(),d.Kb(4,"ion-title"),d.gc(5),d.Jb(),d.Jb(),d.Jb(),d.Kb(6,"ion-content"),d.Kb(7,"div",3),d.Kb(8,"div",4),d.Ib(9,"img",5),d.Kb(10,"div",6),d.Kb(11,"h1"),d.gc(12),d.Jb(),d.Kb(13,"app-button",7),d.Sb("action",(function(){return e.request()})),d.Jb(),d.Jb(),d.Jb(),d.Kb(14,"div",8),d.Ib(15,"app-tags",9),d.Kb(16,"p"),d.gc(17),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&t&&(d.xb(5),d.hc(null==e.content?null:e.content.type),d.xb(4),d.Yb("src",null==e.content?null:e.content.posterUrl,d.dc),d.xb(3),d.hc(null==e.content?null:e.content.title),d.xb(1),d.Xb("disabled",(null==e.content?null:e.content.requested)||(null==e.content?null:e.content.available))("label",e.label)("color",e.color),d.xb(2),d.Xb("tags",null==e.content?null:e.content.tags),d.xb(2),d.hc(null==e.content?null:e.content.description))},directives:[O.h,O.w,O.e,O.b,O.c,O.v,O.g,M,$],styles:["[_nghost-%COMP%]   ion-title[_ngcontent-%COMP%]{text-transform:capitalize}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{margin:10px;font-size:1.2em}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;height:250px;flex-direction:row}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], [_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{height:100%;display:inline-flex}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-grow:1;flex-direction:column;padding-left:10px;justify-content:space-between}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{padding-top:10px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px}"]}),z),G=((j=function(){function t(){n(this,t),this.placeholder="",this.change=new d.n}return o(t,[{key:"ngOnInit",value:function(){}},{key:"updateValue",value:function(t){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.change.emit(t)}),500)}}]),t}()).\u0275fac=function(t){return new(t||j)},j.\u0275cmp=d.Bb({type:j,selectors:[["app-search"]],inputs:{placeholder:"placeholder"},outputs:{change:"change"},decls:1,vars:1,consts:[[3,"placeholder","ionChange"]],template:function(t,e){1&t&&(d.Kb(0,"ion-searchbar",0),d.Sb("ionChange",(function(t){return e.updateValue(t.detail.value)})),d.Jb()),2&t&&d.Xb("placeholder",e.placeholder)},directives:[O.r,O.A],styles:[""]}),j);function Z(t,e){if(1&t){var n=d.Lb();d.Kb(0,"app-button",11),d.Sb("action",(function(){d.bc(n);var t=e.$implicit;return d.Ub(2).performAction(t.action)})),d.Jb()}if(2&t){var i=e.$implicit;d.Xb("label",i.label)("color",i.color)("disabled",i.disabled)}}function Q(t,e){if(1&t&&(d.Kb(0,"div",9),d.fc(1,Z,1,3,"app-button",10),d.Jb()),2&t){var n=d.Ub();d.xb(1),d.Xb("ngForOf",n.content.buttons)}}function tt(t,e){if(1&t&&(d.Kb(0,"div",12),d.Ib(1,"app-tags",13),d.Jb()),2&t){var n=d.Ub();d.xb(1),d.Xb("tags",n.content.tags)}}var et,nt,it=function(t){return{increaseMargin:t,"content-row":!0}},ot=((et=function(){function t(){n(this,t),this.click=new d.n}return o(t,[{key:"ngOnInit",value:function(){}},{key:"performAction",value:function(t){this.content[t==l.a.APPROVE?"approve":"deny"](),this.requestsService.performAction(t,this.content.type,this.content.type==l.f.MOVIE?this.content.requestId:this.content.id).then()}},{key:"hasButtons",get:function(){var t,e;return(null===(e=null===(t=this.content)||void 0===t?void 0:t.buttons)||void 0===e?void 0:e.length)>0}}]),t}()).\u0275fac=function(t){return new(t||et)},et.\u0275cmp=d.Bb({type:et,selectors:[["app-content-row"]],inputs:{content:"content",requestsService:"requestsService"},outputs:{click:"click"},decls:11,vars:8,consts:[[3,"click"],[3,"ngClass"],[1,"content-top"],[1,"poster"],[3,"src"],[1,"info"],[3,"innerHTML"],["class","buttons",4,"ngIf"],["class","content-bottom",4,"ngIf"],[1,"buttons"],["size","default","fill","outline",3,"label","color","disabled","action",4,"ngFor","ngForOf"],["size","default","fill","outline",3,"label","color","disabled","action"],[1,"content-bottom"],[3,"tags"]],template:function(t,e){1&t&&(d.Kb(0,"ion-item",0),d.Sb("click",(function(){return e.click.emit()})),d.Kb(1,"div",1),d.Kb(2,"div",2),d.Kb(3,"div",3),d.Ib(4,"img",4),d.Jb(),d.Kb(5,"div",5),d.Kb(6,"h2"),d.gc(7),d.Jb(),d.Ib(8,"p",6),d.fc(9,Q,2,1,"div",7),d.Jb(),d.Jb(),d.fc(10,tt,2,1,"div",8),d.Jb(),d.Jb()),2&t&&(d.xb(1),d.Xb("ngClass",d.Zb(6,it,e.hasButtons)),d.xb(3),d.Yb("src",e.content.posterUrl,d.dc),d.xb(3),d.hc(e.content.title),d.xb(1),d.Yb("innerHTML",e.content.description,d.cc),d.xb(1),d.Xb("ngIf",e.hasButtons),d.xb(1),d.Xb("ngIf",!e.hasButtons))},directives:[O.k,C.h,C.j,C.i,M,$],styles:[".content-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.content-row.increaseMargin[_ngcontent-%COMP%]{margin-bottom:12px}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]{display:flex;height:190px}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%]{flex:0 0 auto;margin:20px 0 15px;padding-right:10px;height:166px}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;text-align:initial;flex-direction:column;justify-content:space-between;margin-bottom:5px;width:100%}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:.5em;word-wrap:break-word;text-overflow:ellipsis;overflow:hidden;flex-grow:1;margin-bottom:8px;font-size:15px}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p.hasButtons[_ngcontent-%COMP%]{max-height:75px}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-content:right}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{flex-grow:1}.content-row[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]:not(:first-of-type){margin-left:10px}.content-row[_ngcontent-%COMP%]   .content-bottom[_ngcontent-%COMP%]{display:flex;margin:0 0 8px -3px;width:calc(100% - 12px)}"]}),et),rt=["*"],st=((nt=function(){function t(){n(this,t)}return o(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||nt)},nt.\u0275cmp=d.Bb({type:nt,selectors:[["app-list-remark"]],ngContentSelectors:rt,decls:2,vars:0,template:function(t,e){1&t&&(d.Wb(),d.Kb(0,"p"),d.Vb(1),d.Jb())},styles:["p[_ngcontent-%COMP%]{text-align:center;color:grey;font-style:italic}"]}),nt);function at(t,e){1&t&&d.Ib(0,"ion-progress-bar",7)}function ct(t,e){if(1&t){var n=d.Lb();d.Kb(0,"app-content-row",8),d.Sb("click",(function(){d.bc(n);var t=e.$implicit;return d.Ub().showContent(t)})),d.Jb()}if(2&t){var i=e.$implicit,o=d.Ub();d.Xb("content",o.content(i))}}function ut(t,e){1&t&&(d.Kb(0,"app-list-remark"),d.gc(1,"No Movies Found"),d.Jb())}var lt,ht=((lt=function(){function t(e,i){n(this,t),this.movie=e,this.router=i,this.movies=[],this.searchTerm="",this.isLoading=!1}return o(t,[{key:"ngOnInit",value:function(){this.fetchAllMovies()}},{key:"ngOnDestroy",value:function(){this.movies=[]}},{key:"searchChange",value:function(t){"string"==typeof t&&(this.searchTerm=t,""!=t&&t?this.searchMovies():this.fetchAllMovies())}},{key:"fetchAllMovies",value:function(){var t=this;return this.isLoading=!0,this.movie.list().then((function(e){return t.movies=e,t.isLoading=!1,e}))}},{key:"searchMovies",value:function(){var t=this;return this.isLoading=!0,this.movie.search(this.searchTerm).then((function(e){return t.movies=e,t.isLoading=!1,e}))}},{key:"content",value:function(t){return new T(t)}},{key:"showContent",value:function(t){this.router.navigate([l.b.MOVIE,t.id])}},{key:"refresh",value:function(t){(""==this.searchTerm?this.fetchAllMovies():this.searchMovies()).then((function(){return t.target.complete()}))}}]),t}()).\u0275fac=function(t){return new(t||lt)(d.Hb(V),d.Hb(u.g))},lt.\u0275cmp=d.Bb({type:lt,selectors:[["app-movies"]],decls:10,vars:3,consts:[["title","Movies"],["placeholder","Search Movies",3,"change"],["color","primary","type","indeterminate",4,"ngIf"],["slot","fixed",3,"ionRefresh"],["lines","full"],[3,"content","click",4,"ngFor","ngForOf"],[4,"ngIf"],["color","primary","type","indeterminate"],[3,"content","click"]],template:function(t,e){1&t&&(d.Kb(0,"ion-header"),d.Ib(1,"app-header",0),d.Kb(2,"app-search",1),d.Sb("change",(function(t){return e.searchChange(t)})),d.Jb(),d.Jb(),d.Kb(3,"ion-content"),d.fc(4,at,1,0,"ion-progress-bar",2),d.Kb(5,"ion-refresher",3),d.Sb("ionRefresh",(function(t){return e.refresh(t)})),d.Ib(6,"ion-refresher-content"),d.Jb(),d.Kb(7,"ion-list",4),d.fc(8,ct,1,1,"app-content-row",5),d.Jb(),d.fc(9,ut,2,0,"app-list-remark",6),d.Jb()),2&t&&(d.xb(4),d.Xb("ngIf",e.isLoading),d.xb(4),d.Xb("ngForOf",e.movies),d.xb(1),d.Xb("ngIf",0==e.movies.length&&!e.isLoading))},directives:[O.h,w,G,O.g,C.j,O.o,O.p,O.m,C.i,O.n,ot,st],styles:[""]}),lt),pt=function(){function t(e){n(this,t),this.tags=[],this.request=e}return o(t,[{key:"deny",value:function(){this.request.request.denied=!0}},{key:"approve",value:function(){this.request.request.approved=!0}},{key:"disable",value:function(){}},{key:"id",get:function(){return this.request.id}},{key:"title",get:function(){return this.request.title}},{key:"description",get:function(){return"<b>".concat(this.type.toUpperCase(),"</b> requested by\n                <br />\n                <i>").concat(this.request.request.user.name,"</i>")}},{key:"available",get:function(){return this.request.available}},{key:"approved",get:function(){return this.request.request.approved}},{key:"denied",get:function(){return this.request.request.denied}},{key:"posterUrl",get:function(){return this.type==l.f.MOVIE?"https://image.tmdb.org/t/p/w300//"+this.request.posterUrl:this.request.posterUrl}},{key:"requested",get:function(){return!0}},{key:"requestId",get:function(){return this.request.request.id}},{key:"type",get:function(){return this.request.type}},{key:"buttons",get:function(){return this.approved?[{label:"Approved",color:"success",action:void 0,disabled:!0}]:this.denied?[{label:"Denied",color:"danger",action:void 0,disabled:!0}]:[{label:"Deny",color:"danger",action:l.a.DENY},{label:"Approve",color:"success",action:l.a.APPROVE}]}}]),t}();function bt(t,e){1&t&&d.Ib(0,"ion-progress-bar",7)}function ft(t,e){if(1&t&&d.Ib(0,"app-content-row",8),2&t){var n=e.$implicit,i=d.Ub();d.Xb("content",i.content(n))("requestsService",i.request)}}function dt(t,e){1&t&&(d.Kb(0,"app-list-remark"),d.gc(1,"No Requests Found"),d.Jb())}var gt,vt=((gt=function(){function t(e){n(this,t),this.request=e,this.contentList=[],this.searchTerm="",this.isLoading=!1}return o(t,[{key:"ngOnInit",value:function(){this.fetchAllRequests()}},{key:"ngOnDestroy",value:function(){this.contentList=[]}},{key:"searchChange",value:function(t){this.searchTerm=t,"string"==typeof t&&(""!=this.searchTerm&&this.searchTerm?this.searchRequests():this.fetchAllRequests())}},{key:"fetchAllRequests",value:function(){var t=this;return this.isLoading=!0,Promise.all([this.request.list(l.f.MOVIE),this.request.list(l.f.TV)]).then((function(e){return t.contentList=L(e),t.isLoading=!1,t.contentList}))}},{key:"searchRequests",value:function(){var t=this;return this.isLoading=!0,Promise.all([this.request.search(l.f.MOVIE,this.searchTerm),this.request.search(l.f.TV,this.searchTerm)]).then((function(e){return t.contentList=L(e),t.isLoading=!1,t.contentList}))}},{key:"content",value:function(t){return new pt(t)}},{key:"refresh",value:function(t){(""==this.searchTerm?this.fetchAllRequests():this.searchRequests()).then((function(){return t.target.complete()}))}},{key:"requestType",get:function(){return l.f}}]),t}()).\u0275fac=function(t){return new(t||gt)(d.Hb(X))},gt.\u0275cmp=d.Bb({type:gt,selectors:[["app-requests"]],decls:10,vars:3,consts:[["title","Requests"],["placeholder","Search Requests",3,"change"],["color","primary","type","indeterminate",4,"ngIf"],["slot","fixed",3,"ionRefresh"],["lines","full"],[3,"content","requestsService",4,"ngFor","ngForOf"],[4,"ngIf"],["color","primary","type","indeterminate"],[3,"content","requestsService"]],template:function(t,e){1&t&&(d.Kb(0,"ion-header"),d.Ib(1,"app-header",0),d.Kb(2,"app-search",1),d.Sb("change",(function(t){return e.searchChange(t)})),d.Jb(),d.Jb(),d.Kb(3,"ion-content"),d.fc(4,bt,1,0,"ion-progress-bar",2),d.Kb(5,"ion-refresher",3),d.Sb("ionRefresh",(function(t){return e.refresh(t)})),d.Ib(6,"ion-refresher-content"),d.Jb(),d.Kb(7,"ion-list",4),d.fc(8,ft,1,2,"app-content-row",5),d.Jb(),d.fc(9,dt,2,0,"app-list-remark",6),d.Jb()),2&t&&(d.xb(4),d.Xb("ngIf",e.isLoading),d.xb(4),d.Xb("ngForOf",e.contentList),d.xb(1),d.Xb("ngIf",0==e.contentList.length&&!e.isLoading))},directives:[O.h,w,G,O.g,C.j,O.o,O.p,O.m,C.i,O.n,ot,st],styles:[""]}),gt);function mt(t,e){1&t&&d.Ib(0,"ion-progress-bar",7)}function yt(t,e){if(1&t){var n=d.Lb();d.Kb(0,"app-content-row",8),d.Sb("click",(function(){d.bc(n);var t=e.$implicit;return d.Ub().showContent(t)})),d.Jb()}if(2&t){var i=e.$implicit,o=d.Ub();d.Xb("content",o.content(i))}}function Ot(t,e){1&t&&(d.Kb(0,"app-list-remark"),d.gc(1,"No TV Shows Found"),d.Jb())}var wt,kt,Ct=[{path:l.b.MOVIE,component:ht},{path:l.b.TV,component:(wt=function(){function t(e,i){n(this,t),this.tv=e,this.router=i,this.shows=[],this.searchTerm="",this.isLoading=!1}return o(t,[{key:"ngOnInit",value:function(){this.fetchAllShows()}},{key:"ngOnDestroy",value:function(){this.shows=[]}},{key:"searchChange",value:function(t){"string"==typeof t&&(this.searchTerm=t,""!=t&&t?this.searchShows():this.fetchAllShows())}},{key:"fetchAllShows",value:function(){var t=this;return this.isLoading=!0,this.tv.list().then((function(e){return t.shows=e,t.isLoading=!1,t.shows}))}},{key:"searchShows",value:function(){var t=this;return this.isLoading=!0,this.tv.search(this.searchTerm).then((function(e){return t.shows=e,t.isLoading=!1,t.shows}))}},{key:"content",value:function(t){return new J(t)}},{key:"showContent",value:function(t){this.router.navigate([l.b.TV,t.id])}},{key:"refresh",value:function(t){(""==this.searchTerm?this.fetchAllShows():this.searchShows()).then((function(){return t.target.complete()}))}}]),t}(),wt.\u0275fac=function(t){return new(t||wt)(d.Hb(H),d.Hb(u.g))},wt.\u0275cmp=d.Bb({type:wt,selectors:[["app-tv"]],decls:10,vars:3,consts:[["title","TV Shows"],["placeholder","Search TV Shows",3,"change"],["color","primary","type","indeterminate",4,"ngIf"],["slot","fixed",3,"ionRefresh"],["lines","full"],[3,"content","click",4,"ngFor","ngForOf"],[4,"ngIf"],["color","primary","type","indeterminate"],[3,"content","click"]],template:function(t,e){1&t&&(d.Kb(0,"ion-header"),d.Ib(1,"app-header",0),d.Kb(2,"app-search",1),d.Sb("change",(function(t){return e.searchChange(t)})),d.Jb(),d.Jb(),d.Kb(3,"ion-content"),d.fc(4,mt,1,0,"ion-progress-bar",2),d.Kb(5,"ion-refresher",3),d.Sb("ionRefresh",(function(t){return e.refresh(t)})),d.Ib(6,"ion-refresher-content"),d.Jb(),d.Kb(7,"ion-list",4),d.fc(8,yt,1,1,"app-content-row",5),d.Jb(),d.fc(9,Ot,2,0,"app-list-remark",6),d.Jb()),2&t&&(d.xb(4),d.Xb("ngIf",e.isLoading),d.xb(4),d.Xb("ngForOf",e.shows),d.xb(1),d.Xb("ngIf",0==e.shows.length&&!e.isLoading))},directives:[O.h,w,G,O.g,C.j,O.o,O.p,O.m,C.i,O.n,ot,st],styles:[""]}),wt)},{path:"requests",component:vt},{path:"config",component:A},{path:":type/:id",component:W}],Mt=((kt=function t(){n(this,t)}).\u0275mod=d.Fb({type:kt}),kt.\u0275inj=d.Eb({factory:function(t){return new(t||kt)},imports:[[u.i.forChild(Ct)],u.i]}),kt)}}])}();