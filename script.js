
const form = document.getElementById("form");



form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let  formData = {};
  
    let genders = document.getElementsByName('gender');
    let country = document.getElementById('country').value;
    let accept = document.querySelector("#accept");
    let name    = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let search = document.querySelector('#search').value;
    for(let gender of genders){
       if(gender.checked){
          formData['gender'] = gender.value;
          
       }
    }
    if(accept.checked){
        accept = accept.value;
    }else{
        accept = null;
    }
    formData = {

        country,
        accept,
        name,
        address,
        search
    }
    console.log(formData)
});

