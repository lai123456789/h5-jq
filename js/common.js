/*换算比例1rem=100px
* 750可以换成对应UI设计稿的尺寸  参考链接：
* 1、本项目选用该方案：https://www.cnblogs.com/agansj/p/8243880.html
* 2、参考方案 https://www.jianshu.com/p/21f30c808198
* 3、参考方案 https://juejin.im/post/5ad4bcdd6fb9a028e33bedab  rem+vw*/
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

//ajax封装请求调用
// function ajaxRequest(url,action,param,callbackData){
//     $.ajax({
//         type:action,
//         url:url,
//         data:param,
//         dataType:"json",
//         success:callbackData
//     })
// }
// ajaxRequest("../pi/api/login","post",{name:"john"},function (res) {
//     console.log(res);
// })









/***
 * 关于小程序内嵌h5  页面样式可能会有变化 可考虑父组件加入以下代码  参考链接https://www.cnblogs.com/guoqiaoqiao/p/13027018.html
 * (function(doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
        dpr = 1,
        scale = 1 / dpr,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEl.dataset.dpr = dpr;
    var metaEl = doc.createElement('meta');
    metaEl.name = 'viewport';
    metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
    docEl.firstElementChild.appendChild(metaEl);
    var recalc = function() {
        var width = docEl.clientWidth;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }
        // 乘以100，px : rem = 100 : 1
        docEl.style.fontSize = 100 * (width / 750) + 'px';
    };
    recalc()
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
 */
