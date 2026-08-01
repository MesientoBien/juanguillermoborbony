const menuButton = document.getElementById('menuButton');
    const mainNav = document.getElementById('mainNav');

    menuButton.addEventListener('click', () => {
        mainNav.classList.toggle('is-open');
    });

    // Cierra el menú al hacer clic en un enlace
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
        });
    });


    /* ==========================
       PERSONAJE PORTADA
    ========================== */

    const heads = document.querySelectorAll(".character-img");
    const characterBox = document.querySelector(".character-placeholder");

    let currentHead = 0;

    setInterval(() => {

        heads[currentHead].classList.remove("active");

        currentHead++;

        if (currentHead >= heads.length) {
            currentHead = 0;
        }

        heads[currentHead].classList.add("active");

        characterBox.classList.remove("shake");

        void characterBox.offsetWidth;

        characterBox.classList.add("shake");

    }, 500);
