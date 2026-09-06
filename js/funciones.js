const formularioProducto = document.querySelector("#formulario-nuevo-producto");
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const patronRut = /^(\d{1,2}(?:\.\d{3}){2}|\d{7,8})-[0-9Kk]$/;

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

// ==========================================================================================================================================
//====================== Formulario registro de usuario =====================================================================================

const formularioRegistroMascota = document.querySelector('#formulario-mascota')
const formularioRegistroDueno = document.querySelector('#formulario-dueno')

formularioRegistroDueno.addEventListener('submit', function(e) {
  e.preventDefault();

  //variables registro mascota
  const nombreMascota = document.querySelector('#nombre-mascota');
  const especie = document.querySelector('#especie');
  const raza = document.querySelector('#raza');
  const sexoMascota = document.querySelector('#sexo');
  const fechaNacimientoMascota = document.querySelector('#fecha-nacimiento');
  const esterilizada = document.querySelector('input[name="esterilizada"]:checked').value;


  //Variables registro dueno

  const nombreDueno = document.querySelector('#nombre-completo');
  const rut = document.querySelector('#rut');
  const telefono = document.querySelector('#telefono')
  const correo = document.querySelector('#correo');
  const direccion = document.querySelector('#direccion');
  const contra = document.querySelector('#contrasena');

  let formularioRegistro = true;

  //Validaciones registro-mascota

  if (nombreMascota.value.trim() === '') {
    nombreMascota.classList.add('campo-error');
    formularioRegistro = false;
  } else {
    nombreMascota.classList.remove('campo-error');
  }

  if (especie.value.trim() === '') {
    especie.classList.add('campo-error');
    formularioRegistro = false;
  } else {
    especie.classList.remove('campo-error');
  }

  if (sexoMascota.value.trim() === '') {
    sexoMascota.classList.add('campo-error');
    formularioRegistro = false;
  } else {
    sexoMascota.classList.remove('campo-error');
  }

  //validaciones registro-dueno
  
  if (nombreDueno.value.trim() === '') {
    nombreDueno.classList.add('campo-error');
    formularioRegistro = false;
  } else {
    nombreDueno.classList.remove('campo-error');
  }

  if(!patronRut.test(rut.value.trim())) {
    rut.classList.add('campo-error')
    formularioRegistro = false;
  } else {
    rut.classList.remove('campo-error')
  }

  if (telefono.value.trim() === '') {
    telefono.classList.add('campo-error');
    formularioRegistro = false;
  } else {
    telefono.classList.remove('campo-error');
  }

  if(!patronCorreo.test(correo.value.trim())) {
    correo.classList.add('campo-error');
    formularioRegistro = false;
  } else {
    correo.classList.remove('campo-error');
  }

  if(direccion.value.trim() === '') {
    direccion.classList.add('campo-error');
    formularioRegistro = false;
  } else {
    direccion.classList.remove('campo-error')
  }
  if(contra.value.trim() === '') {
    contra.classList.add('campo-error');
    formularioRegistro = false;
  } else {
    contra.classList.remove('campo-error');
  }

  if(formularioRegistro) {
    document.querySelector('#mensaje-confirmacion').textContent = 'Registro completado exitosamente.'
  }
}) 
}
