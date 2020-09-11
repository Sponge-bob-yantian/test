$(function(){
    $('.interface p').hover(function(){
        // 给当前p添加类名 on
        $(this).addClass('on');
        $('.interface').addClass('on');
        $('.father>div').eq($(this).index()).addClass('on').siblings().removeClass('on');
        // console.log($(this).index())
        
    },
    function(){
        $(this).removeClass('on');
        $('.interface').siblings().addClass('on')
        $('.father>div').eq($(this).index()).addClass('on').siblings().removeClass('on');

    })
    // console.log($('.father>div'))

    $('.pic').click(function(){
        // alert(1);
        // $(this).removeClass('on');
        // $(this).closest('.telLoad').removeClass('on');
        $(this).closest('.telLoad').siblings().addClass('on').siblings().removeClass('on');
    })
    $('#main .interface .top span').click(function(){
        $(this).closest('.interface').siblings().addClass('on').siblings().removeClass('on');
        
    })





})