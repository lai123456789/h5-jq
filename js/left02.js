$(document).on("click",".eft02_right1 div",function (e) {
    $(this).addClass("left02_active").siblings().removeClass("left02_active")
})
$(document).on("click",".eft02_right1 #r1",function (e) {
    $(".eft02_right2").show()
    $(".eft02_right3").hide()
})
$(document).on("click",".eft02_right1 #r2",function (e) {
    $(".eft02_right3").show()
    $(".eft02_right2").hide()
})
