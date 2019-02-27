$("ul").on("click","li",function(event){
	$(this).toggleClass("mark");
});
$("ul").on("click","span",function(event){
	event.stopPropagation();

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});
$("input[type='text']").keypress(function(event){
	if(event.charCode==13)
	{
		var newtext=$(this).val();
		var newtodo="<li id='list-items'>"+
				"<span id='trash'><i class='fa fa-trash-alt'></i> </span>"+newtext+"</li>";
		$("ul").append(newtodo);
		$(this).val('');


	}
});
$("#pencil").on("click",function(){
	$("input").fadeToggle(400);
	
});