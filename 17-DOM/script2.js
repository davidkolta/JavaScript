// getElementbyId() -- gets elemtns by id

const heading = document.getElementById('heading');
console.log(heading);


//** getElemntsByClassName */ retur all elements with same class name in HTML collection

const boxes = document.getElementsByClassName('box')
console.log(boxes);

boxes[0]
boxes.item(0)


//** querySelector  */ universal way of getting elements 

const heading2 = document.querySelector('#heading');

const heading3 = document.querySelector('hi');
const heading4 = document.querySelector('asdasd')

console.log(heading2);
console.log(heading3);
console.log(heading4);
