require([],function(){var i=!1,e=function(){require([yiliaConfig.rootUrl+"js/mobile.js"],function(e){e.init(),i=!0})},t=!1,a=function(){require([yiliaConfig.rootUrl+"js/pc.js"],function(i){i.init(),t=!0})},n={versions:function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&i.indexOf("KHTML")==-1,mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:i.indexOf("Safari")==-1,weixin:i.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(i&&t)return void $(window).unbind("resize");var n=$(window).width();n>=700?a():e()}),n.versions.mobile||$(window).width()<800?e():a(),resetTags=function(){for(var i=$(".tagcloud a"),e=0;e<i.length;e++){var t=Math.floor(7*Math.random());i.eq(e).addClass("color"+t)}$(".article-category a:nth-child(-n+2)").attr("class","color0")},yiliaConfig.fancybox&&require([yiliaConfig.fancybox_js],function(i){var e=$(".isFancy");if(0!=e.length){for(var t=$(".article-inner img"),a=0,n=t.length;a<n;a++){var o=t.eq(a).attr("src"),r=t.eq(a).attr("alt");if("undefined"==typeof r)var r=t.eq(a).attr("title");var c=t.eq(a).attr("width"),l=t.eq(a).attr("height");t.eq(a).replaceWith("<a href='"+o+"' title='"+r+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+o+"' width="+c+" height="+l+" title='"+r+"' alt='"+r+"'></a>")}$(".article-inner .fancy-ctn").fancybox({type:"image"})}}),yiliaConfig.animate&&(yiliaConfig.isHome?require([yiliaConfig.scrollreveal],function(i){function e(){$(".article").each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")?($(this).removeClass("hidden").addClass("show"),$(this).addClass("is-hiddened")):$(this).hasClass("is-hiddened")||$(this).addClass("hidden")})}var t=["pulse","fadeIn","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn"],a=t.length,n=t[Math.ceil(Math.random()*a)-1];if(!window.requestAnimationFrame)return $(".body-wrap > article").css({opacity:1}),void(navigator.userAgent.match(/Safari/i)&&($(window).on("scroll",function(){e()}),e()));var o=".body-wrap > article",r=$(".body-wrap > article:first-child");if(r.height()>$(window).height()){var o=".body-wrap > article:not(:first-child)";r.css({opacity:1})}i({duration:0,afterReveal:function(i){$(i).addClass("animated "+n).css({opacity:1})}}).reveal(o)}):$(".body-wrap > article").css({opacity:1})),yiliaConfig.toc&&require(["toc"],function(){});var o=["#6da336","#ff945c","#66CC66","#99CC99","#CC6666","#76becc","#c99979","#918597","#4d4d4d"],r=Math.ceil(Math.random()*(o.length-1));$("#container .left-col .overlay").css({"background-color":o[r],opacity:.3}),$("#container #mobile-nav .overlay").css({"background-color":o[r],opacity:.7}),$("table").wrap("<div class='table-area'></div>"),$(document).ready(function(){$("#comments").length<1&&$("#scroll > a:nth-child(2)").hide()}),(yiliaConfig.isArchive||yiliaConfig.isTag||yiliaConfig.isCategory)&&$(document).ready(function(){$("#footer").after("<button class='hide-labels'>TAGS</button>"),$(".hide-labels").click(function(){$(".article-info").toggle(200)})}),$("ul > li").each(function(){function i(i,e){var t=["disabled",""];o.html(o.html().replace(i,"<input type='checkbox' "+e+" "+t[1]+" >"))}var e={field:this.textContent.substring(0,2),check:function(i){var e=new RegExp(i);return this.field.match(e)}},t=["[ ]",["[x]","checked"]],a=e.check(t[1][0]),n=e.check(t[0]),o=$(this);(a||n)&&(this.classList.add("task-list"),a?(i(t[1][0],t[1][1]),this.classList.add("check")):i(t[0],""))})});