var i = 0;
        window.onload=function(){
            var main=document.getElementById("blankBackground");
            var bt=document.getElementById("bt");
            bt.onclick=function(){
            var len=i;
            var frame=document.createElement("div");
            frame.id="oneBlank"+len;
            frame.setAttribute("class","content");
            var button=document.createElement("input");
            button.type="button";
            button.id="bt"+len;
            button.value="删除";
            button.setAttribute("style","margin-left:89%;margin-top:62.8%;");
            var line=document.createElement("div");
            line.setAttribute("class","lineOfBottomOfFrame");
            frame.appendChild(button);
            frame.appendChild(line);
            main.appendChild(frame);
            button.onclick=function(){
                 button.parentNode.remove(button.parentNode);
            }
            i = i + 1;
            }
        }