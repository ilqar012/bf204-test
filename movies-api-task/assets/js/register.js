import { getAll } from "./API/Request/users.js";
import { post } from "./API/Request/users.js";
import { User } from "./API/Request/users.js";

let fullname = document.querySelector('.Fullname input')
let email = document.querySelector('.Email input')
let username = document.querySelector('.Username input')
let password = document.querySelector('.Password input')

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  }

let form = document.querySelector('.signin-hero form') 
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(fullname.value == '')
    document.querySelector('.Fullname span').style.display = "block"
    else
    document.querySelector('.Fullname span').style.display = "none"

    if(email.value == '')
    document.querySelector('.Email span').style.display = "block"
    else
    {
        document.querySelector('.Email span').style.display = "none"
        if(!validateEmail(email.value))
        document.querySelector('.Email .email-valid').style.display = "block"
        else
        document.querySelector('.Email .email-valid').style.display = "none"
    }

    

    if(username.value == '')
    document.querySelector('.Username span').style.display = "block"
    else
    document.querySelector('.Username span').style.display = "none"

    if(password.value == '')
    document.querySelector('.Password span').style.display = "block"
    else
    document.querySelector('.Password span').style.display = "none"

    if(!fullname.value == '' && !email.value == '' && !username.value == '' && !password.value == '' && validateEmail(email.value)){
        getAll().then((res)=>{
            let bool = true ;
            res.forEach(element => {
                if(element.username == username.value || element.email == email.value)
                bool = false ;
            });
            if(bool){
                let newUser = new User(fullname.value,email.value,username.value,password.value) ;
                post(newUser) ;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  localStorage.setItem('user',[newUser.username,newUser.favorite]) ;
                  setInterval(()=>{
                 window.location.replace('index.html')

                  },2000)
                }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email or UserName is already there",
                  });
            }
        })
    }
})