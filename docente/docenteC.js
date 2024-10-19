document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los videos en la sección de transmisión en vivo
    const videos = document.querySelectorAll(".live-video");

    videos.forEach(video => {
        // Configura el video para que se reproduzca automáticamente y esté en silencio
        video.muted = true; // Silenciar el video
        video.play(); // Iniciar reproducción automática
        
        // Agrega un event listener para reiniciar el video al terminar
        video.addEventListener("ended", function() {
            video.currentTime = 0; // Regresa al inicio del video
            video.play(); // Reproduce el video nuevamente
        });
    });
});

function redirectToNewCourse() {
    window.location.href = "/paginasTalktome/docente/docenteRC.html"; // Cambia "nuevo_curso.html" por la ruta de tu archivo de destino
}
