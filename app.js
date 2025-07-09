document.addEventListener('DOMContentLoaded', () => {
    const exercises = [];
    const exerciseTitleEl = document.getElementById('exercise-title');
    const problemDescriptionEl = document.getElementById('problem-description');
    const stepByStepExplanationEl = document.getElementById('step-by-step-explanation');
    const finalSolutionEl = document.getElementById('final-solution');
    const canvas = document.getElementById('chemistryCanvas');
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenuButton = document.getElementById('close-menu-button');
    const navButtons = document.querySelectorAll('.btn--nav-desktop, .btn--nav-mobile');

    function displayExercise(exerciseIndex) {
        stepByStepExplanationEl.innerHTML = ''; problemDescriptionEl.innerHTML = ''; finalSolutionEl.innerHTML = '';
        const ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const exercise = exercises[exerciseIndex]; if (!exercise) return;
        exerciseTitleEl.textContent = exercise.title;
        problemDescriptionEl.innerHTML = exercise.problem;
        finalSolutionEl.innerHTML = exercise.solution;
        
        if (canvas.offsetWidth > 0) { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
        exercise.drawGraph('chemistryCanvas');

        exercise.explanation.forEach((stepContent, index) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'step';
            stepDiv.innerHTML = `<h4>Paso ${index + 1}:</h4> ${stepContent}`;
            stepByStepExplanationEl.appendChild(stepDiv);
        });

        if (window.MathJax && window.MathJax.typesetPromise) { window.MathJax.typesetPromise().catch(err => console.error('MathJax Error:', err));}
        if (mobileMenuOverlay.classList.contains('is-active')) { mobileMenuOverlay.classList.remove('is-active'); document.body.classList.remove('no-scroll');}
    }

    hamburgerButton.addEventListener('click', () => { mobileMenuOverlay.classList.add('is-active'); document.body.classList.add('no-scroll'); });
    closeMenuButton.addEventListener('click', () => { mobileMenuOverlay.classList.remove('is-active'); document.body.classList.remove('no-scroll'); });

    function initializeApp() {
        if (typeof ejercicio1 !== 'undefined') exercises.push(ejercicio1);
        if (typeof ejercicio2 !== 'undefined') exercises.push(ejercicio2);
        if (typeof ejercicio3 !== 'undefined') exercises.push(ejercicio3);
        if (typeof ejercicio4 !== 'undefined') exercises.push(ejercicio4);
        if (typeof ejercicio5 !== 'undefined') exercises.push(ejercicio5);

        if (exercises.length === 0) {
            exerciseTitleEl.textContent = 'Error';
            problemDescriptionEl.innerHTML = '<p>No se pudieron cargar los datos de los ejercicios.</p>';
            return;
        }

        navButtons.forEach(button => {
            if (button.tagName === 'BUTTON' && !button.disabled) { // Asegura que solo los botones (no el 'volver') tengan este listener
                button.addEventListener('click', () => {
                    const exerciseIndex = parseInt(button.getAttribute('data-exercise'));
                    if (exercises[exerciseIndex]) displayExercise(exerciseIndex);
                });
            }
        });

        // --- LÓGICA CLAVE PARA LEER LA URL ---
        const urlParams = new URLSearchParams(window.location.search);
        const exerciseIdFromUrl = parseInt(urlParams.get('id'));

        // Muestra el ejercicio de la URL si es un número válido, si no, muestra el primero.
        if (!isNaN(exerciseIdFromUrl) && exercises[exerciseIdFromUrl]) {
            displayExercise(exerciseIdFromUrl);
        } else {
            displayExercise(0);
        }
    }
    
    window.onload = initializeApp;
});