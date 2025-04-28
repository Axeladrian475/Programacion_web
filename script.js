const contactInfo = {
    telefono: "3328490929",
    correo: "axeladrian475@gmail.com"
};

document.addEventListener('DOMContentLoaded', function() {
    const btnTelefono = document.getElementById('btnTelefono');
    const btnCorreo = document.getElementById('btnCorreo');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));

    btnTelefono.addEventListener('click', function() {
        mostrarContacto('Teléfono', `<i class="fas fa-phone"></i> ${contactInfo.telefono}`);
    });

    btnCorreo.addEventListener('click', function() {
        mostrarContacto('Correo Electrónico', `<i class="fas fa-envelope"></i> ${contactInfo.correo}`);
    });

    function mostrarContacto(tipo, info) {
        modalTitle.textContent = tipo;
        modalBody.innerHTML = `<div class="text-center p-3"><h3>${info}</h3></div>`;
        contactModal.show();
    }

    document.querySelectorAll('a.nav-link').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            const offsetTop = destino.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Efecto parallax
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax-container');
        if (parallax) {
            let scrollPosition = window.pageYOffset;
            parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    window.addEventListener('scroll', revelarElementos);

    function revelarElementos() {
        const secciones = document.querySelectorAll('section');
        const altura = window.innerHeight * 0.8;

        secciones.forEach(seccion => {
            const distancia = seccion.getBoundingClientRect().top;
            if (distancia < altura) {
                seccion.classList.add('visible');
            }
        });
    }
});