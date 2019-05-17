(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(48)},34:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),o=n(9),l=n(10),u=n(21),s=n(19),p=n(20),m=(n(34),n(35),n(13)),h=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Today")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/next"},"Next days"))))},d=(n(44),n(4)),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).checkWeatherFromHistory=function(e){n.props.getInfoFromApi(e.target.innerHTML)},n.delAllCities=function(){n.props.delAllCities()},n.checkCities=function(){n.props.appState.cities.map(function(e,t){if(null===e)n.citiesHistory=[];else{var a=e.toUpperCase();n.citiesHistory.includes(a)||(t>3?n.citiesHistory.splice(0,1,a):n.citiesHistory.push(a))}})},n.citiesHistory=[],n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.checkCities(),r.a.createElement("div",{className:"history"},r.a.createElement("ul",null,this.citiesHistory.map(function(t,n){return r.a.createElement("li",{key:n,onClick:e.checkWeatherFromHistory},t)})),r.a.createElement("button",{onClick:this.delAllCities},"\u2716"))}}]),t}(a.Component),E=Object(d.b)(function(e){return{appState:e}},function(e){return{delAllCities:function(){e({type:"DELETE_CITIES",payload:null})}}})(f),y=n(8),v=(n(46),Object(d.b)(function(e){return{appState:e}})(function(e){var t=e.state,n=t.weather,a=t.dt_txt,c=t.main,i=t.wind;return r.a.createElement("div",{className:"forecast-weather-info"},r.a.createElement("div",null,r.a.createElement("h2",null,n[0].main),r.a.createElement("p",null,a.substr(0,10))),r.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(n[0].icon,".png"),alt:"",className:"forecast-weather__img"}),r.a.createElement("ul",null,r.a.createElement("li",null,Math.round(c.temp),"\xb0"),r.a.createElement("li",null,i.speed," m/s")),r.a.createElement("p",{className:"forecast-weather__description"},n[0].description.toUpperCase()))})),b=Object(d.b)(function(e){return{appState:e}})(function(e){var t=[];return t.push(e.appState.forecast[e.appState.forecast.length-1]),t.includes(void 0)?"":t.map(function(e){return e.list.filter(function(e){return e.dt_txt.includes("12:00:00")}).map(function(e,t){return r.a.createElement(v,{key:t,state:e})})})}),g=(n(47),Object(d.b)(function(e){return{appState:e}})(function(e){var t=e.appState.current;if(void 0!==t[t.length-1]){var n=t[t.length-1],a=n.name,c=n.sys,i=n.main,o=n.weather,l=n.wind,u=n.clouds;return r.a.createElement("div",{className:"current-weather-info"},r.a.createElement("div",{className:"current-weather__main"},r.a.createElement("div",{className:"current-weather__city"},a,", ",c.country),r.a.createElement("div",{className:"current-weather__temp"},Math.round(i.temp),"\xb0",r.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(o[0].icon,".png")})),r.a.createElement("div",{className:"current-weather__description"},o[0].description.toUpperCase())),r.a.createElement("div",{className:"current-weather__more"},r.a.createElement("ul",null,r.a.createElement("li",null,"Humidity: ",i.humidity," %"),r.a.createElement("li",null,"Pressure: ",i.pressure," mb"),r.a.createElement("li",null,"Wind speed: ",l.speed," m/s"),r.a.createElement("li",null,"Clouds: ",u.all))))}return""})),_="&units=metric&APPID=9e5f732b51c403196a6a5096551e6098",w=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getCurrentWeather",value:function(e){return fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+_).then(function(e){return e.json()}).catch(function(e){console.log(e)})}},{key:"getWeatherForecast",value:function(e){return fetch("https://api.openweathermap.org/data/2.5/forecast?q="+e+_).then(function(e){return e.json()}).catch(function(e){console.log(e)})}}]),e}()),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),n.getInfoFromApi(n.cityInput.value),n.cityInput.value=""},n.getInfoFromApi=function(e){w.getCurrentWeather(e).then(function(t){w.getWeatherForecast(e).then(function(a){if("city not found"===t.message)return alert("No found city, please correct name!"),!1;n.props.addCurrentWeather(t),n.props.addWeatherForecast(a),n.props.addCity(e)})})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header"},"React Weather Forecast"),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"Enter city in english... (Kiev, UA)",className:"search-input",type:"text",ref:function(t){e.cityInput=t}}))),r.a.createElement(h,null),r.a.createElement(E,{getInfoFromApi:this.getInfoFromApi}),r.a.createElement(y.a,{exact:!0,path:"/",component:g}),r.a.createElement(y.a,{path:"/next",component:b})))}}]),t}(a.Component),C=Object(d.b)(function(e){return{appState:e}},function(e){return{addCity:function(t){e({type:"ADD_CITY",payload:t})},addCurrentWeather:function(t){var n=Object.assign({},t);e({type:"CURRENT_WEATHER",payload:n})},addWeatherForecast:function(t){var n=Object.assign({},t);e({type:"WEATHER_FORECAST",payload:n})}}})(O),j=n(11),N=n(12),A=[],S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"ADD_CITY"===t.type?[].concat(Object(N.a)(e),[t.payload]):"DELETE_CITIES"===t.type?[t.payload]:e},T=[],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return"CURRENT_WEATHER"===t.type?[].concat(Object(N.a)(e),[t.payload]):e},W=[],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return"WEATHER_FORECAST"===t.type?[].concat(Object(N.a)(e),[t.payload]):e},F=Object(j.b)({cities:S,current:I,forecast:k}),H=Object(j.c)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(d.a,{store:H},r.a.createElement(C,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e58980c3.chunk.js.map