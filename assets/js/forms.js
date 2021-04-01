// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

document.querySelector('#loginForm').addEventListener('submit', login);

function login(evt) {
  evt.preventDefault();

  let email = document.getElementById('email').value;
  let pwd = document.getElementById('password').value;
  if (!email || !pwd) {
    return alert('fill all fields');
  }
  if (pwd == 'admin1234') {
    if (email == 'test@commex.mvp') {
      window.location = "./dashboard.html"
    } else {
      alert('wrong email address')
    }
  } else {
    alert('wrong password')
  }
}
