function checkAnswer(selectedAnswer) {
    const correctAnswer = 'Fuego';
    if (selectedAnswer === correctAnswer) {
        window.location.href = "/paginasTalktome/alumno/alumnoTREE.html"; // Página para "Fuego"
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
