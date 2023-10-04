// function loadQuestions() {
//     fetch("/resources/js/question.json")
//         .then(res => res.json())
//         .then( data => {
//             console.log(data);
//         })
// }

var questions = [
    {
        "question" : "1. Illustrate 15 by answering the following questions. Choose the correct answer.",
        "subquestion" : "A. How many tens are there in 15?",
        "question_img_url" : "../images/blank.svg",
        "correct_answer" : "1 tens",
        "options" : [
            {
                "choice" : "1 tens",
                "feedback" : " Correct! Since the TENS digit of 15 is 1, we have 1 tens. We can also break down 15 into 10 + 5, which shows that 15 consists of 1 tens and 5 ones. "
            },
            {
                "choice" : "5 tens",
                "feedback" : "If we break down 15 into 10 + 5. How many tens are there in 10?"
            }
            ],
        "hints" : "What digit shows the TENS digit in a number?"
    },
    {
        "question" : "1. Illustrate 15 by answering the following questions. Choose the correct answer.",
        "subquestion" : "B. Which illustration shows 1 tens?",
        "question_img_url" : "../images/WN-P2-A1_Q1A_Option-A.svg",
        "correct_answer" : "image 1",
        "options" : [
            {
                "choice" : "image 1",
                "feedback" : "Correct! Since we illustrate tens using base-10 blocks, 1 tens is illustrated as 1 base-10 block. "
            },
            {
                "choice" : "image 2",
                "feedback" : "Tens can be represented with base-10 blocks. How can we represent 1 tens using base-10 blocks? "
            }
            ],
        "hints" : "How do we illustrate tens?"
    }
];

const mainContainer = document.querySelector('.activity-container');
const bottomNav = document.querySelector('.bottom-nav');
const nextButton = document.getElementById('nextButton');
const feedback = document.getElementById('feedbackSection');
const feedbackContent = document.getElementById('feedbackContent');
const continueButton = document.querySelector('.feedback-button');
const questionImage = document.querySelector('.question-image');

const main = document.querySelector('.question-prompt');
const optionsContainer = document.querySelector('.choices');

function createImg(wrapper, alt, url, width){
    const image = document.createElement('img');
    image.src = url;
    image.setAttribute('alt', alt);
    image.setAttribute('width', width);
    return wrapper.appendChild(image);
}

function pageElements(parent, t, content, c){
    const ele = document.createElement(t);
    ele.innerText = content;
    ele.classList.add(c);
    return parent.appendChild(ele);
}

function createQuestion(){

    if (questions.length == 0){
        console.log("game over");
    } else {
        const questionItem = questions.shift();
        // console.log(questionItem);
        outputQuestion(questionItem, main);
    }
}

let answer = '';
let feedbackText = '';

var oldQuestion = '';
var oldSubquestion = '';

function outputQuestion(questionItem, parent){
    // console.log(questionItem);
    const question = pageElements(main, 'p', questionItem.question, 'question');
    const subQuestion = pageElements(main, 'p', questionItem.subquestion, 'sub-question');
    const imgWrapper = pageElements(main, 'div', '', 'question-image');
    const imageEl = createImg(imgWrapper, '', questionItem.question_image_url, "70%");


    const arr = questionItem.options;
    const jsonOptions = JSON.stringify(arr);
    // console.log(jsonOptions);

    const choices = JSON.parse(jsonOptions);

    console.log(choices);
    choices.forEach(e => {
        const choiceItem = pageElements(optionsContainer, 'div', '', 'choice-item');
        const choiceText = pageElements(choiceItem, 'p', e.choice, 'choice-text' );
        // console.log(e.choice);

        choiceItem.addEventListener('click', ()=>{
            answer = e.choice;
            feedbackText = e.feedback
            console.log(answer);
            // Show the bottom-button
            choiceItem.classList.remove('selected');
            // choiceItem.classList.add('selected');
            bottomNav.style.height = '15vh';
            mainContainer.style.paddingBottom = '50px';
        });

    });

    oldQuestion = question;
    oldSubquestion = subQuestion;
    const oldChoices = optionsContainer.querySelectorAll('choice-item');
    //Check answer
    nextButton.addEventListener('click', () => {
        if(questionItem.correct_answer == answer){
            console.log('correct');
            feedback.style.display = 'block';
            feedbackContent.innerText = feedbackText;
            feedback.style.backgroundColor = '#FFD15B';

        } else{
            feedback.style.display = 'block';
            feedbackContent.innerText = feedbackText;
            feedback.style.backgroundColor = '#EF1305';
        }
    });


    continueButton.addEventListener('click', () => {
        oldQuestion.remove();
        oldSubquestion.remove();

        while (optionsContainer.firstChild){
            optionsContainer.removeChild(optionsContainer.firstChild);
        }

        // oldChoiceText.remove();
        createQuestion();
        feedback.style.display = 'none';
        bottomNav.style.height = '0';

    });

}




// function populateQuestion(){
//     const question = pageElements(main, 'p', 'Question prompt here', 'question');
//     const subQuestion = pageElements(main, 'p', 'Sub Question prompt here', 'sub-question');
// }

window.onload = createQuestion();


