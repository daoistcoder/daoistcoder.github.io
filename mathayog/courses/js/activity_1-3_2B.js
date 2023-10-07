// Get the main container elements
const mainContainer = document.querySelector('.activity-container');

// Get all the choices elements
const choiceItems = document.querySelectorAll('.choice-item');

// Get the bottom-button element
const bottomButton = document.querySelector('.bottom-button');
const nextButton = document.getElementById('nextButton');
const continueButton = document.getElementById('continueButton');

const feedback = document.getElementById('feedbackSection');
const choices = document.querySelectorAll('choice-item');
var correct = false;
const feedbackContent = document.getElementById('feedbackContent');
const feedbackArr = [
        "Tama! Dahil sa inilalarawan natin ang sampuan gamit ang base 10 block, ang 5 sampuan ay inilarawan bilang 5 base 10 block. ",
        "Suriin ang mga pigura. Alin ang naglalaman ng tamang uri ng bloke na kumakatawan sa 5 sampuan?  "
    ];

const language = document.getElementById('dropdownMenu');
language.addEventListener('change', (e)=> {
    language.value = e.target.value;
})


// Add click event listeners to the choices elements
choiceItems.forEach((element) => {
    element.addEventListener('click', () => {
      // Remove the 'selected' class from all choices elements
      choiceItems.forEach((el) => el.classList.remove('selected'));
      // Add the 'selected' class to the clicked choice element
      element.classList.add('selected');

      if (element.getAttribute('data-choice') === '2') {
        correct = true;

        feedback.style.display = 'block';
        feedbackContent.innerText = feedbackArr[0];
        feedback.style.backgroundColor = '#FFD15B';
        }
        else{
            correct = false;
            feedback.style.display = 'block';
            feedback.style.backgroundColor = '#E3E3E3';
            feedbackContent.innerText = feedbackArr[1];
        }

      // Show the bottom-button
    //   bottomButton.style.height = '15vh';
    //   mainContainer.style.marginBottom = '-150px';


    });
  });

//   nextButton.addEventListener('click', function () {
//     // Redirect to the desired page (e.g., "asd.html")
//     // window.location.href = 'p_question_2.html';

//     //Condition/ check answer
//     if (correct == true) {
//         feedback.style.display = 'block';
//         feedbackContent.innerText = feedbackArr[0];
//         feedback.style.backgroundColor = '#FFD15B';
//     }
//     else{
//         feedback.style.display = 'block';
//         feedback.style.backgroundColor = '#E3E3E3';
//         feedbackContent.innerText = feedbackArr[1];
//     }
// });

continueButton.addEventListener('click', function () {
    // Closes feedback slide
    feedback.style.display = 'none';
    bottomButton.style.height = '0';
    mainContainer.style.paddingBottom = '150px';
    //redirect page
    if (correct == true){
        window.location.href = '../views/activity_1-3_2C.html';
    }
});

// ================== Hints ==========================
const hintTool= document.querySelector('.hint-tool');
const hintSection = document.querySelector('.activity-hint-section');
const hideBtn = document.getElementById('hideHintBtn');
// const activityContainer = documment.querySelector('.activity-container')

hintTool.addEventListener('click', () => {
    hintSection.style.display = 'block';
    hintSection.style.marginLeft = '0px';
});

hideBtn.addEventListener('click', () => {
    hintSection.style.display = 'none';

   mainContainer.style.width = '100%';

});

// ==============================================================================
// ==============================================================================



