function main(event){
    event.preventDefault();
    const usererror=document.querySelector('.userError')
    const passerror=document.querySelector('.passError')
    const user=document.getElementById("username");
    console.log(user.value)
    const pass=document.querySelector("#password");
    console.log(pass.value);
    if(user.value===''){
        usererror.innerHTML='*Please enter the username';
    }
    if(pass.value===''){
        passerror.innerHTML='*Please enter password';
    }
}