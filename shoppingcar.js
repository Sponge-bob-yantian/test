$(function(){

    // 全选
    $('.allSelect').change(function(){
        let status = $(this).prop('checked');
        // console.log(status)
        $('.sigAllSelect,.sigSelect').prop('checked',status);
        allCount();

    })
    $('.sigAllSelect').change(function(){
        let statuss = $(this).prop('checked');
        $(this).siblings('div').find('.sigSelect').prop('checked',statuss);
        allCount();

    })
    // 反选
    $('.sigSelect').click(function(){
        // 获取商品数量
        // let len = $('.sigSelect').length;
        // 获取选中的商品数量
        let len=$(this).closest('.title').find('.sigSelect:checked').length;
        // 获取未选中的商品数量
        let len2=$(this).closest('.title').find('.sigSelect').length;
        // console.log(len2,len)
        // 判定选中和未选中的商品数量是否一致,一致则店铺复选框勾选,否,则取消勾选
        if(len == len2){
            $(this).closest('.title').find('.sigAllSelect').prop('checked',true); 
        }else{
            $(this).closest('.title').find('.sigAllSelect').prop('checked',false); 
        }
        // sigSel(this);
        sigAll(this);
        allCount();


    })
    $('.sigAllSelect').click(function(){
        // 获取商品数量
        // let slen = $('.sigSelect , .sigAllSelect').length;
        // 获取选中数量
        /* let selsLen = $('.sigSelect:checked').length + $('.sigAllSelect:checked').length;
        console.log(selsLen)
        if(slen == selsLen){
            $('.allSelect').prop('checked',true);
        }else{
            $('.allSelect').prop('checked',false);
        } */
            
        /* $('.sigAllSelect').each(function(){
            if($('.sigAllSelect').prop('checked')){
                $(this).closest('.father').siblings('.down').find('.allSelect').prop('checked',true);
            }else{
                $(this).closest('.father').siblings('.down').find('.allSelect').prop('checked',false);
            }
            console.log($('.sigAllSelect:checked'))

        }) */


        /* if($('.sigAllSelect:checked')){
            $(this).closest('.father').siblings('.down').find('.allSelect').prop('checked',true);
        }else{
            $(this).closest('.father').siblings('.down').find('.allSelect').prop('checked',false);

        } */
        sigAll(this);
        allCount();

    })



    // 增加
    $('.addNum').click(function(){
        $(this).siblings('.reNum').css('cursor','pointer');
        // 获取value值
        let num = $(this).siblings('input').val();
        num++;
        $(this).siblings('input').val(num);
        allCount();

    })
    // 减少
    $('.reNum').click(function(){
        // 获取input框value值
        let num = $(this).siblings('input').val();
        if(num > 1){
            num--;
        }else{
            $(this).css('cursor','not-allowed')
        }
        $(this).siblings('input').val(num);
        allCount();
    })


    function sigAll(){
        let ss=$('.sigAllSelect:checked').length;
        let bb=$('.sigAllSelect').length

        if(ss==bb){
            $('.allSelect').prop('checked',true)
        }else{
            $('.allSelect').prop('checked',false) 
        }
    }
    function sPrice(obj,num){
        let subtotal = 0;
        //获取当前商品的单价
        let sigPrice=$(obj).siblings('div').find('.sigPrice').html();
        //计算小计(积)  单价* 数量
        let sigTotal=(sigPrice*num).toFixed(2);
        //把计算结果给到小计
        // $(obj).closest('tr').find('.sigT').html(sigTotal)
    }
    function allCount(){
        let allNum = 0;
        let allPrice = 0;
        $('.sigSelect:checked').each(function(){
            var allC = parseInt($(this).closest('.sList').find('.num').val());
            // 数量求和
            allNum += allC;
            let allP=parseInt($(this).closest('.sList').find('.sigPrice').html())*allC;
            //价格求和
            allPrice += allP;
        // console.log(allP,typeof allP)
            
        })
        $('.allNum').html(allNum);
         allPrice = allPrice.toFixed(2);
        $('.allPrice').html('&yen;'+allPrice);
        
    }

    /* function sigSel(){
        let len=$('.sigSelect:checked').length;
        // 获取未选中的商品数量
        let len2=$('.sigSelect').length;
        // console.log(len2,len)
        // 判定选中和未选中的商品数量是否一致,一致则店铺复选框勾选,否,则取消勾选
        if(len == len2){
            $('.sigAllSelect').prop('checked',true); 
        }else{
            $('.sigAllSelect').prop('checked',false); 
        }
    } */
    











})