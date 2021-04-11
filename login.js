function loginSubmit(event) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    event.preventDefault();
    console.log(`Form Submitted! username: ${username} password: ${password}`);

    document.getElementById("username").value="";
    document.getElementById("password").value="";
}
  
const form = document.getElementById('login-form');
  
form.addEventListener('submit', loginSubmit);