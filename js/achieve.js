$("li[id='achieveItem']").each(function(index){
	$(this).click(function(){
		$(this).parent().children("li").removeClass("active");
		$(this).addClass("active");
	})
})

$("li[class='list-group-item']").each(function(index){
	$(this).click(function(){
		$("#aaa").addClass("animated slideOutLeft");
		$("#screenModel").removeClass("hidden");
		$("#screenModel").removeClass("animated slideInRight");
	})
})



