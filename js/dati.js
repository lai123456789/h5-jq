$(document).on("click",".bottomPrevImg",function (e) {
    // window.history.back();  //返回上一页
    console.log("Eee")
    window.location.href = "http://www.baidu.com?Id=1";//跳转页面带参数
})
$(document).on("click",".bottomNextImg",function (e) {
    window.location.href = "http://www.baidu.com?Id=2";//跳转页面带参数
})

// function f() {
//     if(){ //如果当前为第一页  则上一题按钮 变灰
//         $(".bottomPrevImg").addClass("active")
//     }
//     if(){
//         //如果当前为最后一页  则下一题按钮 变灰
//         $(".bottomNextImg").addClass("active")
//     }
// }
