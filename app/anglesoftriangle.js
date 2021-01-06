var firstAngle = document.querySelector('#first-angle');
var secondAngle = document.querySelector('#second-angle');
var thirdAngle = document.querySelector('#third-angle');
var resultParagraph = document.querySelector('#result');

checkButton = document.querySelector('#check');
checkButton.addEventListener('click', checkAngles);

function checkAngles() {
    let firstAngleValue = parseInt(firstAngle.value);
    let secondAngleValue = parseInt(secondAngle.value);
    let thirdAngleValue = parseInt(thirdAngle.value);

    // if (firstAngleValue == isNaN || secondAngleValue == isNaN || thirdAngleValue == isNaN) {
    //     resultParagraph.innerText = 'Input cannot be empty';
    //     console.log(resultParagraph.inneeText)
    // }
    if (firstAngleValue + secondAngleValue + thirdAngleValue != 180) {
        console.log('hello');
        resultParagraph.innerText = "😥 The angles won't make up a triangle 😥"
    }
    else {
        resultParagraph.innerText = "✨🎊 The angles make up a triangle 🎊✨"

    }

}

