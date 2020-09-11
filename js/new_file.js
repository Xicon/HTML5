let button = document.getElementsByClassName('button')[0];
let button2 = document.getElementsByClassName('button2')[0];
let img = document.getElementsByClassName('img')[0];
button.addEventListener('click',function(){
	img.style.display = "block"
},false)
button2.addEventListener('click',function(){
	img.style.display = "none"
},false)