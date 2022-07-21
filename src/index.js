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