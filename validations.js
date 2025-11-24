

$(document).ready(function () {

  // Función para mostrar error
  function showError(input, message) {
    $(input).next(".error").remove(); // elimina errores previos
    $(input).after(`<small class="error text-danger">${message}</small>`);
    $(input).addClass("is-invalid");
  }

  // Función para limpiar error
  function clearError(input) {
    $(input).next(".error").remove(); 
    $(input).removeClass("is-invalid");
    $(input).addClass("is-valid");
  }

  // Validación del nombre completo
  function validateFullName() {
    let fullName = $("#fullName").val().trim();
    if (fullName.length < 3) {
      showError("#fullName", "Ingresa un nombre válido");
      return false;
    }
    clearError("#fullName");
    return true;
  }

  // Validación del email
  function validateEmail() {
    let email = $("#email").val().trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      showError("#email", "Correo electrónico no válido");
      return false;
    }
    clearError("#email");
    return true;
  }

  // Validación de contraseña
  function validatePassword() {
    let password = $("#password").val().trim();
    if (password.length < 6) {
      showError("#password", "Mínimo 6 caracteres");
      return false;
    }
    clearError("#password");
    return true;
  }

  // Validación confirmación de contraseña
  function validateConfirmPassword() {
    let password = $("#password").val().trim();
    let confirmPassword = $("#confirmPassword").val().trim();

    if (password !== confirmPassword || confirmPassword === "") {
      showError("#confirmPassword", "Las contraseñas no coinciden");
      return false;
    }
    clearError("#confirmPassword");
    return true;
  }

  // Validación de fecha de nacimiento
  function validateBirthDate() {
    let birthDate = $("#birthDate").val().trim();
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(birthDate)) {
      showError("#birthDate", "Formato: DD/MM/YYYY");
      return false;
    }
    clearError("#birthDate");
    return true;
  }

  // Validación de teléfono
  function validatePhone() {
    let phone = $("#phone").val().trim();
    const regex = /^\+?\d{1,3}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    if (!regex.test(phone)) {
      showError("#phone", "Número de teléfono no válido");
      return false;
    }
    clearError("#phone");
    return true;
  }

  // Eventos en tiempo real
  $("#fullName").on("keyup blur", validateFullName);
  $("#email").on("keyup blur", validateEmail);
  $("#password").on("keyup blur", validatePassword);
  $("#confirmPassword").on("keyup blur", validateConfirmPassword);
  $("#birthDate").on("keyup blur", validateBirthDate);
  $("#phone").on("keyup blur", validatePhone);

  // Validación final del formulario
  $("form").on("submit", function (e) {
    e.preventDefault();

    if (
      validateFullName() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateBirthDate() &&
      validatePhone()
    ) {
      alert("Formulario enviado exitosamente!");
      this.submit();
    }
  });

}); 





