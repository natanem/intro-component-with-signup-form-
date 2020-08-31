inputs = document.querySelectorAll('input');

inputs.forEach((el)=>{
    el.addEventListener('blur', ()=>{
        if(!el.value){
            el.parentElement.lastElementChild.style.opacity = 1;
        }else{
            el.parentElement.lastElementChild.style.opacity = 0;
        }
      })
 })