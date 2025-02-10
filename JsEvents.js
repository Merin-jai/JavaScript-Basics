function main(event){
    event.preventDefault();
    const usererror=document.querySelector('.userError')
    const passerror=document.querySelector('.passError')
    const user=document.getElementById("username");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    
    console.log(user.value)
    const pass=document.querySelector("#password");
    console.log(pass.value);
    if(user.value===''){
        usererror.innerHTML='*Please enter the username';
    }
    else{
        usererror.innerText = emailPattern.test(email) ? "" : "Invalid email format";
    }
    if(pass.value===''){
        passerror.innerHTML='*Please enter password';
    }

    else{
        passerror.innerText = passwordPattern.test(password) ? "" : "Password must be atleast 6 charcters long, include letters & numbers";
    }

}