/*/**/*/var __adobewebfontsappname__="dreamweaver"


			$(document).ready(function(){
			  $("#img").click(function(){
			  $("#div_stat").show();
			  });
			});
		


Spry.Utils.addLoadListener(function() {

				$(document).ready(function(){
					$("#submit").click(function(){
						$("#div_stat").hide();
						$("#img").attr("src","Alllog-2016-9-20-0.png");
					});
				});
			


			$(document).ready(function(){
				$("#thumbnail1").click(function(){
					$("#img").attr("src",$("#thumbnail1")[0].src)
					//$("#img1").attr("src","../../Desktop/backup/Django-2016-10-18/www/ncu/media/Alllog-2016-10-12-0.png")
				});
			});
		


			$(document).ready(function(){
				$("#thumbnail2").click(function(){
					$("#img").attr("src",$("#thumbnail2")[0].src)
				});
			});
		

});
