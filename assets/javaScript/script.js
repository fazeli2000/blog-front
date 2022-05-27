//variables
//for menu
let bars=document.querySelector('.fa-bars');
let navbarList=document.querySelector('.navbar-list');
let navbar=document.querySelector('.navbar');
/*********for sliders**** ****/
let box =document.querySelectorAll('.box'),
sliders=document.querySelector('.sliders'),
slideRight=document.querySelector('.slide-right'),
slideLeft=document.querySelector('.slide-left')
//for tex-typing
let typing=document.querySelector('.typing')
const text=['[نام من]',"فاضلی کیا"]
let index=0//index of Array
let count=0//to count eachword1by1
let currenText=''//text that selected
let lettrs=''//letters
function type() {
  if(count===text.length){
    count=0
  }
  currenText=text[count]
  lettrs=currenText.slice(0,++index)
  typing.textContent=lettrs
  if(lettrs.length===currenText.length){
    count++;
    index=0;
  }
  setTimeout(type,500)
  
}
/****for comments****** */


document.addEventListener('DOMContentLoaded',type)
bars.addEventListener('click',showMenu)
slideLeft.addEventListener('click',goLefttHandler)
slideRight.addEventListener('click',goRightHandler)


//showing menu
function showMenu() {
  navbar.classList.toggle('active')
  bars.classList.toggle('fa-remove')
  
}


//goleft
function goLefttHandler(){
  sliders.scrollLeft-=150;
  console.log( sliders.scrollLeft-=150)

}
//go right
function goRightHandler() {
  sliders.scrollLeft+=150;
  
}

let maxScrollLeft=sliders.scrollWidth-sliders.clientWidth
function autoPlay() {
  if(sliders.scrollLeft==0){
    sliders.scrollLeft-=maxScrollLeft;
    
  }
  else{
    sliders.scrollLeft+=1;
  }
  
}
let play=setInterval(autoPlay,50)
//for stop
for(let i=0;i<box.length;i++){
  box[i].addEventListener('mouseover',()=>{
    clearInterval(play)
  })
  box[i].addEventListener('mouseout',()=>{
    return play=setInterval(autoPlay,50)
      
    
  })
}


/**************for coments******* */