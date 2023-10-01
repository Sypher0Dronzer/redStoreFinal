let navItems=document.querySelector('.nav-items')
function menuToggle(){
    if(navItems.style.display == 'none')
    {
        navItems.style.opacity = 1
        navItems.style.display = 'flex'
        // navItems.style.height='800px'
    }
    else{
        navItems.style.opacity = 0
        navItems.style.display = 'none'
    }   
    

}
// --------------Product Details-------------
let productImg=document.getElementById('productImg');
let smallImgs = document.getElementsByClassName("small-prod-img")
for(let i=0; i<smallImgs.length; i++){
    smallImgs[i].onclick = function(){
        productImg.src = smallImgs[i].src 
    }
}

// ----------------login scroll-------------
let loginForm=document.querySelector('.login-form')
let regisForm=document.querySelector('.register-form')
let indicator = document.getElementById('indicator')
function login(){
    loginForm.style.transform = "translateX(0px)"
    regisForm.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(30px)"
}
function register(){
    loginForm.style.transform = "translateX(-300px)"
    regisForm.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(120px)"

}