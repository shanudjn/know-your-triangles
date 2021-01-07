var baseInput = document.querySelector('#base');
var heightInput = document.querySelector('#height');

var findAreaBtn = document.querySelector('#find-area');
var resultParagraph = document.querySelector('#result');

findAreaBtn.addEventListener('click', findArea)

function findArea() {
    let base = parseInt(baseInput.value);
    let height = parseInt(heightInput.value);

    let area = (base * height) / 2;
    result.innerText = 'The area for the Triangle is : ' + area;
}