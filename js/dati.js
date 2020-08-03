$(document).on("click",".bottomPrevImg",function (e) {
    window.history.back();  //返回上一页
})
function getRadioValue(radioName){ //获取选中的radio值
    var radioValue;
    radioValue=document.getElementsByName(radioName);
    if(radioValue!=null){
        var i;
        for(i=0;i<radioValue.length;i++){
            if(radioValue[i].checked){
                return radioValue[i].value;
            }
        }
    }
    return null;
}
$(document).on("click",".bottomNextImg",function (e) {
    var radiovalue = getRadioValue("demo");//demo为radio的name值
    console.log(radiovalue) //选中的值
    var params = radiovalue
    // $(".labelfor").attr('for','modal_1')  //加这一行是显示弹框
    $.ajax({
        type: "POST",
        url: "/url.do",
        data: params,
        dataType : "json",
        success: function(respMsg){
            window.location.href = "./punch/clock_frm.html?modFlag="+modFlag+'&role='+role;//跳转页面带参数
        }
    });
    // $.ajax({
    //     type: "POST",
    //     url: "/url.do",
    //     data: params,
    //     dataType : "json",
    //     success: function(respMsg){
    //     }
    // });
})
