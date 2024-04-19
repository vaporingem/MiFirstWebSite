function evalua() {
  var cadena = document.getElementById("cadena").value;
  var mayusculas = false;
  var minusculas = false;

  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] === cadena[i].toUpperCase() && cadena[i] !== cadena[i].toLowerCase()) {
      mayusculas = true;
    }
    if (cadena[i] === cadena[i].toLowerCase() && cadena[i] !== cadena[i].toUpperCase()) {
      minusculas = true;
    }
  }

  var mensaje = "";
  if (mayusculas && minusculas) {
    mensaje = "La cadena incluye mayúsculas y minúsculas.";
  } else if (mayusculas) {
    mensaje = "La cadena incluye mayúsculas.";
  } else if (minusculas) {
    mensaje = "La cadena incluye minúsculas.";
  } else {
    mensaje = "La cadena no incluye mayúsculas ni minúsculas.";
  }

  document.getElementById("parrafo").innerHTML = mensaje;
}