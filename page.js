$(function(){
    $('#hot .womenDress .content .right .list li').mouseover(function(){
        // 当前span添加类名on
        // alert(1)
        // $(this).find('img').show();
        // $(this).find('span').show();
        // $(this).find('.num').hide().siblings('.num').show();
        $(this).find('.number').addClass('on');
        // $(this).find('.num').hide();
        $(this).siblings().find('.number').removeClass('on');
        $('h3',this).hide();
        $('div',this).show();
        // $(this).siblings().find('h3').siblings().hide();
        // $(this).siblings().find('.number').hide();
        $(this).siblings().find('h3').show();
        $(this).siblings().find('div').hide();
        
    })
    /* $('#hot .womenDress .content .right .list li').mouseout(function(){
        $(this).siblings().find('h3').siblings().show();

    }) */





})