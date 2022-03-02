var a=document.querySelectorAll('input')
var b=document.querySelector('select')
var p=document.querySelector('p')

a[0].addEventListener("change",()=>{p.style.color=a[0].value}),
a[1].addEventListener("change",()=>{p.style.fontSize=a[1].value+"px"} )
b.addEventListener("change",()=>{p.style.fontFamily=b.value+",Charcoal,sans-serif"})