
const burger = document.querySelector('#burger');
const menu = document.querySelector('#overlay');
const privet= document.querySelector('#privet');

const links=document.querySelectorAll('.menu__title__privet');   //querySelectorAll перебирает весь список и возвращает псевдокласс NodeList


links.forEach(function(element){            //forEach выполняет указанную функцию один раз для каждого елемента NodeList
  element.addEventListener('click',toggleMenu);  
});

function toggleMenu(){
  burger.classList.toggle("activ");
  privet.classList.toggle("activ");
};

burger.addEventListener('click',toggleMenu);