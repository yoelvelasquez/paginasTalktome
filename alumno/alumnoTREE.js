function checkAnswer(selectedAnswer) {
    const correctAnswer = 'Sky';
    if (selectedAnswer === correctAnswer) {
        window.location.href = "/paginasTalktome/alumno/alumnoFOUR.html"; // Página para "Cielo"
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
