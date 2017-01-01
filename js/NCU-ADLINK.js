// JavaScript Document

//click the image and show the setting page
var time = 1000;
var topic = 1;
function show_stat(){
	$(document).ready(function(){
		$("#img").click(function(){
		  	$("#div_stat").toggle();
				});
			});
}
function show_thumbnail(img_src){
	$(document).ready(function(){
		$(img_src).click(function(){
			$("#img").attr("src",$(img_src)[0].src);
			//$("#img1").attr("src","../../Desktop/backup/Django-2016-10-18/www/ncu/media/Alllog-2016-10-12-0.png")
		});
	});
}
function show_constrain(){
	$(document).ready(function(){
		$("#constrain").click(function(){
			$("#constrain_setting").toggle();
		});
	});
}
function show_time_setting(display){
		$(display).click(function(){
			$("#div_time_setting").toggle();
		});
	
}
function show_topic_setting(display){
		$(display).click(function(){
			$("#div_topic_setting").toggle();
		});
	
}
function change_time_color(button){
	$(button).click(function(){
		$(".setting").css("background-color","aquamarine");
		$(button).css("background-color","red");
		time = $(button).val();
	});
}
function change_topic_color(button){
	$(button).click(function(){
		$(".setting").css("background-color","aquamarine");
		$(button).css("background-color","red");
		topic = $(button).val();
	});
}
function change_time_val(){
	$("#time_ok").click(function(){
		var temp = $("#time_other").val();
		if(temp != 0){
			time = $("#time_other").val();
			$("#time").val("Time: " + time);
		}else{
			$("#time").val("Time: " + time);
		}
		$("#time_other").val(0);
		temp = 0;
	});
}
function change_topic_val(){
	$("#topic_ok").click(function(){
		var temp = $("#topic_other").val();
		if(temp != 0){
			topic = $("#topic_other").val();
			$("#topic").val("Topic: " + topic);
		}else{
			$("#topic").val("Topic: " + topic);
		}
		$("#topic_other").val(0);
		temp = 0;
	});
}
function set_default(){
	$("#default").click(function(){
		time = 1000;
		topic = 1;
		$("#time").val("Time: " + time);
		$("#topic").val("Topic: " + topic);
	});
}
