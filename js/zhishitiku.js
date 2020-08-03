$(document).on("click",".share",function (e) {
    $(".main-content").hide().next().show()

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
$(document).on("click",".bottomImg",function (e) {
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
            //提交值之后后台判断对错  如果返回字段是 对则跳转下一题，错则弹出答题错误，如果全对，则弹出答题成功

            if(){ //如果全部答对，则显示答题成功弹框
                $(".labelfor").attr('for','modal_1')   //加这一行是显示弹框
            }else if(){
                //如果答题失败，则显示答题失败弹框
                $(".fail-content").show()
                $(".main-content").hide()
                $(".labelfor").attr('for','modal_1')
            }else{
                //如果答对一题，则不显示弹框 跳转下一题
                window.location.href = "./punch/clock_frm.html?modFlag="+modFlag+'&role='+role;//跳转页面带参数
            }

        }
    });
})

/**
 * 页面接收参数， 并且将参数转为可用的json格式时， 可以用下面的方法：
 var url = location.search; //获取url中"?"符后的字串 ('?modFlag=business&role=1')
 var theRequest = new Object();
 if ( url.indexOf( "?" ) != -1 ) {
  var str = url.substr( 1 ); //substr()方法返回从参数值开始到结束的字符串；
  var strs = str.split( "&" );
  for ( var i = 0; i < strs.length; i++ ) {
    theRequest[ strs[ i ].split( "=" )[ 0 ] ] = ( strs[ i ].split( "=" )[ 1 ] );
  }
  console.log( theRequest ); //此时的theRequest就是我们需要的参数；
 */
