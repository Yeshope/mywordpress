!function(e){var o={};function a(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,o,r){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)a.d(r,i,function(o){return e[o]}.bind(null,i));return r},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s=13)}({13:function(e,o){var a=function(e,o){var a=e.find(".eael-img-accordion").eq(0),r=void 0!==a.data("img-accordion-id")?a.data("img-accordion-id"):"",i=void 0!==a.data("img-accordion-type")?a.data("img-accordion-type"):"",n=0;"on-click"===i?o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").on("click",(function(a){0==o(this).hasClass("overlay-active")&&a.preventDefault(),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover",e).removeClass("overlay-active"),0==n&&(o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").hasClass("overlay-active")&&o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").removeClass("overlay-active"),n+=1),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").css("flex","1"),o(this).find(".overlay").parent(".eael-image-accordion-hover").addClass("overlay-active"),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").find(".overlay-inner").removeClass("overlay-inner-show"),o(this).find(".overlay-inner").addClass("overlay-inner-show"),o(this).css("flex","3")})):o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").on("hover",(function(){o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").hasClass("overlay-active")&&(o("#eael-img-accordion-"+r+" .eael-image-accordion-hover.overlay-active").css("flex","1"),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").removeClass("overlay-active"),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover .overlay .overlay-inner").removeClass("overlay-inner-show"))}))};ea.hooks.addAction("init","ea",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-image-accordion.default",a)}))}});