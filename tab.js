$(function(){
    $.fn.extend({
        //需要配置的参数
        //1。
        
        //按钮的插入
        toggle:function(){
            //创建插入ul
            var ul = $('<ul></ul>');
            ul.appendTo(this);
            //将图片全部隐藏
            $(".cut").find("img").css({
                display:"none"
            })
            //将第一张图片显示
            $(".cut").find("img").eq(0).css({
                display:"block"
            })
            //创建li
            for(var i=0;i<this.find("img").length;i++){
                li = $("<li></li>");
                li.appendTo(ul);
                //将li里面写字
                li.html("点击我"+i)
                //li的样式
                li.css({
                    width:"100px",
                    textAlign:"center",
                    borderRadius:"5px",
                    lineHeight:"30px",
                    listStyle:"none",
                    height:"30px",
                    float:"left",
                    margin:"20px",
                    cursor: "pointer",
                    backgroundColor:"green",
                })
            }
            var n = 0;
            //li点击事件与图片的切换
            this.find("li").click(function(){
                    $(".cut").find("img").css({
                        display:"none",
                    })
                    console.log($(this).index())
                    $(".cut").find("img").eq($(this).index()).fadeIn()
                    // $(this).index().li.css({
                    //     backgroundColor:"red"
                    // });
            })
            //默认设置第一个li的背景色
            ul.find("li").eq(0).css({
                backgroundColor:"red"
            })
        }
    })


    $(".cut").toggle({

    })
})