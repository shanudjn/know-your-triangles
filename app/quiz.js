questions = [
    {
        question: '\nQ : Wanda Maximoff has done some magic on Hulk and he is on his way to destroy a city, whom do you send to stop Hulk ?',
        options: ['Captain America', 'Black Widow', 'Iron Man', 'Ant Man'],
        answer: '2'
    },
    {
        question: '\nQ : Name Thor`s hammer?',
        options: ['Vanir', 'Mjolnir', 'Aesir', 'Norn'],
        answer: '1'
    },
    {
        question: '\nQ : What is Captain America`s shield made off?',
        options: ['Adamantium', 'Vibranium', 'Promethium', 'Carbonadium'],
        answer: '1'
    },
    {
        question: '\nQ : What is the alien race Loki sends to invade Earth in The Avengers?',
        options: ['The Chitauri', 'The Skrulls', 'The Kree', 'The Flerkens'],
        answer: '0'
    },
    {
        question: '\nQ : Who does the Mad Titan sacrifice to acquire the Soul Stone?',
        options: ['Nebula', 'Ebony Maw', 'Cull Obsidian', 'Gamora'],
        answer: '3'
    }
]

var questionDiv = document.querySelector('.div-game-question');

var optionOneLabel = document.querySelector('#option-one');
var optionTwoLabel = document.querySelector('#option-two');
var optionThreeLabel = document.querySelector('#option-three');
var optionFourLabel = document.querySelector('#option-four');

var questionAnswerDiv = document.querySelector('.question-answer')

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

