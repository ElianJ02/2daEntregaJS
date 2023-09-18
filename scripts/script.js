document.addEventListener("DOMContentLoaded", function () {
  const calcularButton = document.getElementById("calcular");
  calcularButton.addEventListener("click", calcularPorcentaje);

  function calcularPorcentaje() {
      const valor = parseFloat(prompt("Por favor, ingrese el valor:"));
      const porcentaje = parseFloat(prompt("Por favor, ingrese el porcentaje:"));

      if (!isNaN(valor) && !isNaN(porcentaje)) {
          const resultado = (valor * porcentaje) / 100;
          alert(`El ${porcentaje}% de ${valor} es igual a ${resultado}`);
      } else {
          alert("Por favor, ingrese valores numéricos válidos.");
      }
  }
});
