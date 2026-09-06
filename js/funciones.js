const formularioProducto = document.querySelector("#formulario-nuevo-producto");

if (formularioProducto) {
  formularioProducto.addEventListener("submit", function (e) {
    e.preventDefault();

    const camposRequeridos = formularioProducto.querySelectorAll("[required]");
    let formularioValido = true;

    camposRequeridos.forEach(function (campo) {
      if (campo.value.trim() === "") {
        campo.classList.add("campo-error");
        formularioValido = false;
      } else {
        campo.classList.remove("campo-error");
      }
    });

    const codigoProducto = document.querySelector("#codigo-producto");
    if (codigoProducto.value.trim().length < 3) {
      codigoProducto.classList.add("campo-error");
      formularioValido = false;
    }

    const precioProducto = document.querySelector("#precio-producto");
    if (
      precioProducto.value.trim() === "" ||
      Number(precioProducto.value) < 0
    ) {
      precioProducto.classList.add("campo-error");
      formularioValido = false;
    }

    const stockProducto = document.querySelector("#stock-producto");
    const valorStock = Number(stockProducto.value);
    if (
      stockProducto.value.trim() === "" ||
      !Number.isInteger(valorStock) ||
      valorStock < 0
    ) {
      stockProducto.classList.add("campo-error");
      formularioValido = false;
    }

    const stockCritico = document.querySelector("#stock-critico-producto");
    if (stockCritico.value.trim() !== "") {
      const valorStockCritico = Number(stockCritico.value);
      if (!Number.isInteger(valorStockCritico) || valorStockCritico < 0) {
        stockCritico.classList.add("campo-error");
        formularioValido = false;
      } else {
        stockCritico.classList.remove("campo-error");
      }
    } else {
      stockCritico.classList.remove("campo-error");
    }

    const mensajeConfirmacion = document.querySelector(
      "#mensaje-confirmacion-producto",
    );
    if (formularioValido) {
      mensajeConfirmacion.textContent = "Producto guardado correctamente.";
    } else {
      mensajeConfirmacion.textContent = "";
    }
  });
}
