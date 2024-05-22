const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelectorAll('.control_preview')
const next_btn = document.querySelectorAll('.control_next')

let n =0;

function changeSlide(){
     for(let i=0; i<imgs.length; i++){
        imgs[i].style.display='none'
     }
}
changeSlide()