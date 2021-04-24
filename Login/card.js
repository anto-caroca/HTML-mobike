function registerCard(event) {
    let titular = document.getElementById("titular").value;
    let password = document.getElementById("password").value;
    let card_num = document.getElementById("card_num").value;
    let passwordRepeat = document.getElementById("password-repeat").value;
    let mmaa = document.getElementById("mmaa").value;
    let cvv = document.getElementById("cvv").value;
    let emisor = document.getElementById("emisor").value;

    
    
    if (password === passwordRepeat) {
        event.preventDefault();

        console.log(`Form Submitted! 
        titular: ${titular}
        card_num: ${card_num}
        password: ${password} 
        password repeat: ${passwordRepeat}
        mmaa: ${mmaa}
        cvv: ${cvv}
        emisor: ${emisor}
        `);

        document.getElementById("titular").value="";
        document.getElementById("password").value="";
        document.getElementById("password-repeat").value="";
        document.getElementById("card_num").value="";
        document.getElementById("mmaa").value="";
        document.getElementById("cvv").value="";
        document.getElementById("emisor").value="";

        alert("Registro exitoso");
        window.location = "./login.html"
        
    } else {
        alert("contraseñas no coinciden");
    }
    
}
  
const form = document.getElementById('register-form');
  
form.addEventListener('submit', registerCard);