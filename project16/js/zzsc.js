$(function(){
	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><div class=\"btn btn-qq\"><div class=\"QQ\"> <p> <img class=\"qq-pic\" src=\"images/qq_s.png\" onclick=\"window.location.href=\'\'\"/> 恭喜 358456287</p><p> <img class=\"qq-pic\" src=\"images/qq_s.png\" onclick=\"window.location.href=\'\'\"/> 恭喜 358456287</p><p> <img class=\"qq-pic\" src=\"images/qq_s.png\" onclick=\"window.location.href=\'\'\"/> 恭喜 358456287</p><p> <img class=\"qq-pic\" src=\"images/qq_s.png\" onclick=\"window.location.href=\'\'\"/> 恭喜 358456287</p><p> <img class=\"qq-pic\" src=\"images/qq_s.png\" onclick=\"window.location.href=\'\'\"/> 恭喜 358456287</p> </div></div><div class=\"btn btn-wx\"><img class=\"pic\" src=\"images/weixin.jpg\" onclick=\"window.location.href=\'\'\"/></div><div class=\"btn btn-phone\"><div class=\"phone\">400-888-888</div></div><div class=\"btn btn-top\"></div></div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-qq").mouseenter(function(){
			$(this).find(".QQ").fadeIn("fast");
		});
		$(this).find(".btn-qq").mouseleave(function(){
			$(this).find(".QQ").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});