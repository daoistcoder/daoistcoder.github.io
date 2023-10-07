const h2Elements = document.querySelectorAll('.a-choice, .b-choice, .c-choice, .d-choice');

let answerSelected = false;

// Add click event listeners to the h2 elements
h2Elements.forEach((element) => {
  element.addEventListener('click', () => {
    // Check if an answer has already been selected
    
    if (answerSelected) {
      return;
    }
    
    // Remove the 'selected' class from all h2 elements
    h2Elements.forEach((el) => el.classList.remove('selected'));
    // Add the 'selected' class to the clicked h2 element
    element.classList.add('selected');
    
    // Show the bottom-button
    // bottomButton.style.height = '20vh';
    const selectedChoice = document.querySelector('.selected');
    if (!selectedChoice) {
      // No choice selected
      alert('Please select an answer before checking.');
      return;
    }
  
    if (selectedChoice.classList.contains('correct-answer')) {
        // Correct answer selected
        // bottomButton.style.display = 'none';
        // correctFeedback.style.display = 'flex';
        // incorrectFeedback.style.display = 'none';
        window.location.href = 's_assessment_2_A.html';
      
    } else {
      // Incorrect answer selected
      // bottomButton.style.display = 'none';
    //   correctFeedback.style.display = 'none';
    //   incorrectFeedback.style.display = 'flex';
        window.location.href = 's_assessment_2_A.html';
    }
    
    h2Elements.forEach((el) =>  el.classList.remove('selected'));
      // Set the answerSelected flag to true
    });
  
});