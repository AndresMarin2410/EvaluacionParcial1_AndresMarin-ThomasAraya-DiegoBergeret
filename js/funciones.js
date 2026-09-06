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
//====================== Formulario registro de dueno y macota ==========================================

const formularioRegistroDueno = document.querySelector('#formulario-dueno');

if (formularioRegistroDueno) {
  const botonRegistrar = document.querySelector('.btn-registrar');
  
  if (botonRegistrar) {
    botonRegistrar.addEventListener('click', function(e) {
      e.preventDefault();
      const patronCorreoUsuario = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const patronRutUsuario = /^(\d{1,2}(?:\.\d{3}){2}|\d{7,8})-[0-9Kk]$/;
      const patronTelefono = /^\+?[0-9]{8,15}$/;

      const nombreMascota = document.querySelector('#nombre-mascota');
      const especie = document.querySelector('#especie');
      const raza = document.querySelector('#raza');
      const sexoMascota = document.querySelector('#sexo');
      const esterilizada = document.querySelector('input[name="esterilizada"]:checked');

      const fechaNacimientoMascota = document.querySelector('#fecha-nacimiento');
      const fechaIngresada = new Date(fechaNacimientoMascota.value + 'T00:00:00')
      const hoy = new Date();
      hoy.setHours(0,0,0,0)

      const nombreDueno = document.querySelector('#nombre-completo');
      const rut = document.querySelector('#rut');
      const telefono = document.querySelector('#telefono');
      const correo = document.querySelector('#correo');
      const direccion = document.querySelector('#direccion');
      const contra = document.querySelector('#contrasena');
      const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');

      let formularioRegistro = true;


      if (nombreMascota.value.trim() === '') {
        nombreMascota.classList.add('campo-error');
        formularioRegistro = false;
      } else {
        nombreMascota.classList.remove('campo-error');
      }

      if(raza && raza.value.trim() === '') {
        raza.classList.add('campo-error')
        formularioRegistro = false;
      } else{
        raza.classList.remove('campo-error')
      }

      if(fechaNacimientoMascota && fechaNacimientoMascota.value.trim() === '' || fechaIngresada > hoy) {
        fechaNacimientoMascota.classList.add('campo-error')
        formularioRegistro = false;
      } else {
        fechaNacimientoMascota.classList.remove('campo-error')
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

      if (nombreDueno.value.trim() === '') {
        nombreDueno.classList.add('campo-error');
        formularioRegistro = false;
      } else {
        nombreDueno.classList.remove('campo-error');
      }

      if (!patronRutUsuario.test(rut.value.trim())) {
        rut.classList.add('campo-error');
        formularioRegistro = false;
      } else {
        rut.classList.remove('campo-error');
      }

      if (telefono.value.trim() === '' || !patronTelefono.test(telefono.value.trim())) {
        telefono.classList.add('campo-error');
        formularioRegistro = false;
      } else {
        telefono.classList.remove('campo-error');
      }

      if (!patronCorreoUsuario.test(correo.value.trim())) {
        correo.classList.add('campo-error');
        formularioRegistro = false;
      } else {
        correo.classList.remove('campo-error');
      }

      if (direccion.value.trim() === '') {
        direccion.classList.add('campo-error');
        formularioRegistro = false;
      } else {
        direccion.classList.remove('campo-error');
      }

      if (contra.value.trim() === '') {
        contra.classList.add('campo-error');
        formularioRegistro = false;
      } else {
        contra.classList.remove('campo-error');
      }

      if (mensajeConfirmacion) {
        if (formularioRegistro) {
          mensajeConfirmacion.textContent = 'Registro completado exitosamente.';
          mensajeConfirmacion.style.color = '#1e6b52';
        } else {
          mensajeConfirmacion.textContent = 'Por favor, revisa los campos en rojo.';
          mensajeConfirmacion.style.color = '#c0392b';
        }
      }
    });
  }
}

//====================== Formulario inicio de ssion ==============================================

const formularioInicioSesion = document.querySelector('#formulario-login');

if (formularioInicioSesion) {
  formularioInicioSesion.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const patronCorreoLogin = /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    
    const correo = document.querySelector('#correo');
    const contra = document.querySelector('#contrasena');
    const mensajeLogin = document.querySelector('#mensaje-login');
    
    let formularioLogin = true;


    const valorCorreo = correo.value.trim();
    if (valorCorreo === '' || valorCorreo.length > 100 || !patronCorreoLogin.test(valorCorreo)) {
      correo.classList.add('campo-error');
      formularioLogin = false;
    } else {
      correo.classList.remove('campo-error');
    }

    const valorContra = contra.value.trim();
    if (valorContra === '' || valorContra.length < 4 || valorContra.length > 10) {
      contra.classList.add('campo-error');
      formularioLogin = false;
    } else {
      contra.classList.remove('campo-error');
    }

    if (formularioLogin) {
      if (valorCorreo === 'admin@gmail.com' && valorContra === '1234') {
        
          mensajeLogin.textContent = 'Accediendo como administrador....';
          mensajeLogin.style.color = '#1e6b52';
          window.location.href = 'admin-home.html'
      }else{
        mensajeLogin.textContent = 'Verifiacion exitosa'
        mensajeLogin.style.color = '#1e6b52';
      }    
    }else{
      mensajeLogin.textContent = 'Ingrese un correo valido'
      mensajeLogin.style.color = '#b81d1d'
    }
    
  });
}

  //=============================================================Formulario contacto=====================================

const formularioContacto = document.querySelector('#formulario-contacto');
const mensajeContacto = document.querySelector('#mensaje-contacto');

if (formularioContacto) {
  formularioContacto.addEventListener('submit', function(e) {
    e.preventDefault();

    const correoContacto = document.querySelector('#correocon');
    
    const patronCorreoContacto = /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    
    let formularioValido = true; 

    const valorCorreo = correoContacto.value.trim();
    
    if (valorCorreo === '' || valorCorreo.length > 100 || !patronCorreoContacto.test(valorCorreo)) {
      correoContacto.classList.add('campo-error'); 
      formularioValido = false;
    } else {
      correoContacto.classList.remove('campo-error');
    }

    if (formularioValido) {
      mensajeContacto.textContent = 'Mensaje enviado con exito!!';
      mensajeContacto.style.color = '#1e6b52'; 
    } else { 
      mensajeContacto.textContent = 'Por favor, ingresa un correo valido.';
      mensajeContacto.style.color = '#c0392b'; 
    }
  });




}
