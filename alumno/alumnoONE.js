function checkAnswer(selectedAnswer) {
    const correctAnswer = 'Agua';
    if (selectedAnswer === correctAnswer) {
        window.location.href = "/paginasTalktome/alumno/alumnoTWO.html"; // Página para "Agua"
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
