import currentMonth from "./common/view/currentMonth/index.js"; //展示天

export default function (options) {
  var el = options.el;

  el.style.display = "inline-block";
  el.style.lineHeight = "normal";

  var hourEl = document.createElement("div");
  el.appendChild(hourEl);

  var getHourTime = function (el) {
    var hourTime = 0;

    var hh = new Date().getHours(),
      mm = new Date().getMinutes(),
      ss = new Date().getSeconds();

    if (el == "hourEl") {
      hourTime = hh + ":" + (mm < 10 ? "0" + mm : mm);
    } else {
      hourTime =
        hh + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
    }

    return hourTime;
  };

  setInterval(() => {
    hourEl.innerHTML = getHourTime("hourEl");
  }, 1000);

  hourEl.addEventListener("mousemove", function () {
    el.style.backgroundColor = "#e8e8ec";
    el.style.cursor = "default";
  });

  hourEl.addEventListener("mouseleave", function () {
    el.style.backgroundColor = "hsl(248deg 12% 87%)";
  });

  //添加日历弹窗
  var dateDisplay = "none";

  var dateEl = document.createElement("div");
  el.appendChild(dateEl);

  dateEl.style.position = "fixed";
  dateEl.style.display = "none";
  dateEl.style.bottom = el.clientWidth * 2.3 + "px";
  dateEl.style.right = "0px";
  dateEl.style.width = el.clientWidth * 20 + "px";
  dateEl.style.height = el.clientWidth * 25 + "px";
  dateEl.style.zIndex = 6;
  dateEl.style.borderTop = "1px solid #aaaaaa";
  dateEl.style.borderLeft = "1px solid #aaaaaa";
  dateEl.style.backgroundColor = "hsl(248deg 12% 87%)";

  dateEl.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });

  //在弹窗中添加  展示时间区域   当前月日历（包含农历） 添加可隐藏日历行程
  var timeTitleEl = document.createElement("div");
  dateEl.appendChild(timeTitleEl);

  timeTitleEl.style.height = el.clientWidth * 25 * 0.2 + "px";

  timeTitleEl.style.borderBottom = "1px solid #aaaaaa";

  //获取 年 月 日

  var timeYear = function(el){
    var year = new Date().getFullYear(),
        month = new Date().getMonth() + 1,
        today = new Date().getDate();
        if(el == "yearEl"){
        return year + "年" + month + "月" + today + "日 ";
        }else {
          return year + "年" + month + "月";
        }
    
  }

  //添加时间显示

  var timeHourEl = document.createElement("div");
  timeTitleEl.appendChild(timeHourEl);

  timeHourEl.style.height = el.clientWidth * 25 * 0.2 * 0.7 + "px";
  timeHourEl.style.fontSize = "43px";
  timeHourEl.style.lineHeight = el.clientWidth * 25 * 0.2 * 0.7 + "px";
  timeHourEl.style.fontFamily = "fangsong";
  timeHourEl.style.paddingLeft = "20px";

  setInterval(() => {
    timeHourEl.innerHTML = getHourTime();
  }, 1000);

  var yearEl = document.createElement("div");
  timeTitleEl.appendChild(yearEl);

  yearEl.innerText = timeYear("yearEl");
  yearEl.style.paddingLeft = "22px";
  yearEl.style.cursor = "pointer";
  yearEl.style.color = "#004275";

  yearEl.addEventListener("mousemove",function(){
    yearEl.style.color = "rgb(183 181 181)";
  })
  yearEl.addEventListener("mouseleave",function(){
    yearEl.style.color = "#004275";
  })


  var calendarEl = document.createElement("div");
  dateEl.appendChild(calendarEl);

  calendarEl.style.height = el.clientWidth * 25 * 0.55 + "px";

  var calendarTitleEl = document.createElement("div");
  calendarEl.appendChild(calendarTitleEl);

  calendarTitleEl.style.height = el.clientWidth * 25 * 0.4 * 0.2 + "px";

  calendarTitleEl.style.textAlign = "right";
  calendarTitleEl.style.position = "relative";
  calendarEl.style.borderBottom = "1px solid #aaaaaa";

  var monthEl = document.createElement("div");
  calendarTitleEl.appendChild(monthEl);

  monthEl.style.position = "absolute";
  monthEl.style.left = "0px";
  monthEl.style.height = el.clientWidth * 25 * 0.4 * 0.2 + "px";
  monthEl.style.lineHeight = el.clientWidth * 25 * 0.4 * 0.2 + "px";
  monthEl.innerText = timeYear();
  monthEl.style.paddingLeft = "23px";

  var topEl = document.createElement("div");
  calendarTitleEl.appendChild(topEl);
  topEl.style.height = el.clientWidth * 25 * 0.4 * 0.2 + "px";
  topEl.style.lineHeight = el.clientWidth * 25 * 0.4 * 0.2 + "px";
  topEl.style.display = "inline-block";
  topEl.style.width = el.clientWidth * 20 * 0.1 + "px";
  topEl.style.textAlign = "center";
  topEl.style.fontSize = el.clientWidth * 20 * 0.08 + "px";
  topEl.style.fontWeight = 300;

  topEl.innerText = "∧";

  var bottomEl = document.createElement("div");
  calendarTitleEl.appendChild(bottomEl);
  bottomEl.style.height = el.clientWidth * 25 * 0.4 * 0.2 + "px";
  bottomEl.style.lineHeight = el.clientWidth * 25 * 0.4 * 0.2 + "px";
  bottomEl.style.display = "inline-block";
  bottomEl.style.width = el.clientWidth * 20 * 0.1 + "px";
  bottomEl.style.textAlign = "center";
  bottomEl.style.fontSize = el.clientWidth * 20 * 0.08 + "px";
  bottomEl.style.fontWeight = 300;

  bottomEl.innerText = "∨";

  //日历内容

  var calendarContentEl = document.createElement("div");
  calendarEl.appendChild(calendarContentEl);

  calendarContentEl.style.height = el.clientWidth * 25 * 0.5 + "px";

  var calcDay = function(year,month){
    var year = year || new Date().getFullYear();
    var month = month || new Date().getMonth();

    currentMonth(calendarContentEl,el.clientWidth * 25 * 0.8,el.clientWidth * 20,year,month);

  }

  calcDay();
  


  //在时间上添加点击事件 --加动画效果

  el.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (dateDisplay == "none") {
      dateDisplay = dateEl.style.display = "block";
    } else {
      dateDisplay = dateEl.style.display = "none";
    }
  });

  //在整个body上添加一个点击事件

  document.body.addEventListener("click", function () {
    dateDisplay = dateEl.style.display = "none";
  });
}
