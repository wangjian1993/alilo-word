$(function() {
	AOS.init({
		duration: 1200
	});
	var videoArr = ['http://vjs.zencdn.net/v/oceans.mp4', 'http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v',
		'https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Soldier76_Hero.mp4'
	]
	//产品图移入移除
	$("#product").on("mouseenter", ".product-box", function() {
		$(this).find(".product-text").show();
	})
	$("#product").on("mouseleave", ".product-box", function() {
		$(this).find(".product-text").hide();
	})

	// 视频点击播放
	$("#homeVideo").on("click", ".home-video-mode-img", function() {
		$('#exampleModalCenter').modal("show")
		var myPlayer = videojs('my-video');
		var id = $(this).data("id");
		console.log(id)
		videojs("my-video").ready(function() {
			var myPlayer = this;
			if (id == 1) {
				var videoUrl = videoArr[0]
			} else if (id == 2) {
				var videoUrl = videoArr[1]
			} else if (id == 3) {
				var videoUrl = videoArr[2]
			}
			$("#my-video source").attr("src", videoUrl);
			myPlayer.src(videoUrl);
			myPlayer.play();
		});
	})

	$('#exampleModalCenter').on('hide.bs.modal', function() {
		var myPlayer = videojs('my-video');
		videojs("my-video").ready(function() {
			var myPlayer = this;
			myPlayer.pause();
		});
	})

	/* 
	 *底部图片效果
	 */
	$("#faceHover").on("mouseenter", function() {
		$(this).find("img").attr("src", "static/images/footer_facebook_hover.png");
	})
	$("#faceHover").on("mouseleave", function() {
		$(this).find("img").attr("src", "static/images/footer_facebook_normal.png");
	})
	$("#youtubeHover").on("mouseenter", function() {
		$(this).find("img").attr("src", "static/images/footer_youtube_hover.png");
	})
	$("#youtubeHover").on("mouseleave", function() {
		$(this).find("img").attr("src", "static/images/footer_youtube_normal.png");
	})
})
