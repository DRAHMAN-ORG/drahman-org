document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('selectorContainer');
    const grid = document.getElementById('selectorGrid');
    const gradeButtons = document.getElementById('gradeButtons');
    let currentOption = null;

    const aiModels = ['POE', 'Claude', 'GPT-4', 'Gemini'];

    function addOption(aiName) {
        const option = document.createElement('div');
        option.className = 'option';
        option.dataset.ai = aiName;
        option.textContent = aiName;
        option.addEventListener('click', () => selectOption(option));
        grid.appendChild(option);
        return option;
    }

    function selectOption(selectedOption) {
        if (currentOption) {
            currentOption.classList.remove('selected');
        }
        selectedOption.classList.add('selected');
        currentOption = selectedOption;
        updateGradeLinks(selectedOption.dataset.ai);
    }

    function updateGradeLinks(aiModel) {
        const buttons = gradeButtons.querySelectorAll('.cta-button');
        buttons.forEach(button => {
            // Remove any existing click event listeners
            button.removeEventListener('click', button.clickHandler);
            
            // Add new click event listener
            button.clickHandler = (e) => {
                e.preventDefault(); // Prevent default link behavior
                handleButtonClick(button, aiModel);
            };
            button.addEventListener('click', button.clickHandler);
        });
    }

    function handleButtonClick(button, aiModel) {
        const grade = button.dataset.grade;
        const personaje = button.dataset.personaje;
        const baseUrl = button.href; // Use the original href as the base URL

        // Here you can add logic to handle different AI models
        switch(aiModel) {
            case 'POE':
                // POE might not need any changes
                window.open(baseUrl, '_blank');
                break;
            case 'Claude':
                // For Claude, you might need to add a parameter or change the URL structure
                window.open(`${baseUrl}?ai=claude`, '_blank');
                break;
            case 'GPT-4':
                // For GPT-4, you might need to redirect to a different service
                window.open(`https://chat.openai.com/${personaje}_${grade}_Drahman`, '_blank');
                break;
            case 'Gemini':
                // For Gemini, you might need to use a completely different approach
                alert(`For Gemini: ${personaje}_${grade}_Drahman`);
                // You could also redirect to a Gemini-specific page on your site
                // window.location.href = `/gemini/${personaje}_${grade}_Drahman`;
                break;
            default:
                window.open(baseUrl, '_blank');
        }
    }

    // Initial setup
    aiModels.forEach(ai => addOption(ai));
    
    // Select the first option by default and update links
    const firstOption = grid.firstChild;
    if (firstOption) {
        selectOption(firstOption);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const options = Array.from(grid.children);
        const currentIndex = options.indexOf(currentOption);
        let newIndex;

        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                newIndex = (currentIndex + 1) % options.length;
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                newIndex = (currentIndex - 1 + options.length) % options.length;
                break;
            default:
                return;
        }

        selectOption(options[newIndex]);
    });
});