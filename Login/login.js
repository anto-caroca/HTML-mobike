function loginSubmit(event) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    event.preventDefault();
    console.log(`Form Submitted! 
    username: ${username} 
    password: ${password}`
    );
    alert("Login exitoso!");
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    window.location="../menu1.html"
}
  
const form = document.getElementById('login-form');
  
form.addEventListener('submit', loginSubmit);