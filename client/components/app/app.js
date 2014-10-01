define(['jquery',
	'can',
	'can/view/stache',
	'text!components/app/init.stache',
	'components/toolbar/toolbar.js',
	'components/drawer/drawer.js',
	'model/game.js'],

function($, can, stache, init, Toolbar, Drawer, Game) {
	var state = new Game();
	$('body').append(can.stache(init)());
	new Toolbar("#toolbar",{
		state: state
	});

	// new Drawer("#drawer",{
	// 	state: state
	// });
});
