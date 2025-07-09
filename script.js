document.addEventListener('DOMContentLoaded', () => {
    const exercises = [];
    
    // Elementos del DOM
    const exerciseTitleEl = document.getElementById('exercise-title');
    const problemDescriptionEl = document.getElementById('problem-description');
    const stepByStepExplanationEl = document.getElementById('step-by-step-explanation');
    const finalSolutionEl = document.getElementById('final-solution');
    const canvas = document.getElementById('chemistryCanvas');
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenuButton = document.getElementById('close-menu-button');
    const navButtons = document.querySelectorAll('.btn--nav-desktop, .btn--nav-mobile');
    
    /** Muestra un ejercicio específico. */
    function displayExercise(exerciseIndex) {
        stepByStepExplanationEl.innerHTML = '';
        problemDescriptionEl.innerHTML = '';
        finalSolutionEl.innerHTML = '';
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const exercise = exercises[exerciseIndex];
        if (!exercise) return;
        
        exerciseTitleEl.textContent = exercise.title;
        problemDescriptionEl.innerHTML = exercise.problem;
        finalSolutionEl.innerHTML = exercise.solution;
        
        if (canvas.offsetWidth > 0) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        exercise.drawGraph('chemistryCanvas');
        
        exercise.explanation.forEach((stepContent, index) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'step';
            stepDiv.innerHTML = `<h4>Paso ${index + 1}:</h4> ${stepContent}`;
            stepByStepExplanationEl.appendChild(stepDiv);
        });
        
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(err => console.error('Error MathJax:', err));
        }
        
        if (mobileMenuOverlay.classList.contains('is-active')) {
            mobileMenuOverlay.classList.remove('is-active');
            document.body.classList.remove('no-scroll');
        }
    }
    
    /** Manejo del menú móvil. */
    hamburgerButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('is-active');
        document.body.classList.add('no-scroll');
    });
    
    closeMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('is-active');
        document.body.classList.remove('no-scroll');
    });
    
    /** Función principal de inicialización. */
    function initializeApp() {
        if (typeof ejercicio1 !== 'undefined') exercises.push(ejercicio1);
        if (typeof ejercicio2 !== 'undefined') exercises.push(ejercicio2);
        if (typeof ejercicio3 !== 'undefined') exercises.push(ejercicio3);
        if (typeof ejercicio4 !== 'undefined') exercises.push(ejercicio4);
        if (typeof ejercicio5 !== 'undefined') exercises.push(ejercicio5);
        
        if (exercises.length === 0) {
            console.error('Ningún ejercicio definido.');
            exerciseTitleEl.textContent = 'Error de Carga';
            problemDescriptionEl.innerHTML = '<p>No se pudieron cargar los ejercicios.</p>';
            return;
        }
        
        navButtons.forEach(button => {
            if (!button.disabled) {
                button.addEventListener('click', () => {
                    const exerciseIndex = parseInt(button.getAttribute('data-exercise'));
                    if (exercises[exerciseIndex]) {
                        displayExercise(exerciseIndex);
                    }
                });
            }
        });
        
        displayExercise(0);
    }
    
    window.onload = initializeApp;
});