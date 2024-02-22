var quadroIcon = document.getElementById('quadro-icon');
var quadroAnuncio = document.getElementById('quadro-anuncio');

quadroIcon.addEventListener('click', function() {
  if (quadroAnuncio.style.display === 'none' || quadroAnuncio.style.display === '') {
    quadroAnuncio.style.display = 'block';
    setTimeout(function() {
      quadroAnuncio.classList.add('show');
    }, 0);
  } else {
    quadroAnuncio.classList.remove('show');
    setTimeout(function() {
      quadroAnuncio.style.display = 'none';
    }, 200);
  }
});