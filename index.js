/*(function(){
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.getElementById('equal');

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    let value = e.target.dataset.num;
    screen.value += value;
  })
});

equal.addEventListener('click', function(e){
  if(screen.value === ''){
    screen.value = "";
  }else{
    let result = eval(screen.value);
    screen.value = result;
  }
})
clear.addEventListener('click', function(e){
  screen.value = "";
})


})();*/
let screen = document.querySelector('.screen');

function nineClick(){
  screen.value += 9;
}
function eightClick(){
  screen.value += 8;
}
function sevenClick(){
  screen.value += 7;
}
function sixClick(){
  screen.value += 6;
}
function fiveClick(){
  screen.value += 5;
}
function fourClick(){
  screen.value += 4;
}
function threeClick(){
  screen.value += 3;
}
function twoClick(){
  screen.value += 2;
}
function oneClick(){
  screen.value += 1;
}
function zeroClick(){
  screen.value += 0;
}
//function dotClick(){
 // screen.value += ;
//}

let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let subtract = document.getElementById('subtract')
let sum = document.getElementById('sum')
function multiClick(){
  screen.value += multiply.dataset.num;
}
function divClick(){
  screen.value += divide.dataset.num;
}
function subClick(){
  screen.value += subtract.dataset.num;
}
function sumClick(){
  screen.value += sum.dataset.num;
}


let clear = document.querySelector('.btn-clear');
let equal = document.getElementById('equal');

function equalClick(){
  if(screen.value === ''){
    screen.value = "";
  }else{
    let result = eval(screen.value);
    screen.value = result;
  }
}