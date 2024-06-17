let signUpBtn = document.querySelector('.signUpBtn');
let signInBtn = document.querySelector('.signInBtn');
let title = document.querySelector('.title');
let namefield = document.querySelector(".namefield");
let underline = document.querySelector('.underline');
let forgotps = document.querySelector('.forgotps');


signInBtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    forgotps.innerHTML='Forgot Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';

});
signUpBtn.addEventListener('click', ()=>{
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    forgotps.innerHTML = 'Password Suggestion ';
    signInBtn.classList.add('disable');
    signUpBtn.classList.remove('disable');
    underline.style.transform = 'translateX(0px)';

})