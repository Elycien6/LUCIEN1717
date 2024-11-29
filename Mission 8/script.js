const exercises = [
    {
        title: "Addition de deux nombres",
        description: "Créer une fonction addition(a, b) qui retourne la somme de a et b.",
        demo: `<input type="number" id="num1" placeholder="Nombre 1">
               <input type="number" id="num2" placeholder="Nombre 2">
               <button onclick="showAdditionResult()">Calculer</button>
               <p id="result"></p>`,
        solution: `function addition(a, b) {
    return a + b;
}`
    },
    {
        title: "Calculer la factorielle",
        description: "Créer une fonction factorielle(n) qui calcule la factorielle de n.",
        demo: `<input type="number" id="factorial-input" placeholder="Entrez un nombre">
               <button onclick="showFactorial()">Calculer</button>
               <p id="result"></p>`,
        solution: `function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}`
    },
    {
        title: "Nombre pair ou impair",
        description: "Créer une fonction isEven(n) qui retourne si un nombre est pair ou impair.",
        demo: `<input type="number" id="even-input" placeholder="Entrez un nombre">
               <button onclick="checkEven()">Vérifier</button>
               <p id="result"></p>`,
        solution: `function isEven(n) {
    return n % 2 === 0 ? 'Pair' : 'Impair';
}`
    },
    {
        title: "Compter les voyelles",
        description: "Créer une fonction countVowels(str) qui retourne le nombre de voyelles dans une chaîne.",
        demo: `<input type="text" id="vowel-input" placeholder="Entrez une chaîne">
               <button onclick="countVowels()">Compter</button>
               <p id="result"></p>`,
        solution: `function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return Array.from(str).filter(char => vowels.includes(char)).length;
}`
    },
    {
        title: "Inverser une chaîne",
        description: "Créer une fonction reverseString(str) qui retourne une chaîne inversée.",
        demo: `<input type="text" id="reverse-input" placeholder="Entrez une chaîne">
               <button onclick="reverseString()">Inverser</button>
               <p id="result"></p>`,
        solution: `function reverseString(str) {
    return str.split('').reverse().join('');
}`
    },
    {
        title: "Somme des éléments d’un tableau",
        description: "Créer une fonction sumArray(arr) qui retourne la somme des éléments d'un tableau.",
        demo: `<input type="text" id="array-input" placeholder="Entrez les nombres séparés par des virgules">
               <button onclick="sumArray()">Calculer</button>
               <p id="result"></p>`,
        solution: `function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}`
    },
    {
        title: "Trouver le maximum",
        description: "Créer une fonction maxArray(arr) qui retourne le plus grand élément d’un tableau.",
        demo: `<input type="text" id="max-input" placeholder="Entrez les nombres séparés par des virgules">
               <button onclick="maxArray()">Trouver</button>
               <p id="result"></p>`,
        solution: `function maxArray(arr) {
    return Math.max(...arr);
}`
    },
    {
        title: "Nombre positif ou négatif",
        description: "Créer une fonction qui vérifie si un nombre est positif ou négatif.",
        demo: `
            <input type="number" id="check-input" placeholder="Entrez un nombre">
            <button onclick="checkPositiveOrNegative()">Vérifier</button>
            <p id="result"></p>
        `,
        solution: `function isPositive(n) {
    return n >= 0 ? 'Positif' : 'Négatif';
}`
    },
    {
        title: "Table de multiplication",
        description: "Créer une fonction multiplicationTable(n) qui affiche une table de multiplication.",
        demo: `<input type="number" id="table-input" placeholder="Entrez un nombre">
               <button onclick="generateTable()">Générer</button>
               <pre id="result"></pre>`,
        solution: `function multiplicationTable(n) {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += \`\${n} x \${i} = \${n * i}\\n\`;
    }
    return table;
}`
    },
    {
        title: "Trier un tableau",
        description: "Créer une fonction sortArray(arr) qui trie un tableau par ordre croissant.",
        demo: `<input type="text" id="sort-input" placeholder="Entrez les nombres séparés par des virgules">
               <button onclick="sortArray()">Trier</button>
               <p id="result"></p>`,
        solution: `function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}`
    },
    {
        title: "Compter les mots",
        description: "Créer une fonction wordCount(str) qui compte les mots dans une chaîne.",
        demo: `<input type="text" id="word-input" placeholder="Entrez une phrase">
               <button onclick="countWords()">Compter</button>
               <p id="result"></p>`,
        solution: `function wordCount(str) {
    return str.trim().split(/\\s+/).length;
}`
    },
    {
        title: "Moyenne des nombres",
        description: "Créer une fonction average(arr) qui calcule la moyenne des éléments d'un tableau.",
        demo: `<input type="text" id="average-input" placeholder="Entrez les nombres séparés par des virgules">
               <button onclick="calculateAverage()">Calculer</button>
               <p id="result"></p>`,
        solution: `function average(arr) {
    const sum = arr.reduce((sum, num) => sum + num, 0);
    return sum / arr.length;
}`
    },
    {
        title: "Remplacer un mot",
        description: "Créer une fonction replaceWord(str, oldWord, newWord) qui remplace un mot dans une phrase.",
        demo: `<input type="text" id="sentence-input" placeholder="Entrez une phrase">
               <input type="text" id="old-word" placeholder="Mot à remplacer">
               <input type="text" id="new-word" placeholder="Nouveau mot">
               <button onclick="replaceWord()">Remplacer</button>
               <p id="result"></p>`,
        solution: `function replaceWord(str, oldWord, newWord) {
    return str.replace(new RegExp(oldWord, 'g'), newWord);
}`
    },
    {
        title: "Série de Fibonacci",
        description: "Créer une fonction fibonacci(n) qui génère une série de Fibonacci jusqu'à n.",
        demo: `<input type="number" id="fibonacci-input" placeholder="Entrez un nombre">
               <button onclick="generateFibonacci()">Générer</button>
               <p id="result"></p>`,
        solution: `function fibonacci(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, n);
}`
    },
    {
        title: "Diviseurs d’un nombre",
        description: "Créer une fonction divisors(n) qui retourne tous les diviseurs d’un nombre donné.",
        demo: `<input type="number" id="divisor-input" placeholder="Entrez un nombre">
               <button onclick="findDivisors()">Trouver</button>
               <p id="result"></p>`,
        solution: `function divisors(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result;
}`
    }
];

const exerciseContainer = document.getElementById('exercise-container');
const exerciseTitle = document.getElementById('exercise-title');
const exerciseDescription = document.getElementById('exercise-description');
const demoArea = document.getElementById('demo-area');
const solutionCode = document.getElementById('solution-code');
const showSolutionBtn = document.getElementById('show-solution');

exercises.forEach((exercise, index) => {
    const li = document.createElement('li');
    li.textContent = exercise.title;
    li.addEventListener('click', () => loadExercise(index));
    exerciseContainer.appendChild(li);
});

function loadExercise(index) {
    const exercise = exercises[index];
    exerciseTitle.textContent = exercise.title;
    exerciseDescription.textContent = exercise.description;
    demoArea.innerHTML = exercise.demo;
    solutionCode.textContent = '';
}
showSolutionBtn.addEventListener('click', () => {
    solutionCode.textContent = exercises.find(
        ex => ex.title === exerciseTitle.textContent
    ).solution;
});

function showAdditionResult() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    document.getElementById('result').textContent = `Résultat: ${num1 + num2}`;
}

function showFactorial() {
    const n = Number(document.getElementById('factorial-input').value);
    document.getElementById('result').textContent = `Résultat: ${factorielle(n)}`;
}
