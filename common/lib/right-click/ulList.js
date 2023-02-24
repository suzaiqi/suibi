import setStyle from "../setStyle/index.js";
export default function(el,options,callback) {
        // el.innerHTML = '';
        var diaglogEls = document.getElementsByClassName("refreshDialog");
        if(diaglogEls.length > 0) {
            for(var i = 0; i < diaglogEls.length; i++) {
                diaglogEls[i].parentNode.removeChild(diaglogEls[i]);
            }
        }
        var dialogEl = document.createElement("div");
        el.appendChild(dialogEl);
        var leftX = 0;
        var topY = 0;

        if(options.x < 5) {
            leftX = 6;
        }else if (options.x > el.clientWidth - 150 && options.id == 1) {
            leftX = options.x - 150;
        } else {
            leftX = options.x;
        }

        if (options.y > el.clientHeight - 120 && options.id == 1) {
            topY = options.y - 120;
        } else {
            topY = options.y;
        }


        setStyle(dialogEl, {
        position: "absolute",
        width: "150px",
        minHeight: "120px",
        left: leftX + 'px',
        top: topY + 'px',
        backgroundColor: 'white',
        });
        dialogEl.setAttribute("class","refreshDialog")

        var openEl = document.createElement("div");
        dialogEl.appendChild(openEl);
        setStyle(openEl, {
        textAlign: "center",
        width: "150px",
        backgroundColor: "#fff",
        borderBottom: "1px solid black",
        });
        openEl.innerText = options.id == 2 ? "打开" : "刷新";

        (function (openEl) {
        openEl.addEventListener("mouseover", function () {
            setStyle(openEl, {
            backgroundColor: "rgb(183 181 181)",
            color: "black",
            cursor: "pointer",
            });
        });
        openEl.addEventListener("mouseout", function () {
            setStyle(openEl, {
            backgroundColor: "",
            color: "black",
            cursor: "pointer",
            });
        });

        openEl.addEventListener("click",function(){
            if(options.id == 2) {

                // var snakerWindow = document.createElement('div');
                // el.appendChild(snakerWindow);

                // setStyle(el,{
                //     position: 'absolute',
                //     top: '500px',
                //     left: '500px',
                //     width: '500px',
                //     heigth: '500px',
                //     backgroundColor: "red",
                // })

                var diaglogEls = document.getElementsByClassName("refreshDialog");
                for(var j = 0; j < diaglogEls.length; j++){
                    diaglogEls[j].style.display = "none";
                }
                callback && callback();

            }else if (options.id == 1) {
                var diaglogEls = document.getElementsByClassName("refreshDialog");
                for(var j = 0; j < diaglogEls.length; j++){
                    diaglogEls.style.display = "none";
                }
            }
        })
        })(openEl);
}