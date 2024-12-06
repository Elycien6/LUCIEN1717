const correctAnswers = {
    q1: 'b',
    q2: 'a',
    q3: 'c',
    q4: 'b',
    q5: 'a',
    q6: 'b',
    q7: 'b',
    q8: 'c',
    q9: 'b',
    q10: 'c'
};
function getUserAnswers() {
    const userAnswers = {};
    for (let question in correctAnswers) {
        userAnswers[question] = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`)).map(input => input.value);
    }
    return userAnswers;
}
function calculateScore(userAnswers) {
    let score = 0;
    for (let question in correctAnswers) {
        if (userAnswers[question] && userAnswers[question][0] === correctAnswers[question]) {
            score++;
        }
    }
    return score;
}
function showScore() {
    const userAnswers = getUserAnswers();
    const score = calculateScore(userAnswers);
    const total = Object.keys(correctAnswers).length;
    alert(`Votre score est : ${score} / ${total}`);
}

function resetForm() {
    document.getElementById('quiz-form').reset();
    alert('Toutes les réponses ont été effacées.');
}
document.getElementById('correction').addEventListener('click', showScore);
document.getElementById('effacer').addEventListener('click', resetForm);

const correctionText = {
    q1: "Question 1 :  Agir comme un intermédiaire entre les applications et le matériel.",
    q2: "Question 2 :  ls",
    q3: "Question 3 :  pwd",
    q4: "Question 4 :  cp",
    q5: "Question 5 :  move",
    q6: "Question 6 :  chmod +x script.sh",
    q7: "Question 7 :  head",
    q8: "Question 8 :  grep",
    q9: "Question 9 :  ps",
    q10: "Question 10 : Archiver des fichiers"
};

function toggleCorrection() {
    const container = document.getElementById('correction-container');
    const list = document.getElementById('correction-list');
    
    container.style.display = container.style.display === 'none' ? 'block' : 'none';

    if (container.style.display === 'block') {
        list.innerHTML = Object.values(correctionText).map(correction => `<li>${correction}</li>`).join('');
    }
}

document.getElementById('affich-correc').addEventListener('click', toggleCorrection);

