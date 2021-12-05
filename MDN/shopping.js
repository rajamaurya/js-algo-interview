const store = [];

const $ = (element)=> document.querySelector(element);
const create = (node)=>document.createElement(node)
const $$ = (element)=> document.querySelector(element);

const addBtn = $("#addBtn");
const input = $("input");
const list =  $("div#loaderDiv");
const product_list = $("#product_list");

const toggleLoading = (isLoading)=> {
    if(isLoading){
        list.classList.add("show");
    }else{
        list.classList.add("hide");
    }
}
async function getData(){
    const data = await fetch("https://api.openbrewerydb.org/breweries").then(data=>data);
    const res = await  data.json().then(data=>data);
    return res;
}
function showList(product_list){
    
    if(product_list!==null){
        const pList = $$(".list");
        for(let data of product_list){
            const list = create("div");
            list.textContent = data.city + "=> " + data.name;
            pList.appendChild(list);
        }
    } 
   
}
product_list.onclick = async ()=>{
     toggleLoading(true);
     const data = await getData();

     if(data){
         toggleLoading(false);
         showList(data);
     }
}
window.onload = function(){
    input.focus();
}
function deleteItem(id){
    list.classList.remove("show");
    list.classList.add("hide");
   return store.filter(element=> element.id !== id);
}
addBtn.onclick = function(){
    const product_data = {
        id: Math.floor(Math.random() * 4),
        val: input.value
    }
    store.push(product_data);
    const newItemType = create("input");
    newItemType.setAttribute("type", "checkbox");
    const newItem = create("h4");
    newItem.textContent = product_data.val;
    const delBtn = create("button");
    delBtn.value = "Delete";
    delBtn.textContent = "Delete";
    list.classList.add("show");
    list.appendChild(newItemType)
    newItemType.parentNode.insertBefore(newItem, newItemType.nextSibling)
    newItem.parentNode.insertBefore(delBtn, newItem.nextSibling);

    delBtn.onclick = deleteItem(product_data.id);
    input.value = '';
    input.focus();
}