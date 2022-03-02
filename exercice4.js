/** 

var a=document.querySelectorAll('li')
function generateRandomCode() {
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
     return myRandomColor;
  }
a.forEach(element  => {element.addEventListener('click',()=>{element.style.color='#'+(Math.random()*0xFFFFFF<<0).toString(16);
})}) ;*/
var a=document.querySelector('ol')
function colorr(){
  var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
     return myRandomColor;
}
a.addEventListener('click',()=>a.style.color='#'+(Math.random()*0xFFFFFF<<0).toString(16))
    
