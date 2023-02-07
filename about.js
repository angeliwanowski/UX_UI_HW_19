// button state change on click
$(document).ready(function(){
    $(".desktop").on("click",function(){
    $(this).addClass('active');
    $(".stairs").animate({ width: "700px"});
    });
    });

// event listener on clickkkkk
$(document).ready(function(){
    $(".tabContent:first").show();
    $(".tabLinks:first").addClass('active');
    $(".tabLinks").click(function(event){
        index = $(this).index();
        $(".tabLinks").removeClass('active');
        $(this).addClass('active');
        $(".tabContent").hide();
        $(".tabContent").eq(index).show();
    });
});




