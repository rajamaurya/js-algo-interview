const div = document.createElement('div');

window.onresize = function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    div.style.width = width + "px";
    div.style.height = height+"px";
    div.style.backgroundColor = "magenta";
    document.body.appendChild(div);
}


