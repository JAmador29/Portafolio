const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('abierto');
});

navLinks.querySelectorAll('a').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    navLinks.classList.remove('abierto');
  });
});

var barras = document.querySelectorAll('.barra-fill');

var observadorBarras = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('activa');
    }
  });
}, { threshold: 0.4 });

barras.forEach(function (barra) {
  observadorBarras.observe(barra);
});

window.addEventListener('load', function () {
  barras.forEach(function (barra) {
    var rect = barra.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      barra.classList.add('activa');
    }
  });
});

var formulario = document.getElementById('formulario');
var formMsg    = document.getElementById('form-msg');

//Validaciones
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  var nombre  = document.getElementById('nombre');
  var email   = document.getElementById('email');
  var mensaje = document.getElementById('mensaje');
  var valido  = true;

  [nombre, email, mensaje].forEach(function (campo) {
    campo.classList.remove('error');
  });
  formMsg.textContent = '';
  formMsg.className   = 'form-msg';

  if (nombre.value.trim() === '') {
    nombre.classList.add('error');
    valido = false;
  }

  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value.trim())) {
    email.classList.add('error');
    valido = false;
  }

  if (mensaje.value.trim() === '') {
    mensaje.classList.add('error');
    valido = false;
  }

  if (!valido) {
    formMsg.textContent = 'Por favor completa todos los campos correctamente.';
    formMsg.classList.add('err');
    return;
  }

  formMsg.textContent = '✓ ¡Mensaje enviado! Me pondré en contacto pronto.';
  formMsg.classList.add('ok');
  formulario.reset();
});

var secciones = document.querySelectorAll('section[id]');
var enlaces   = document.querySelectorAll('.nav-links a');

var observadorSecciones = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      enlaces.forEach(function (enlace) {
        enlace.style.color = '';
      });
      var enlaceActivo = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
      if (enlaceActivo) {
        enlaceActivo.style.color = '#2563eb';
      }
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

secciones.forEach(function (seccion) {
  observadorSecciones.observe(seccion);
});