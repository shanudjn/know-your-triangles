var height = document.querySelector("#height");
var base = document.querySelector('#base');

var findHypoBtn = document.querySelector('#find-hypo');
var resultDiv = document.querySelector('#result')


findHypoBtn.addEventListener('click', findHypotenuse);

function findHypotenuse() {
    let heightValue = parseInt(height.value);
    let baseHeight = parseInt(base.value);

    let hypo = heightValue * heightValue + baseHeight * baseHeight;
    hypo = Math.sqrt(hypo);

    resultDiv.innerText = "The hypotenuse is : " + hypo;
}
