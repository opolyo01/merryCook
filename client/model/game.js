define(['jquery',
	'can', 'can/map/define'],
function($, can) {
	return can.Map.extend({
		define:{
			time:{
				type: "number",
			    value: 1000,
			    set: function(newCount){
					return newCount < 0 ? 0 : newCount;
			   	}
			},
			lives:{
				type: "number",
				value: 10
			},
			points:{
				type: "number",
				value: 100
			}
		}
	});
});
