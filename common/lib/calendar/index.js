
/**
 * 计算日历视图的天数组
 */

function dateArray(year,month){


    //获得本月天数
    var days = calcDays(year,month + 1);


    //获取1号是周几 0-周日 ..., 6-周六
    var week = new Date(year + '-' + (month + 1) + '-01').getDay();

    //添加前置天数

    var leadDays = week;

    //添加后置天数
    var afterDays = 42 - leadDays - days;




    //定义一个返回数组
    var datesArray = {
        leadDaysArray: [],
        daysArray: [],
        afterDays: [],
    };

    //获取前置天数的数组
    //获取上一个月是哪个月，有多少天
    var lastMonthDays = null;

    if(month == 0){
        lastMonthDays = calcDays(year - 1, 12);
    } else {
        lastMonthDays = calcDays(year,month);
    }

    for(var i = leadDays; i > 0; i--){

       var perDay = lastMonthDays - i + 1;
        datesArray.leadDaysArray.push(perDay);
    }

    //获取后置日期
    for(var i = 0; i < afterDays; i++){
        datesArray.afterDays.push(i + 1);
    }

    //获取当前月日期
    for(var i = 0; i < days; i++){
        datesArray.daysArray.push(i + 1);
    }

    return datesArray;

}


/**
 * 计算每个月多少天
 */

function calcDays(year,month){

    if(month == 2) {
        if((year % 4 != 0) || (year % 100 == 0 && year % 400 != 0)) {
            return 28
        } else {
            return 29
        }
    } else {
        return [31,-1,31,30,31,30,31,31,30,31,30,31][month - 1];
    }

}


export{
    dateArray,
}