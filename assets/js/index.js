function toggleBorde() {
    const imagen = document.getElementById("miImagen");
    
    if (imagen.style.border === "2px solid red") {
        
        imagen.style.border = "";
    } else {
    
        imagen.style.border = "2px solid red";
    }
}


function actualizarCantidad() {
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

    const total = sticker1 + sticker2 + sticker3;

    const mensaje = document.getElementById('mensaje');

    if (total <= 10) {
        mensaje.textContent = `Llevas ${total} stickers.`;
    } else {
        mensaje.textContent = 'Llevas demasiados stickers.';
    }
}


document.getElementById('sticker1').addEventListener('input', actualizarCantidad);
document.getElementById('sticker2').addEventListener('input', actualizarCantidad);
document.getElementById('sticker3').addEventListener('input', actualizarCantidad);


actualizarCantidad();

function verificarPassword() {
    
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;

    
    const password = select1 + select2 + select3;

    
    const mensaje = document.getElementById('mensaje');

    if (password === '911') {
        mensaje.textContent = "Password 1 correcto";
    } else if (password === '714') {
        mensaje.textContent = "Password 2 correcto";
    } else {
        mensaje.textContent = "Password incorrecto";
    }
}