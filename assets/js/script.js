$(document).ready(function(){
    $ (".destacados").click(function(){
        $(this).css("color","red")
    })
    $ (".quien").click(function(){
        $(".quienes").toggle()
    })
})