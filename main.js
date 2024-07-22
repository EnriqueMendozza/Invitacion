document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const button = document.querySelector('.button');

    function updateBackgroundSize() {
        // El fondo ya está configurado para cubrir la ventana en el CSS
        // Si necesitas ajustar algo dinámicamente, puedes hacerlo aquí
        // Por ejemplo:
        // document.querySelector('.background').style.backgroundSize = `${window.innerWidth}px ${window.innerHeight}px`;
    }

    button.addEventListener('click', function() {
        if (envelope.classList.contains('open')) {
            envelope.classList.remove('open');
            envelope.classList.add('close');
        } else {
            envelope.classList.remove('close');
            envelope.classList.add('open');
        }

        // Espera a que la animación de apertura o cierre termine
        setTimeout(() => {
            updateBackgroundSize();
        }, 1000); // Asegúrate de que este tiempo coincida con la duración de la animación
    });

    // Inicializa el tamaño del fondo al cargar la página
    updateBackgroundSize();

    // Ajustar el tamaño del fondo al redimensionar la ventana
    window.addEventListener('resize', updateBackgroundSize);
});