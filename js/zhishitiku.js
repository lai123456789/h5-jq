$(document).on("click",".share",function (e) {
    $(".main-content").hide().next().show()
})
$(document).on("click",".close",function (e) {
    $(".modal").hide()
})
function getRadioValue(){ //获取单选框选中的radio值
    var radioValue;
    radioValue=document.getElementsByName("demo");
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
function getCheckboxValue(){ //获取复选框选中的checkbox值
    var CheckboxValue = new Array();
    $(".k3 ul li input:checkbox[name='demo']:checked").each(function(i){
        CheckboxValue[i] = $(this).val();
    });
    return CheckboxValue;
     //CheckboxValue为一个数组 即选中的checkbox的所有值
}
$(document).on("click",".bottomImg",function (e) {
    let selectVal;
    if(5>3){ //如果当前类型是单选 选择单选值方法
        selectVal = getRadioValue()
        if(selectVal == null || selectVal == ""){
            alert("请先选择答案！")
            return;
        }
    }else if(5>6){
        //如果当前类型是多选 选择多选值方法（数组）
        selectVal = getCheckboxValue()
        if(selectVal == [] || selectVal.length == 0){
            alert("请先选择答案！")
            return;
        }
    }
    console.log(selectVal)  //selectVal为选中的值  不管是多选还是单选 只需传该字段到后台地址即可
    $.ajax({
        type: "POST",
        url: "/url.do",
        data: selectVal,
        dataType : "json",
        success: function(respMsg){
            //提交值之后后台判断对错  如果返回字段是 对则跳转下一题，错则弹出答题错误，如果全对，则弹出答题成功
            if(){ //如果全部答对，则显示答题成功弹框
                $(".fail-content").hide()
                $(".main-content").show()
                $(".modal").show()
            }else if(){
                //如果答题失败，则显示答题失败弹框
                $(".fail-content").show()
                $(".main-content").hide()
                $(".modal").show()
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
