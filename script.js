
    const menuButton = document.getElementById('menuButton');
    const mainNav = document.getElementById('mainNav');

    menuButton.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
    });

    // cierra el menú al hacer clic en cualquier link (útil en móvil)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mainNav.classList.remove('is-open'));
    });
