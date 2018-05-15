$("div[class='swiper-slide']").each(function(index){
		$(this).hover(function(){
			$(this).children('span').addClass("animated flipOutY");
			$(this).children('span').addClass("hidden");
			$(this).children('img').removeClass("hidden");
			$(this).children('img').removeClass("animated flipOutY");
			$(this).children('img').addClass("animated flipInY");
			$(this).animate({width:'400px'},"slow");
			
		})
})

$("div[class='swiper-slide']").each(function(index){
		$(this).mouseleave(function(){
			$(this).children('img').addClass("animated flipOutY");
			$(this).children('img').addClass("hidden");
			$(this).children('span').removeClass("animated flipOutY");
			$(this).children('span').addClass("animated flipInY");
			$(this).children('span').removeClass("hidden");
			$(this).animate({width:'60px'},"slow");
			
		})
})