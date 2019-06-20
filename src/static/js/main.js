$(function() {
	//产品图移入移除
	$("#product").on("mouseenter", ".product-box", function() {
		$(this).find(".product-text").show();
	})
	$("#product").on("mouseleave", ".product-box", function() {
		$(this).find(".product-text").hide();
	})
	
	// 视频点击播放
	$("#homeVideo").on("click",".home-video-mode-img",function(){
		$(".videoBox").show();
		var myPlayer = videojs('my-video');
		videojs("my-video").ready(function(){
			var myPlayer = this;
			myPlayer.play();
		});
	})
})
