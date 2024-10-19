function checkAnswer(selectedAnswer) {
    const correctAnswer = 'Cielo';
    if (selectedAnswer === correctAnswer) {
        window.location.href = "/paginasTalktome/alumno/alumnoONE.html"; // Página para "Cielo"
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
