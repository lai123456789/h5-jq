// $(document).on("click",".left2-title img",function (e) {
//     $(this).addClass("img-bg").siblings().removeClass("img-bg")
// })
// $(document).on("click",".left2-title .indexC1",function (e) {
//     $("#indexC1").show()
//     $("#indexC2").hide()
// })
// $(document).on("click",".left2-title .indexC2",function (e) {
//     $("#indexC2").show()
//     $("#indexC1").hide()
// })
//
$(document).on("click","#no",function (e) {
    $(this).hide().next().show()
})
$(document).on("click","#yes",function (e) {
    $(this).hide().prev().show()
})
