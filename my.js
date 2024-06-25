let mybtnnn= document.getElementById('mybtn');

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    // console.log(document.body.scrollTop());
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        mybtnnn.style.opacity="1";
        mybtnnn.style.transition="0.6s";
    }
    else mybtnnn.style.opacity="0";
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


let slid=document.querySelector(".slider");
let value=document.querySelector(".trend-items");
let slidervalue = value.clientWidth +10;
let left_slid = document.querySelector("#left-slider");
let right_slid = document.querySelector("#right-slider");


left_slid.addEventListener("click",() =>{
    slid.scrollLeft +=  -slidervalue;
  })
right_slid.addEventListener("click",() =>{
    slid.scrollLeft += slidervalue;
  })
