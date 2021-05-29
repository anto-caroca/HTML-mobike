function registerSubmit(event) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let passwordRepeat = document.getElementById("password-repeat").value;
    let address = document.getElementById("address").value;
    let card_num = document.getElementById("card_num").value;
    let mmaa = document.getElementById("mmaa").value;
    let cvv = document.getElementById("cvv").value;
    let emisor = document.getElementById("emisor").value;
    
    if (password === passwordRepeat) {
        event.preventDefault();

        console.log(`Form Submitted! 
        username: ${username}
        email: ${email}
        password: ${password} 
        password repeat: ${passwordRepeat}
        dirección: ${address}
        card_num: ${card_num}
        mmaa: ${mmaa}
        cvv: ${cvv}
        emisor: ${emisor}
        `);
        alert("Registro exitoso!");
        window.location = "./login.html"
    } else {
        alert("contraseñas no coinciden");
    }
    
}
  
const form = document.getElementById('register-form');
  
form.addEventListener('submit', registerSubmit);