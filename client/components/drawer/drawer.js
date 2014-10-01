define([
    'jquery',
	'can',
	'can/view/stache',
	'text!components/drawer/init.stache',
	'less!./drawer.less',
    'bootstrap'],

  function($, can, stache, init){
	return can.Component.extend({
	    	tag: "drawer",
	    	template: can.stache(init),
			scope: {
			},
			events: {
				"img.hamburger click": function(burger) {
					if($(".collapsibleNav").hasClass("thin") == true) {
						$(".collapsibleNav").removeClass("thin");
						$(burger).removeClass("soft");
					}
					else {
						$(".collapsibleNav").addClass("thin");
						$(burger).addClass("soft");
					}
				},
				
				"img.characterImg click": function(img) {
					alert($(img).attr("data-desc"));
				},

				"img.enemyImg click": function(img) {
					alert($(img).attr("data-desc"));
				}
			}
	    });
});





