let images = document.querySelectorAll('.img');

window.onload = function() {
let images = document.querySelectorAll('.img');
let count = [];
for (let i = 0; i < images.length; i++) {
    count.push(images[i].src);
}

let body = document.body
let carousel_cont = document.createElement('div');
carousel_cont.setAttribute('class', 'carousel_cont');
let scene = document.createElement('div');
scene.setAttribute('class', 'scene');
let carousel = document.createElement('div');
carousel.setAttribute('class', 'carousel');
scene.appendChild(carousel);
// body.appendChild(scene);
body.appendChild(carousel_cont);

for (let i = 0; i < count.length; i++) {
    let imagetag = document.createElement('img');
    imagetag.setAttribute('src', images[i].src);
    imagetag.setAttribute('class', "imgc");
    let cell = document.createElement('div');
    cell.setAttribute('class', 'carousel__cell')
    cell.appendChild(imagetag);
    carousel.appendChild(cell);
    scene.appendChild(carousel);
    carousel_cont.appendChild(scene);
}

let btns = document.createElement('div');
let lbtn = document.createElement('button');
let rbtn = document.createElement('button');
let rtext = document.createTextNode("next");
let ltext = document.createTextNode("prev");
btns.setAttribute("class", "btns");
lbtn.setAttribute("class", "lbtn");
rbtn.setAttribute("class", "rbtn");
lbtn.appendChild(ltext);
rbtn.appendChild(rtext);
btns.append(lbtn, rbtn);
// body.appendChild(btns);
carousel_cont.appendChild(btns);

var cellCount = count.length;
var selectedIndex = 0;
let degrees = 180/count.length;
let Rad = degrees/180*Math.PI;
let traZ = 105/Math.tan(Rad);
let deg = '('+'-'+traZ+'px'+')';
let deg1 = '('+traZ+'px'+')';
console.log(deg);

let celget = document.querySelectorAll('.carousel__cell');
// console.log(celget);
// var anglep = selectedIndex / cellCount * 360;
function rotateCarousel() {
    const domNode = document.querySelector('.carousel');
    var angle = selectedIndex / cellCount * -360;
    var anglep = selectedIndex / cellCount * 360;
    // console.log(angle);
    domNode.style.transform = 'translateZ'+deg+' rotateY(' + angle + 'deg)';
    
  }
  let num = 360/cellCount;
 console.log(num);
 celget[0].style.transform =  'rotateY(' + 0 + 'deg)'+ 'translateZ'+deg1 ;
 celget[1].style.transform =  'rotateY(' + num + 'deg)'+ 'translateZ'+deg1 ;
 celget[2].style.transform =  'rotateY(' + 2*num + 'deg)'+ 'translateZ'+deg1 ;

  setInterval(function() {
    selectedIndex++;
    rotateCarousel();
  }, 5000)

  lbtn.addEventListener('click',function() {
    selectedIndex--;
    rotateCarousel();
  });
  rbtn.addEventListener('click',function() {
    selectedIndex++;
    rotateCarousel();
  })



return count;
}

  