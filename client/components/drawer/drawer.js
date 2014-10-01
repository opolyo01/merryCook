define([
    "can", 
    "models/basicmodel",
    "client/lib/jquery/jquery",
    "client/lib/bootstrap/dist/js/bootstrap",
    "client/lib/jqueryui/jquery-ui"], 
  function(can, basicModel, $){
	$.when(basicModel().findAll({}, function(data){})).done(function(data){
		console.log(data)
		
		
		var content = "";
		
		var url = "cancomponent/drawer/template.html";
		$.ajax(url,{
			async:false,
			success: function(data) {
				content = data;
			},
			error: function() {
				alert("Could not retieve drawer template")
			}
		})
		
		
		var template = can.mustache("<drawer></drawer>");
		setTimeout(function() {
			$("#main").html(template());
		},100);
		
	    return can.Component.extend({
	    	tag: "drawer",
			//template: "{{#if visible}}{{message}}{{else}}Click me{{/if}}",
	    	template:content,
			scope: {
			    visible: false,
			    message: "Hello There!",
			    title: data.title,
			    dialog: data.dialog
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
				},
				
			    click: function(){
			        //this.scope.attr("visible", !this.scope.attr("visible") );
			    	
			    }
			},
			init:function() {
			}
	    });
	    
		//$("#main").html(template());
	});
});






