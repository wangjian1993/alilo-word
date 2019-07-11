$(function() {
	AOS.init({
		duration: 1200
	});
	var brandNavType=0;
	var videoArr = ['http://vjs.zencdn.net/v/oceans.mp4', 'http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v',
		'https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Soldier76_Hero.mp4'
	]

	/* ----- */
	
	/*首页导航*/
	$("#navProducts,#producMenu").on("mouseenter", function() {
		$("#producMenu").show();
	})
	$("#navProducts,#producMenu").on("mouseleave", function() {
		$("#producMenu").hide();
	})
	$("#navbarDropdown,#barndMenu").on("mouseenter", function() {
		$("#barndMenu").show();
	})
	$("#navbarDropdown,#barndMenu").on("mouseleave", function() {
		$("#barndMenu").hide();
	})

	//产品图移入移除
	$("#product").on("mouseenter", ".product-box", function() {
		$(this).find(".product-text").show();
	})
	$("#product").on("mouseleave", ".product-box", function() {
		$(this).find(".product-text").hide();
	})

	/* ------- */



	//产品图移入移除
	$(".dropdown-menu").on("mouseenter", "a", function() {
		$(this).css("color", "#67b8e9");
	})
	$(".dropdown-menu").on("mouseleave", "a", function() {
		$(this).css("color", "#7b7e8a");
	})

	/* -------- */



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

	/* ------ */


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

	/* -------- */

	/* 回到顶部 */
	$(".goTop").on("mouseenter", function() {
		$(this).find("img").attr("src", "static/images/back_hover.png");
	})
	$(".goTop").on("mouseleave", function() {
		$(this).find("img").attr("src", "static/images/back_normal.png");
	})
	$('.goTop').click(function() {
		$('html , body').animate({
			scrollTop: 0
		}, 'slow');
	});
	var win = $(window); //得到窗口对象
	var selector = $(".goTop"); //获取导航对象
	var height = 1000; //设置距离顶部偏移量
	win.scroll(function() {
		if (win.scrollTop() >= height) {
			selector.slideDown(800).css('display', 'block');
		} else {
			selector.slideUp(800);
		}
	})
	/* ------ */

	/*tab切换*/
	brandNavType = GetQueryString("type");
	barndClick(brandNavType)
	function barndClick(type){
		$("#tabBox>div").hide().eq(type).show();
		$(".nav-tabs li").eq(type).addClass("active").siblings().removeClass("active"); 
	}
	$("#nav-tabs li").on("click", function(){
		var id = $(this).data("type");
		if(id == 0){
			$("#brandtextP").html("ABOUT alilo");
			$("#brandtextH3").html("")
		}else if(id ==1){
			$("#brandtextP").html("More about");
			$("#brandtextH3").html("GROWTH HISTORY")
		}else if(id ==2){
			$("#brandtextP").html("granted");
			$("#brandtextH3").html("PRIZES AND AWARDS")
		}
		$("#tabBox>div").hide().eq(id).show();
	})

	/* ----- */
	
	
	/*获取url参数 */
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}
})
