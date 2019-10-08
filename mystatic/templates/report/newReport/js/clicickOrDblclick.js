
var isdb;  
function aa(){  
    isdb=false;  
    window.setTimeout(cc, 500);
    function cc(){  
        if(isdb)
             return;  
        alert("单击")  
    }  
}  
function bb(){  
    isdb=true;  
    alert("双击")  
}