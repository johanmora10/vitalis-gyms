document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');

  const emailInput = document.getElementById('gmail');
  const passwordInput = document.getElementById('contraseña');
  const userTypeSelect = document.getElementById('usuario');
  const empresaInput = document.getElementById('empresa');
  const terminosCheckbox = document.getElementById('terminos');

  // Elementos para mostrar errores
  const errorEmail = document.getElementById('error-gmail');
  const errorPassword = document.getElementById('error-contraseña');
  const errorUserType = document.getElementById('error-usuario');
  const errorEmpresa = document.getElementById('error-empresa');
  const errorTerminos = document.getElementById('error-terminos');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpiar mensajes previos
    errorEmail.textContent = '';
    errorPassword.textContent = '';
    errorUserType.textContent = '';
    errorEmpresa.textContent = '';
    errorTerminos.textContent = '';

    let isValid = true;

    // Validar email
    if (!emailInput.value.trim()) {
      errorEmail.textContent = 'El correo es obligatorio.';
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      errorEmail.textContent = 'Ingrese un correo válido.';
      isValid = false;
    }

    // Validar contraseña
    if (!passwordInput.value.trim()) {
      errorPassword.textContent = 'La contraseña es obligatoria.';
      isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
      errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres.';
      isValid = false;
    }

    // Validar tipo de usuario
    if (!userTypeSelect.value) {
      errorUserType.textContent = 'Seleccione un plan de usuario.';
      isValid = false;
    }

    // Validar empresa
    if (!empresaInput.value.trim()) {
      errorEmpresa.textContent = 'Ingrese o seleccione una empresa.';
      isValid = false;
    }

    // Validar aceptación términos
    if (!terminosCheckbox.checked) {
      errorTerminos.textContent = 'Debe aceptar los términos y condiciones.';
      isValid = false;
    }

    if (isValid) {
      // Guardar datos mínimos en localStorage
      const usuarioData = {
        correo: emailInput.value.trim(),
        tipo: userTypeSelect.value,
        empresa: empresaInput.value.trim()
      };
      localStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioData));

      // Simular envío de correo
      alert('¡Registro exitoso! Se ha enviado un correo de confirmación a ' + emailInput.value.trim());

      // Opcional: esperar 1-2 segundos antes de redirigir
      setTimeout(() => {
        window.location.href = 'perfil.html';
      }, 1500);
    }
  });

  // Función simple para validar email con regex
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
