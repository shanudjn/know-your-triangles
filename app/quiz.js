questions = [
    {
        question: '\nQ : If a triangle has angles 125 deg, 25 deg, 30 deg. Is it an obtuse triangle?',
        options: ['Yes', 'No'],

    },
    {
        question: '\nQ : If a triangle has angles 115 deg, 25 deg, 40 deg. Is it an acute triangle?',
        options: ['Yes', 'No'],

    },
    {
        question: '\nQ : If a triangle has 2 sides with equal lengths and 75 deg angle between them. What is the type of triangle?',
        options: ['Equilateral', 'Isosceles', 'Right',],

    },
    {
        question: '\nQ : If a triangle has 2 angles of 75 degree. What is the measure of third angle in degree?',
        options: [30, 20, 10],

    },
    {
        question: '\nQ : If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?',
        options: ['Equilateral', 'Isosceles', 'Scalene'],

    }
]
answersList = ['Yes', 'No', 'Isosceles', 30, 'Scalene']

var userAnswers = []

var questionDiv = document.querySelector('.div-game-question');

var optionOneLabel = document.querySelector('#option-one');
var optionTwoLabel = document.querySelector('#option-two');
var optionThreeLabel = document.querySelector('#option-three');
var optionFourLabel = document.querySelector('#option-four');

var questionAnswerDiv = document.querySelector('.question-answer');

var resultDiv = document.querySelector('.result-div')

var submitBtn = document.querySelector('#submit')
let score = 0;

questions.forEach(question => {

    console.log(question.question);
    //create paragraph element and add question to it
    let questionParagaph = document.createElement('form');
    questionParagaph.innerText = question.question;

    questionAnswerDiv.appendChild(questionParagaph);

    console.log()
    let optionList = question.options;
    for (let i = 0; i < optionList.length; i++) {
        console.log(optionList[i])
        let optionPara = document.createElement('ul');
        optionPara.innerHTML = `<input type="radio" name ="options"value=${optionList[i]}>` + optionList[i] + '</input>';
        questionParagaph.appendChild(optionPara)
    }
})

submitBtn.addEventListener('click', function () {
    let options = document.getElementsByName('options')
    console.log(options);

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            console.log(options[i].value)
            let answer = options[i].value;
            userAnswers.push(answer)
            //console.log(userAnswers)
        }
    }

    for (let i = 0; i < answersList.length; i++) {
        if (answersList[i] === userAnswers[i]) {
            score++;
        }
    }
    resultDiv.innerHTML = `<p> Your score is ` + score + `</p>`


})

