define(['jquery',
	'can',
	'can/view/stache',
	'text!components/app/init.stache',
	'components/toolbar/toolbar.js',
	'model/game.js'],

function($, can, stache, init, Toolbar, Game) {
	var state = new Game();
	$('body').append(can.stache(init)());
	new Toolbar("#toolbar",{
		state: state
	});
});
