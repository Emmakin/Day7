const Label = document.getElementById('name');
const rating = document.getElementById('rate');
const text = document.getElementById('text');
const prPic = document.getElementById('prPic');
const leftBtnE1 = document.getElementById('left-circle');
const rightBtnE1 = document.getElementById('right-circle');

let nameA =['EYES', 'FACE', 'PASS', 'ROAD', 'STRAWBERRIES'];
let ratingA = ['⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐' ];
let textA = ['Eyes are the light of the body. They are used for seeing and watching movies. The Eyes are very important',
 'The face hold most of sense organs in place. It is one of the most recognisable part of the human body. Most people remember faces than smells. ',
'This is just a typical passage somewhere around the world', 'There are different kinds of road in the world. Some are wide,short, long and even narrow. The roads are one of the beautiful gift humans were bestold with.',
'Strawberry'];
let prPicA = ['./pics/eyes.jpg','./pics/face.jpg','./pics/pass.jpg', './pics/road.jpg', './pics/straw.jpg'];

let num = 0;

leftBtnE1.addEventListener('click', function preDiv(){
    num--;
    if (num < 0){
        num = 4;
    }
    Label.innerHTML= nameA[num];
    rating.innerHTML= ratingA[num];
    text.innerHTML= textA[num];
    prPic.src= prPicA[num];
 
})

rightBtnE1.addEventListener('click', function nextDiv(){
    num++;
    if(num > 4){
        num = 0;
    }
    Label.innerHTML= nameA[num];
    rating.innerHTML= ratingA[num];
    text.innerHTML= textA[num];
    prPic.src= prPicA[num];
})





