import {dateArray} from "../../lib/calendar/index.js";

/**
 * 创建日历图
 * 
 * @param {*} el -节点
 * @param {*} height 高
 * @param {*} width 宽
 * @param {*} years 年
 * @param {*} months 月
 */

export default function(el,height,width,years,months){

    el.innerHTML = "";

    var weeks = ["日", "一", "二", "三", "四", "五", "六"];

    el.style.padding = "5px 20px 5px 20px";

    var weeksTitle = document.createElement("div");//周日到周六
    el.appendChild(weeksTitle);


    weeksTitle.style.height = height * 0.1 + "px";
    weeksTitle.style.width = width + "px";
    

    var weekContent = document.createElement("div");//展示的天数
    el.appendChild(weekContent);

    weekContent.style.height = (height - 10) * 0.8 + "px";


    for(var i = 0; i < weeks.length; i++){
        var weekDayEl = document.createElement("div");
        weeksTitle.appendChild(weekDayEl);

        weekDayEl.style.display = "inline-block";
        weekDayEl.style.width = (width - 40 -20) / 7 + "px";
        weekDayEl.style.height = height * 0.1 - 10 + "px";
        weekDayEl.style.textAlign = "center";
        weekDayEl.innerText = weeks[i];
    }


    
    var calcCurrentMonth = function(){
       var year = years,
            month = months;


            var dayArray = dateArray(year, month);



            //前置日期
            for(var i = 0; i < dayArray.leadDaysArray.length; i++){
                var dayEl = document.createElement("div");
                weekContent.appendChild(dayEl);

                dayEl.style.width = (width - 40 -20) / 7 + "px";
                dayEl.style.display = "inline-block";
                dayEl.style.height = (height - 10) * 0.8 / 10 + "px";
                dayEl.style.textAlign = "center";
                dayEl.style.color = "#aaaaaa";
                dayEl.innerText = dayArray.leadDaysArray[i];

            }

            //当前月
            for(var i = 0; i < dayArray.daysArray.length; i++){
                var dayEl = document.createElement("div");
                weekContent.appendChild(dayEl);

                dayEl.style.width = (width - 40 -20) / 7 + "px";
                dayEl.style.display = "inline-block";
                dayEl.style.height = (height - 10) * 0.8 / 10 + "px";
                dayEl.style.textAlign = "center";
                dayEl.innerText = dayArray.daysArray[i];

            }

            //后置天数
            for(var i = 0; i < dayArray.afterDays.length; i++){
                var dayEl = document.createElement("div");
                weekContent.appendChild(dayEl);

                dayEl.style.width = (width - 40 -20) / 7 + "px";
                dayEl.style.display = "inline-block";
                dayEl.style.height = (height - 10) * 0.8 / 10 + "px";
                dayEl.style.textAlign = "center";
                dayEl.style.color = "#aaaaaa";
                dayEl.innerText = dayArray.afterDays[i];

            }

    }

    calcCurrentMonth();


}