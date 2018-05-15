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
	})
})
