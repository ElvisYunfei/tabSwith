$(function(){
    $.fn.extend({
        toggle:function(obj){
        //需要配置的参数
        //1。
        //效果
        obj.result = obj.result || "slide";
        obj.backgroundColor = obj.backgroundColor ||"green";
        obj.hoverColor = obj.hoverColor ||"red"
            //创建插入ul
                var ul = $('<ul></ul>');
                ul.insertBefore(this);
                ul.css({
                    height:"100px"
                })
                //创建li
                for(var i=0;i<this.find(".text").length;i++){
                    li = $("<li></li>");
                    li.appendTo(ul);
                    //将li里面写字
                    li.html("点击我"+i)
                    //li的样式
                    li.css({
                        width:"65px",
                        textAlign:"center",
                        borderRadius:"5px",
                        lineHeight:"30px",
                        listStyle:"none",
                        height:"30px",
                        float:"left",
                        margin:"20px",
                        cursor: "pointer",
                        backgroundColor:obj.backgroundColor
                    })
                }
                //渐显
            if(obj.result=="fadeIn"){
                console.log(1)
                //将图片全部隐藏
                $(".cut").find(".text").css({
                    display:"none"
                })
                //将第一张图片显示
                $(".cut").find(".text").eq(0).css({
                    display:"block"
                })
               
                //li点击事件与图片的切换
                ul.find("li").click(function(){
                    $(".cut").find(".text").css({
                        display:"none",
                    })
                    var nown=$(this).index();
                    $(".cut").find(".text").eq(nown).fadeIn();
                    ul.find('li').css({
                        backgroundColor:obj.backgroundColor
                    })
                    $(this).css({
                        backgroundColor:obj.hoverColor
                    });
                })
                //默认设置第一个li的背景色
                ul.find("li").eq(0).css({
                    backgroundColor:obj.hoverColor
                })
                ul.css({
                    height:'70px'
                })
            }
            //滑动
            if(obj.result=="slide"){
                div =$("<div></div>")
                div.appendTo(this)
                this.find(".text").appendTo(div);
                this.css({
                   width:(this.find('.text').eq(0).width()),
                   overflow:"hidden"
                })
               div.css({
                   width:(this.find('.text').eq(0).width()*(this.find('.text').length))
               })
               $('body').find("li").click(function(){
                    var now = $(this).index()
                    div.eq(now).css({
                        display:"block"
                    })
                    div.animate({
                        marginLeft:-div.find('.text').eq(0).width()*now
                    })
                })
                ul.find("li").click(function(){
                    var nown=$(this).index();
                    $(".cut").find(".text").eq(nown).fadeIn();
                    ul.find('li').css({
                        backgroundColor:obj.backgroundColor
                    })
                    $(this).css({
                        backgroundColor:obj.hoverColor
                    });
                })
                //默认设置第一个li的背景色
                ul.find("li").eq(0).css({
                    backgroundColor:obj.hoverColor
                })
                ul.css({
                    height:'70px'
                })
            }
            
        }
    })

    $(".cut").toggle({
        result:"fadeIn",
        backgroundColor:"#f99",
        hoverColor:"#00f"
    })
})