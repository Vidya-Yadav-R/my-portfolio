$(document).ready(function(){
    // Toggle menu on button click
    $('.menu-btn').click(function(){
        $('.menu').toggleClass('active');
    });

    // Close menu when a menu item is clicked
    $('.menu li a').click(function(){
        $('.menu').removeClass('active');
    });

    // Sticky navbar
    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
