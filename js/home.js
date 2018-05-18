$("li[id='item']").each(function(index){
	$(this).hover(function(){
		$(this).children('img').removeClass("animated flipInY");
		$(this).children('img').addClass("animated flipOutY");
		$(this).children('div').removeClass("hidden");
		$(this).children('div').removeClass("animated flipOutY");
		$(this).children('div').addClass("animated flipInY");
	})
})


$("li[id='item']").each(function(index){
	$(this).mouseleave(function(){
		$(this).children('div').removeClass("animated flipInY");
		$(this).children('div').addClass("animated flipOutY");
		$(this).children('img').removeClass("animated flipOutY");
		$(this).children('img').addClass("animated flipInY");
		$(this).children('div').addClass("hidden");
	})
})

$("div[id='swiper-slide']").each(function(index){
	$(this).click(function(){
			$(this).children('span').addClass("animated flipOutY");
			$(this).children('span').addClass("hidden");
			$(this).children('img').removeClass("hidden");
			$(this).children('img').removeClass("animated flipOutY");
			$(this).children('img').addClass("animated flipInY");
			$(this).animate({width:'740px'},"slow");
	})
})

$("div[id='swiper-slide']").each(function(index){
		$(this).mouseleave(function(){
			$(this).children('img').addClass("animated flipOutY");
			$(this).children('img').addClass("hidden");
			$(this).children('span').removeClass("animated flipOutY");
			$(this).children('span').addClass("animated flipInY");
			$(this).children('span').removeClass("hidden");
			$(this).animate({width:'100px'},"slow");
		})
})


$("a[id='detail']").each(function(index){
	$(this).click(function(){
		$("#screenModel").removeClass("hidden");
		$("#screenModel").removeClass("animated slideOutRight");
		$("#screenModel").addClass("animated slideInRight");
		
		$(".container-fluid").removeClass("animated slideInLeft");
		$(".container-fluid").addClass("animated slideOutLeft");
		var swiper = new Swiper('#swiper-container2', {
				slidesPerView: 8,
				spaceBetween: 30,
				breakpoints: {
					1024: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					}
				}
			});
	})
})
$(".clos").bind("click",function(){
	$("#screenModel").removeClass("animated slideInRight");
	$("#screenModel").addClass("animated slideOutRight");
	$(".container-fluid").removeClass("animated slideOutLeft");
	$(".container-fluid").addClass("animated slideInLeft");
})

$(".listTitle").bind("click",function(){
	$("#screenModel").removeClass("animated slideInRight");
	$("#screenModel").addClass("animated slideOutRight");
	$(".container-fluid").removeClass("animated slideOutLeft");
	$(".container-fluid").addClass("animated slideInLeft");
})
