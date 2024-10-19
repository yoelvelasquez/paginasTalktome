function checkAnswer(selectedAnswer) {
    const correctAnswer = 'Luna';
    if (selectedAnswer === correctAnswer) {
        document.getElementById('success-message').style.display = 'block'; // Mostrar mensaje de éxito
        document.getElementById('error-message').style.display = 'none'; // Ocultar mensaje de error
    } else {
        document.getElementById('error-message').style.display = 'block'; // Mostrar mensaje de error
        document.getElementById('success-message').style.display = 'none'; // Ocultar mensaje de éxito
    }
}
