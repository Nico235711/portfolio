function cerrarMenu() {
  // Obtén el botón del menú responsivo
  var botonMenu = document.querySelector('.navbar-toggler');

  // Si el menú está abierto, ciérralo
  if (botonMenu.getAttribute('aria-expanded') === 'true') {
    botonMenu.click();
  }
}