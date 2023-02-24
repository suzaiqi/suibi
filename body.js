import setStyle from "./common/lib/setStyle/index.js";

import rightClick from "./common/lib/right-click/index.js";

export default function (options) {
  var el = options.el;
  rightClick(el,{id: 1});

  //贪吃蛇图标入口
  var snakeEl = document.createElement("div");
  el.appendChild(snakeEl);

  setStyle(snakeEl, {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: 'url("./image/snaker.png")',
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    width: el.clientWidth * 0.04 + "px",
    height: el.clientHeight * 0.06 + "px",
    backgroundSize: "50px 50px",
  });

  var dialogEl = null;

  var snakeGameEl = document.createElement("div");
  el.appendChild(snakeGameEl);

  setStyle(snakeGameEl, {
    top: el.clientHeight * 0.3 + "px",
    left: el.clientWidth * 0.3 + "px",
    display: "none",
    width: el.clientWidth * 0.4 + "px",
    height: el.clientHeight * 0.4 + "px",
    position: "absolute",
    border: "1px solid red",
  })


  rightClick(snakeEl,{id: 2},function(){
    snakeGameEl.style.display = "block";
  });
  
//   snakeEl.addEventListener("c", function (event) {
//     if (event.button == 2) {
//       event.preventDefault();
//       event.stopPropagation();
//       if (dialogEl == null) {
//         dialogEl = document.createElement("div");
//         snakeEl.appendChild(dialogEl);
//         setStyle(dialogEl, {
//           position: "absolute",
//           width: "100px",
//           minHeight: "50px",
//           left: "50px",
//           top: "50px",
//         });

//         var openEl = document.createElement("div");
//         dialogEl.appendChild(openEl);
//         setStyle(openEl, {
//           textAlign: "center",
//           widht: "100px",
//           backgroundColor: "#fff",
//           borderBottom: "1px solid black",
//         });
//         openEl.innerText = "打开";

//         (function (openEl) {
//           openEl.addEventListener("mouseout", function () {
//             setStyle(openEl, {
//               backgroundColor: "rgb(183 181 181)",
//               color: "black",
//               cursor: "pointer",
//             });
//           });
//         })(openEl);
//       } else {
//         dialogEl.style.display = "block";
//       }
//     }
//   });
}
