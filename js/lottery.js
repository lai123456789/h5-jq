window.onload = function() {
  var list = document.querySelector(".lottery-list");
  var spans = list.querySelectorAll("div");
  var tipElement = document.getElementById("tipBut");

  var closeElement = document.getElementById("close");
  var close2Element = document.getElementById("close2");
  let winElement = document.getElementById("winModal");
  let noWinElement = document.getElementById("noWinModal");

  // console.log("spans=", JSON.stringify(spans));

  function start() {
    spans.forEach(function(el, index) {
      if (index != 0) {
        el.classList.remove("active"); // 清空上一次结果
      }
    });
    tipElement.style.cursor = "not-allowed";
    tipElement.onclick = null;
    let num = -1; //奖品序号
    let times = parseInt(Math.random() * (30 - 18 + 1) + 18, 10);
    let time = 0; //当前的旋转次数
    let speed = 100; //转盘速度
    timer = setInterval(function() {
      num++;
      time++;
      if (num > 3) {
        num = 0;
        spans[0].classList.add("active");
        spans[3].classList.remove("active");
      } else if (num == 0) {
        spans[num].classList.add("active");
        spans[3].classList.remove("active");
      } else {
        spans[num].classList.add("active");
        spans[num - 1].classList.remove("active");
      }
      if (time > times) {
        tipElement.onclick = start;
        tipElement.style.cursor = "pointer";
        clearInterval(timer);

        //有奖弹窗
        winElement.classList.remove("hide");

        //无奖弹窗
        // noWinElement.classList.remove("hide");
      }
    }, speed);
  }
  tipElement.onclick = start;

  function close() {
    winElement.classList.add("hide");
    noWinElement.classList.add("hide");
  }
  closeElement.onclick = close;
  close2Element.onclick = close;
};
