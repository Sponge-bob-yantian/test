window.onload=function(){
    
    let lis=document.querySelectorAll('#menu li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover=function(){
            this.className='active';
        }, lis[i].onmouseout=function(){
            this.className='';
        }
    }


    $(".scroll-banner").slide({
        mainCell:".scroll-content",
        titCell:".scroll-btn span",
        titOnClassName:"current",
        effect:"fold",
        autoPlay:true,
        delayTime:1000,
        interTime:3500
    });



    window.onscroll = function(){
        // 查看设置滚轮高度隐藏
        let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        let iTop = document.querySelector('.tatolIcon');
        let lIcon = document.querySelector('leftIcon');
        // let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(sTop)
        if(sTop > 1200 ){
            iTop.style.display = 'block';
        }else{
            iTop.style.display = 'none';
        }
    }

    $("#clothing .bannerInner").tyslide({
        boxh:455,//盒子的高度
        w:455,//盒子的宽度
        h:300,//图片的高度
        isShow:false,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:5,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });

    // 原生
    /* let tabList = document.querySelectorAll('#clothing .first .kind>li');
    // console.log(tabList);
    let cons = document.querySelectorAll('#clothing .first .tabChange');
    // console.log(cons);
    // 批量注册事件
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].onmouseover = function(){
            for (let j = 0; j < tabList.length; j++) {
                // 清除默认样式类名
                cons[j].classList.remove('on');
            }
            // 添加默认样式类名
            cons[i].classList.add('on');
        }
    }; */

    // jq
    $('#clothing .first .kind>li').hover(function(){
        $('#clothing .first .tabChange').eq($(this).index()).addClass('on').siblings().removeClass('on');
    })
    $('#clothing .second .kind>li').hover(function(){
        $('#clothing .second .tabChange').eq($(this).index()).addClass('on').siblings().removeClass('on');
    })
    $('#clothing .third .kind>li').hover(function(){
        $('#clothing .third .tabChange').eq($(this).index()).addClass('on').siblings().removeClass('on');
    })
    $('#clothing .fouth .kind>li').hover(function(){
        $('#clothing .fouth .tabChange').eq($(this).index()).addClass('on').siblings().removeClass('on');
    })
    
    // 固定头部搜索框
    $(window).scroll(function(){
        let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(sTop);
        if(sTop > 300){
            $('#fixed').appendTo('#fixedHead .contain');
            $('#fixedHead').show();
            

        }else{
            $('#fixedHead').hide();
            $('#fixed').prependTo('#head .right');
        }
    })


    let mIcon = document.querySelector('.leftIcon');
    let setTop = (document.documentElement.clientHeight-mIcon.offsetHeight)/2;
    window.addEventListener('scroll',function(){
        // 获取滚轮高
        let sTop = document.documentElement.scrollTop;
        // leftIcon.style.top = setTop +'px';
        startMove(mIcon,{top:setTop+sTop-1900},300,'linear');
        // console.log(sTop)
    })
    // 将颜色用变量以数组的形式保存下来
    let bgColor = ['#93d470','#f55727','#ba9def','#ff7495','#c3ec52']
    $('.leftIcon li').hover(
        function(){
            // 移入
        // let index = $(this).index();
        
        $(this).css({
            width:'70px',
            backgroundColor:bgColor[$(this).index()]
        })
        $(this).addClass('on');
        $(this).find('span').show();
        
    },
    function(){
        // 移出
        $(this).css({
            width:'35px',
            backgroundColor:''
        })
        $(this).removeClass('on');
        $(this).find('span').hide();
    }).click(function(){
        // 获取li标签索引
        // let index = $(this).index();
        // 获取对应li楼层索引
        // let lou = $('.floor').eq(index)
        // console.log(lou)
        // 获取当前楼层距离网页顶部距离
        // let floorTop = lou.offset().top;
        // console.log(floorTop)
        // 综合写法
        let floorTop = $('.floor').eq($(this).index()).offset().top

        // 将高度给滚轮
        $('html,body').animate({
            'scrollTop' : floorTop-120,
        },300,'linear')
    })
   






}

