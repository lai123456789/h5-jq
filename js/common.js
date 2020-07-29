/*换算比例1rem=100px
* 750可以换成对应UI设计稿的尺寸  参考链接：https://www.cnblogs.com/agansj/p/8243880.html  https://www.jianshu.com/p/21f30c808198*/
!function(n){
    var  e=n.document,
        t=e.documentElement,
        i=750,
        d=i/100,
        o="orientationchange"in n?"orientationchange":"resize",
        a=function(){
            var n=t.clientWidth||320;n>750&&(n=750);
            t.style.fontSize=n/d+"px"
        };
    e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);
