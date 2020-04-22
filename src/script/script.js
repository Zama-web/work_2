let itemElem = $('.item')

console.log(itemElem.text())
itemElem.text('ПРИВЕТ')

console.log(itemElem.html())
itemElem.html('Пока')


let inputElem = $('.inputElem')

inputElem.val('Входное значение')
console.log(inputElem.val())



function inputText() {
  let source = $('.source');
  let output = $('.output');
  let item = addItem(source.val());
  output.append(item)
}

$('.addBtn').on('click', inputText);

// val()  // работает только с полями ввода 
// html() // работает с html
// text() // работает с текстом (откидывает html)

// val() //без аргументов ->  чтение
// val('значение') //с аргументом ->  запись

function addItem(text) {
  let newElem = $('<a>');
  newElem.text(text)
  newElem.attr('href', 'http://google.com')
  return newElem
}

function inputText() {
  let source = $('.source');
  let output = $('.output');
  let item = addItem(source.val());
  output.append(item)
}

$('.addBtn').on('click', inputText);

function addItem(img) {
  let newElem = $('<img>');
  newElem.attr({
    'src': img,
    'height': '200px',
    'width': '200px'
  });
  return newElem
}
