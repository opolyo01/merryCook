define(['jquery',
	'can',
	'can/view/stache',
	'text!components/toolbar/init.stache'],

function($, can, stache, init, Game) {
	return can.Control.extend({
		defaults:{
			state: null
		}
	},{
		init: function(){
			var frag = can.stache(init)(this.options.state);
			this.element.append(frag);
		}
	});
});