// ****************
// querySelector
// ****************
//To find the first li on the page:
document.querySelector('li');

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');


// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
document.querySelectorAll('li');

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');

// const allLis = document.querySelectorAll('li');
// const colors = ['red','orange','yellow','green','blue','purple']

// allLis.forEach((li,i) => {
//     const color = colors[i];
//     li.style.color = color;
// });


const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%'

//Applies or removes the class done to todo.
// todo.classList.toggle('done')

 //147
//  const newh2 = document.createElement('h2')
//  console.dir(newh2)
//  newh2.innerText = 'I like animals'
//  newh2.classList.add('special')

//  const section = document.querySelector('section')
//  section.appendChild(newh2)