"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function switchNightMode(){document.querySelector("body").insertAdjacentHTML("beforeend",'<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),setTimeout(function(){document.querySelector("body").classList.contains("DarkMode")?(document.querySelector("body").classList.remove("DarkMode"),localStorage.setItem("isDark","0"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-moon")):(document.querySelector("body").classList.add("DarkMode"),localStorage.setItem("isDark","1"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-sun")),setTimeout(function(){document.getElementsByClassName("Cuteen_DarkSky")[0].style.transition="opacity 3s",document.getElementsByClassName("Cuteen_DarkSky")[0].style.opacity="0",setTimeout(function(){document.getElementsByClassName("Cuteen_DarkSky")[0].remove()},1e3)},2e3)}),"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night),document.getElementById("modeicon").setAttribute("xlink:href","#icon-sun")):(activateLightMode(),saveToLocal.set("theme","light",2),document.querySelector("body").classList.add("DarkMode"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-moon")),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200)}