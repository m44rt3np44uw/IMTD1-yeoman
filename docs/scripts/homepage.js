"use strict";function leeftijd(e){var a=(new Date).getFullYear(),t=a-e,r=$(".leeftijd");r.html(t)}function leerjaar(e){var a,t=(new Date).getFullYear()-e,r=$(".studie_jaar"),l=$(".studie_jaar_voluit"),i=$(".begin_jaar"),n=$(".eind_jaar");switch(t>4&&(t=4),t){case 1:a="eerstejaars";break;case 2:a="tweedejaars";break;case 3:a="derdejaars";break;default:a="eindexamen"}i.html(e+t),n.html(e+t+1),r.html(t),l.html(a)}function easterEgg(){$.urlParam=function(e){var a=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null==a?null:a[1]||0};var e="gerrie",a="verstrooid";if(null!=$.urlParam(e)&&$.urlParam(e)==a){$("h1, h2, h3, h4, h5, h6, p, a, li").css({"font-family":"Comic Sans MS"}),$tooltips.on("inserted.bs.tooltip",function(){$(".tooltip-inner").css("font-family","Comic Sans MS")});var t=$("a");$.each(t,function(t,r){var l=$(r).attr("href");l.endsWith(".html")&&$(r).attr("href",l+"?"+e+"="+a)})}}$(document).ready(function(){$("#opdracht_4_slider").carousel({interval:2e4});var e=$('[data-toggle="tooltip"]');e.tooltip(),leeftijd(1993),leerjaar(2014),easterEgg()});