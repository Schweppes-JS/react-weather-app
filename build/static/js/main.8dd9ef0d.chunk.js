(this["webpackJsonpweather-map"]=this["webpackJsonpweather-map"]||[]).push([[0],{11:function(e,t,n){e.exports={wrapper:"Card_wrapper__292H7",infoBlock:"Card_infoBlock__2qbYs",infoLine:"Card_infoLine__y2SKi"}},13:function(e,t,n){e.exports={wrapper:"Options_wrapper__3KGTR",optionBlock:"Options_optionBlock__3r3U4",optionLine:"Options_optionLine__1SM6O"}},15:function(e,t,n){e.exports={wrapper:"Searcher_wrapper__4uvOm",headline:"Searcher_headline__3DXaz",form:"Searcher_form__1DYPn",input:"Searcher_input__26rA0",button:"Searcher_button__Xt9ST",icon:"Searcher_icon__1QsOa"}},23:function(e,t,n){e.exports={wrapper:"App_wrapper__2wiTm",error:"App_error__1g72G"}},43:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(17),o=n.n(c),i=(n(43),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))}),s=n(7),u=n(23),p=n.n(u),l=n(11),d=n.n(l),h=n(2),j=function(){var e,t=new Date(1e3*Object(s.c)((function(e){var t;return null===(t=e.weather.weatherData)||void 0===t?void 0:t.dt}))).toLocaleDateString(),n=Object(s.c)((function(e){var t;return null===(t=e.weather.weatherData)||void 0===t?void 0:t.name})),r=Object(s.c)((function(e){var t;return null===(t=e.weather.weatherData)||void 0===t?void 0:t.weather[0].icon})),a=Object(s.c)((function(e){var t;return null===(t=e.weather.weatherData)||void 0===t?void 0:t.weather[0].description})),c=null===(e=Object(s.c)((function(e){var t;return null===(t=e.weather.weatherData)||void 0===t?void 0:t.main.temp})))||void 0===e?void 0:e.toFixed(1),o=Object(s.c)((function(e){return e.options.temperatureUnit}));return Object(h.jsxs)("div",{className:d.a.wrapper,children:[Object(h.jsxs)("div",{className:d.a.infoBlock,children:[Object(h.jsx)("p",{className:d.a.infoLine,children:n}),Object(h.jsx)("p",{className:d.a.infoLine,children:t})]}),Object(h.jsxs)("div",{className:d.a.infoBlock,children:[Object(h.jsx)("div",{className:d.a.infoLine,children:Object(h.jsx)("img",{src:r&&"http://openweathermap.org/img/wn/".concat(r,"@2x.png"),alt:"".concat(a)})}),Object(h.jsx)("p",{className:d.a.infoLine,children:a})]}),Object(h.jsxs)("div",{className:d.a.infoBlock,children:[Object(h.jsx)("p",{className:d.a.infoLine,children:c}),Object(h.jsx)("p",{className:d.a.infoLine,children:o})]})]})},b=n.p+"static/media/loader.5aea8c64.svg",f=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("img",{src:b,alt:"Loading..."})})},O=n(14),g=Object(O.b)({name:"options",initialState:{temperatureUnit:"\xb0C",currentLanguage:"en"},reducers:{getOptions:function(e){},setTemperatureUnit:function(e,t){e.temperatureUnit=t.payload},setCurrentLanguage:function(e,t){e.currentLanguage=t.payload},changeTemperatureUnit:function(e,t){},changeCurrentLanguage:function(e,t){}}}),v=g.reducer,x=g.actions,m=x.getOptions,w=x.setTemperatureUnit,_=x.setCurrentLanguage,L=x.changeTemperatureUnit,C=x.changeCurrentLanguage,k=Object(O.b)({name:"weather",initialState:{isLoading:!1,weatherData:null,error:null},reducers:{getWeather:function(e){e.isLoading=!0},getWeatherSuccess:function(e,t){e.weatherData=t.payload,e.isLoading=!1,e.error=null},getWeatherFailure:function(e,t){e.error=t.payload,e.isLoading=!1},getWeatherByCity:function(e,t){e.isLoading=!0}}}),N=k.reducer,y=k.actions,S=y.getWeather,B=y.getWeatherSuccess,D=y.getWeatherFailure,U=y.getWeatherByCity,F=n(13),T=n.n(F),E=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.options.temperatureUnit})),n=Object(s.c)((function(e){return e.options.currentLanguage})),r=Object(s.c)((function(e){var t;return null===(t=e.weather.weatherData)||void 0===t?void 0:t.name}));return Object(h.jsxs)("div",{className:T.a.wrapper,children:[Object(h.jsxs)("select",{className:T.a.optionBlock,value:t,onChange:function(t){e(L(t.currentTarget.value)),e(U(r))},children:[Object(h.jsx)("option",{className:T.a.optionLine,value:"\xb0F",children:"\xb0F"}),Object(h.jsx)("option",{className:T.a.optionLine,value:"\xb0C",children:"\xb0C"})]}),Object(h.jsxs)("select",{className:T.a.optionBlock,value:n,onChange:function(t){e(C(t.currentTarget.value)),e(U(r))},children:[Object(h.jsx)("option",{className:T.a.optionLine,value:"en",children:"English"}),Object(h.jsx)("option",{className:T.a.optionLine,value:"ru",children:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}),Object(h.jsx)("option",{className:T.a.optionLine,value:"ua",children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"})]})]})},W=n(37),A=function(e,t){return{headline:{en:"Current Weather",ru:"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430",ua:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u043f\u043e\u0433\u043e\u0434\u0430"},placeholder:{en:"Enter the city",ru:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",ua:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043c\u0456\u0441\u0442\u043e"},searchError:{en:"Incorrect city",ru:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d \u0433\u043e\u0440\u043e\u0434",ua:"\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0435 \u043c\u0456\u0441\u0442\u043e"},geolocationError:{en:"User denied geolocation prompt",ru:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u043b \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u0438",ua:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0437\u0430\u0431\u043e\u0440\u043e\u043d\u0438\u0432 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0456\u0457"}}[e][t]},I=n(15),P=n.n(I),J=function(){var e=Object(s.b)(),t=Object(r.useState)(""),n=Object(W.a)(t,2),a=n[0],c=n[1],o=Object(s.c)((function(e){return e.options.currentLanguage}));return Object(h.jsxs)("div",{className:P.a.wrapper,children:[Object(h.jsx)("h1",{className:P.a.headline,children:A("headline",o)}),Object(h.jsxs)("form",{className:P.a.form,onSubmit:function(t){t.preventDefault(),e(U(a)),c("")},children:[Object(h.jsx)("input",{className:P.a.input,type:"text",placeholder:A("placeholder",o),value:a,onChange:function(e){c(e.currentTarget.value)}}),Object(h.jsx)("button",{className:P.a.button,type:"submit",children:Object(h.jsx)("svg",{className:P.a.icon,width:"36",height:"37",viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M35.5078 31.6484L28.4766 24.6172C28.125 24.3359 27.7031 24.125 27.2812 24.125H26.1562C28.0547 21.6641 29.25 18.5703 29.25 15.125C29.25 7.10938 22.6406 0.5 14.625 0.5C6.53906 0.5 0 7.10938 0 15.125C0 23.2109 6.53906 29.75 14.625 29.75C18 29.75 21.0938 28.625 23.625 26.6562V27.8516C23.625 28.2734 23.7656 28.6953 24.1172 29.0469L31.0781 36.0078C31.7812 36.7109 32.8359 36.7109 33.4688 36.0078L35.4375 34.0391C36.1406 33.4062 36.1406 32.3516 35.5078 31.6484ZM14.625 24.125C9.63281 24.125 5.625 20.1172 5.625 15.125C5.625 10.2031 9.63281 6.125 14.625 6.125C19.5469 6.125 23.625 10.2031 23.625 15.125C23.625 20.1172 19.5469 24.125 14.625 24.125Z",fill:"#512261"})})})]})]})},M=function(){var e=Object(s.c)((function(e){return e.weather.isLoading})),t=Object(s.c)((function(e){return e.weather.error})),n=Object(s.b)();return Object(r.useEffect)((function(){n(m()),n(S())}),[]),Object(h.jsx)(h.Fragment,{children:e?Object(h.jsx)(f,{}):Object(h.jsxs)("div",{className:p.a.wrapper,children:[Object(h.jsx)(E,{}),Object(h.jsx)(J,{}),t?Object(h.jsx)("h1",{className:p.a.error,children:t}):Object(h.jsx)(j,{})]})})},H=n(36),q=n(38),G=n(6),K=n.n(G),R=n(5),X=function(e,t){localStorage.setItem(e,JSON.stringify(t))},Y=function(e){return JSON.parse(localStorage.getItem(e))},Z=K.a.mark(Q),z=K.a.mark(V);function Q(e){var t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(R.b)(X,"currentLanguage",t);case 4:return n.next=6,Object(R.c)(_(t));case 6:n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(1),new Error(n.t0.message);case 11:case"end":return n.stop()}}),Z,null,[[1,8]])}function V(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.e)(C.type,Q);case 2:case"end":return e.stop()}}),z)}var $=K.a.mark(te),ee=K.a.mark(ne);function te(e){var t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(R.b)(X,"temperatureUnit",t);case 4:return n.next=6,Object(R.c)(w(t));case 6:n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(1),new Error(n.t0.message);case 11:case"end":return n.stop()}}),$,null,[[1,8]])}function ne(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.e)(L.type,te);case 2:case"end":return e.stop()}}),ee)}var re=K.a.mark(ce),ae=K.a.mark(oe);function ce(){var e,t;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(R.b)(Y,"temperatureUnit");case 3:if(!(e=n.sent)){n.next=7;break}return n.next=7,Object(R.c)(w(e));case 7:return n.next=9,Object(R.b)(Y,"currentLanguage");case 9:if(!(t=n.sent)){n.next=13;break}return n.next=13,Object(R.c)(_(t));case 13:n.next=18;break;case 15:throw n.prev=15,n.t0=n.catch(0),new Error(n.t0.message);case 18:case"end":return n.stop()}}),re,null,[[0,15]])}function oe(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.e)(m.type,ce);case 2:case"end":return e.stop()}}),ae)}var ie=function(e){return e.options.currentLanguage},se=function(e){return e.options.temperatureUnit},ue=n(34),pe="cacbd70b82a328cf33e7567db06fbff4",le=n.n(ue).a.create({baseURL:"http://api.openweathermap.org/data/2.5/"}),de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\xb0C",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",r={"\xb0C":"metric","\xb0F":"imperial"};return le.get("weather?lat=".concat(e.latitude,"&lon=").concat(e.longitude,"&units=").concat(r[t],"&lang=").concat(n,"&appid=").concat(pe))},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\xb0C",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",r={"\xb0C":"metric","\xb0F":"imperial"};return le.get("weather?q=".concat(e,"&units=").concat(r[t],"&lang=").concat(n,"&appid=").concat(pe))},je=K.a.mark(fe),be=K.a.mark(Oe);function fe(e){var t,n,r,a,c;return K.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,o.next=4,Object(R.d)(ie);case 4:return n=o.sent,o.next=7,Object(R.d)(se);case 7:return r=o.sent,o.next=10,Object(R.b)(he,t,r,n);case 10:return a=o.sent,o.next=13,Object(R.c)(B(a.data));case 13:o.next=22;break;case 15:return o.prev=15,o.t0=o.catch(1),o.next=19,Object(R.d)(ie);case 19:return c=o.sent,o.next=22,Object(R.c)(D(A("searchError",c)));case 22:case"end":return o.stop()}}),je,null,[[1,15]])}function Oe(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.e)(U.type,fe);case 2:case"end":return e.stop()}}),be)}var ge=n(35),ve=function(){var e=Object(ge.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={enableHighAccuracy:!0,timeout:15e3,maximumAge:36e5},e.abrupt("return",new Promise((function(e,n){return navigator.geolocation.getCurrentPosition(e,n,t)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=K.a.mark(we),me=K.a.mark(_e);function we(){var e,t,n,r,a,c;return K.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(R.b)(ve);case 3:return e=o.sent,t={latitude:e.coords.latitude,longitude:e.coords.longitude},o.next=7,Object(R.d)(ie);case 7:return n=o.sent,o.next=10,Object(R.d)(se);case 10:return r=o.sent,o.next=13,Object(R.b)(de,t,r,n);case 13:return a=o.sent,o.next=16,Object(R.c)(B(a.data));case 16:o.next=25;break;case 18:return o.prev=18,o.t0=o.catch(0),o.next=22,Object(R.d)(ie);case 22:return c=o.sent,o.next=25,Object(R.c)(D(A("geolocationError",c)));case 25:case"end":return o.stop()}}),xe,null,[[0,18]])}function _e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.e)(S.type,we);case 2:case"end":return e.stop()}}),me)}var Le=K.a.mark(Ce);function Ce(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([_e(),oe(),V(),ne(),Oe()]);case 2:case"end":return e.stop()}}),Le)}var ke=Object(q.a)(),Ne=Object(O.a)({reducer:{weather:N,options:v},middleware:[].concat(Object(H.a)(Object(O.c)({thunk:!1})),[ke]),devTools:!0});ke.run(Ce);var ye=function(){return Object(h.jsx)(s.a,{store:Ne,children:Object(h.jsx)(M,{})})};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(ye,{})}),document.getElementById("root")),i()}},[[72,1,2]]]);
//# sourceMappingURL=main.8dd9ef0d.chunk.js.map