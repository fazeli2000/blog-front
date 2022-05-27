
/************varibales***** */
//menu
let bars=document.querySelector('.fa-bars');
let navbarList=document.querySelector('.navbar-list');
let navbar=document.querySelector('.navbar');



//comments
let inputUsername=document.querySelector('#input-username')
let inputEmail=document.querySelector('#input-email')
let coments=document.querySelector('#coments')
let btnSubmit=document.querySelector('.submit')
//errors
let usernameError=document.querySelector('.username-error')
let emailError=document.querySelector('.email-error')
let textareaError=document.querySelector('.textarea-error')
//resulr
let result=document.querySelector('.result'),
userName=document.querySelector('.user-name')
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

//addeventlistenrs
document.addEventListener('DOMContentLoaded',type)
btnSubmit.addEventListener('click',addComments)

bars.addEventListener('click',showMenu)









/*****functions******************* */
//add coments

function addComments(e) {
  e.preventDefault()
  //first take inputsValue
  let inputUsernameValue=inputUsername.value;
  let comentsValue=coments.value;
  let inputEmailValue=inputEmail.value;
  //usernamevalidate
  if(inputUsernameValue.trim()){
    usernameError.innerHTML=''
  }
  else{
    usernameError.innerHTML="لطفا نام خود را وارد کنید"
  }
  //check input email
  if(inputEmailValue.trim()){
    emailError.innerHTML=''
  }
  else{
    emailError.innerHTML="لطفا ایمیل خود را وارد کنید"
  }
  if(comentsValue.trim()){
    textareaError.innerHTML=''
  }
  else{
    textareaError.innerHTML="لطفا کامنت خود را وارد کنید"
  }
  if(inputUsernameValue.trim() && inputEmailValue.trim()&&comentsValue.trim()){
    let res=`
    <div class="parent-comments">
        <h1 class="userName">
          ${inputUsernameValue}
        </h1>
         <p>${comentsValue}</p>
         <div>
          <i class="fa-light fa-trash"></i>
          <button class="reply">بازخورد</button>
        </div>

    </div>
    `
    result.innerHTML+=res;

   document.querySelector('#comment-form').reset();
  }

 
}



//showing menu
function showMenu() {
    navbar.classList.toggle('active')
    bars.classList.toggle('fa-remove')
    
  }
  








