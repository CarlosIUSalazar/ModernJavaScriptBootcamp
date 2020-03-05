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

 // Adding elements to the DOM
//  const newh2 = document.createElement('h2')
//  console.dir(newh2)
//  newh2.innerText = 'I like animals'
//  newh2.classList.add('special')

//  const section = document.querySelector('section')
//  section.appendChild(newh2)

//Add image
const newImg = document.createElement('img');
newImg.src = 'https://i.ytimg.com/vi/7qOFHGcT7ec/maxresdefault.jpg'
newImg.style.width = "300px"


document.body.appendChild(newImg);

//add link
const newLink = document.createElement('a');
newLink.innerText = 'Mr Bubz. Video! CLICK MEEE';
newLink.href = 'https://www.youtube.com/watch?v=JdZDWuGcuCs'
const firstP = document.querySelector('p');
firstP.appendChild(newLink);

//148  appendChild, insertAdjacentElement, Append, Prepend
const parentUl = document.querySelector('ul')
const newLi = documentCreateElement('li');
newLi.innerText = "I am a new LI";
parentUl.appendChild(newLi);


const i = document.createElement('i');
i.innerText = "I AM ITALICS!!";
const firstP = document.querySelector('p');
firstP.insertAdjacentElement('beforebegin',i)  //insertAdjacentElement check on MDN it has beforebegin, afterbegin, beforeend, afterend etc.


firstP.append(i);
firstP.append(newLi);
// you could do firstP.append(i, newLi) to append 2 elements at the same time.  With appendChild you can't append more than 1 at a time.


//149 Remove elements
//removeChild and remove (remove is newer it may not work in IE)
const ul = document.querySelector('secton ul');
const removeMe = ul.querySelector('.special');
const deleted = ul.removeChild(removeMe) //removeChild returns the deleted element so you can save it into a variable


//remove doesnt need the parent just the node to delete
const h1 = document.querySelector('h1')
h1.remove()
