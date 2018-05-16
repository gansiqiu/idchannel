$("button[id='technologyItem']").each(function(index){
	$(this).click(function(){
		if (index == 0) {
			$(this).parent().children("button").removeClass("active");
			$(this).addClass("active");
		} else{				
			$(this).parent().children("button").eq(0).removeClass("active");
			$(this).addClass("active");
		}
	})
})

$("button[id='contentItem']").each(function(index){
	$(this).click(function(){
		if (index == 0) {
			$(this).parent().children("button").removeClass("active");
			$(this).addClass("active");
		} else{				
			$(this).parent().children("button").eq(0).removeClass("active");
			$(this).addClass("active");
		}
	})
})

$("li[id='contentChooseItem']").each(function(index){
	$(this).click(function(){
		if (index == 0) {
			$(this).parent().children("li").removeClass("active");
			$(this).addClass("active");
		} else{
			
			$(this).parent().children("li").removeClass("active");
			$(this).addClass("active");
		}
	})
})
