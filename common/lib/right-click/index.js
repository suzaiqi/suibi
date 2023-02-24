import setStyle from "../setStyle/index.js";
import ulList from "./ulList.js";
export default function(el,options,callback){
    el.addEventListener("contextmenu", function (event) {
        // 取消默认事件
        event.preventDefault();

        // 取消冒泡事件
        event.stopPropagation();

        options.x = event.clientX;
        options.y = event.clientY;
        if (event.button == 2) {
            ulList(el,options,function(){

                callback && callback()
            });
        }
  });
}