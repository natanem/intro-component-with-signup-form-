inputs = document.querySelectorAll('input');

inputs.forEach((el)=>{
    el.addEventListener('blur', ()=>{
        if(!el.value){
            el.parentElement.lastElementChild.style.display = "block";
        }else{
            el.parentElement.lastElementChild.style.display = "none";
        }
      })
 })