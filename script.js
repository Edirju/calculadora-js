// Aqui se agrega el valor que contiene el botón que damos click en la pantalla.
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}
// Esta acción borra la pantalla
function borrar() {
  document.getElementById("pantalla").value = "";
}
// Esta acción realiza los cálculos
function calcular() {
  const valorPantalla = document.getElementById('pantalla').value
  const resultado = eval(valorPantalla)
  document.getElementById('pantalla').value = resultado
}








