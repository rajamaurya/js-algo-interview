(async ()=>{

    const imgs = await fetch("https://api.imgflip.com/get_memes");
    
    let response = await imgs.json().then(data=>data['data']);
    let list = response['memes'];
    let current_img = list[0];
    if(current_img){
        const container = document.querySelector("#slide");
        container.setAttribute("width", "400px");
        container.setAttribute("height", "400px")

        const img = document.createElement("img");
        img.setAttribute("src", current_img.url);
        img.style.width = "200px";
        img.style.height = "200px";
        img.style.border = "1px solid gray";
        container.appendChild(img);
        
        let current_index = 0;

        img.onclick = function(){
           callImg();
        }
        function callImg(){
            let nextImg = list[current_index];
            img.src =  nextImg.url;
        }
        function next(){
            current_index++;
            if(current_index == list.length-1){
                current_index = 0;
            }
            callImg();
        }
        function prev(){
            current_index--;
            if(current_index == -1){
                current_index = list.length-1;
            }
            callImg();
        }
        document.getElementById("next").addEventListener("click",next)
        document.getElementById("prev").addEventListener("click",prev)
    }
    

})();