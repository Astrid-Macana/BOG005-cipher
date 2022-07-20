import cipher from './cipher.js';

document.getElementById("encode").addEventListener("click", cifrar);

function cifrar() {
  document.getElementById("mensaje2").value = cipher.encode(
    document.getElementById("clave").value,
    document.getElementById("mensaje").value
  );
}

document.getElementById("decode").addEventListener("click", descifrar);

function descifrar() {
  document.getElementById("mensaje3").value = cipher.decode(
    document.getElementById("clave").value,
    document.getElementById("mensaje").value
  );
}

let text = 'LA';
var letra = 0;
var form = 0;
var txt2 = "";
for (let i = 0; i < text.length; i++) {
  letra = Number(text.toUpperCase().charCodeAt(i));
  console.log("letra");
  console.log(letra);
  form = ((letra - 65 + 33) % 26) + 65;
  console.log('FORM');
  console.log(form);
  txt2 += String.fromCharCode(form);
  console.log("txt2");
  console.log(txt2);
}

console.log('SIG')