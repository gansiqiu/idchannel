$("li[id='achieveItem']").each(function(index){
	$(this).click(function(){
		$(this).parent().children("li").removeClass("active");
		$(this).addClass("active");
	})
})

$("li[class='list-group-item']").each(function(index){
	$(this).click(function(){
		
		$("#aaa").removeClass("animated slideInLeft");
		$("#aaa").addClass("animated slideOutLeft");
		$("#screenModel").removeClass("hidden");
		
	$("#screenModel").removeClass("animated slideOutRight");
		$("#screenModel").addClass("animated slideInRight");
	})
})

$(".clos").click(function(){
	console.log("1111");
	$("#screenModel").removeClass("animated slideInRight");
	$("#screenModel").addClass("animated slideOutRight");
	$("#aaa").removeClass("animated slideOutLeft");
	$("#aaa").addClass("animated slideInLeft");
	
})

