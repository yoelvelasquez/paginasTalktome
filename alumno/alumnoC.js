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
function redirectToConfig() {
    window.location.href = "/paginasTalktome/alumno/alumnoRC.html"; // Cambia "configuracion.html" por la ruta de tu archivo de configuración
}

function redirectToEditCourses() {
    window.location.href = "/paginasTalktome/alumno/alumnoL.html"; // Cambia "editar_cursos.html" por la ruta de tu archivo de edición de cursos
}
