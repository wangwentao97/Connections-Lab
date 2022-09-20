window.addEventListener('load', function(){
	let button1 = document.getElementById('B1');
	let button2 = document.getElementById('B2');
	let button3 = document.getElementById('B3');
	let button4 = document.getElementById('B4');
	let button5 = document.getElementById('B5');
	let button6 = document.getElementById('B6');
	let button7 = document.getElementById('B7');
	let button8 = document.getElementById('B8');
	let button9 = document.getElementById('B9');
	let question = document.getElementById("content");
	let puppypic = document.getElementById("picture");

	button1.addEventListener('click', function(){
		button2.style.display='block';
    	button1.style.display='none';
		question.style.fontSize = "50px";
	});

	button2.addEventListener('click', function(){
		button3.style.display='block';
    	button2.style.display='none';
		question.style.color = "red";
    	question.style.fontSize = "100px";
	});

	button3.addEventListener('click', function(){
		question.innerHTML = "REALLY?";
		button4.style.display='block';
		button3.style.display='none';
	});

	button4.addEventListener('click', function(){
		question.innerHTML = "Do you like puppies?";
		question.style.fontSize = "30px";
		question.style.color = "black";
		button4.style.display='none';
		window.open("popup.html","","whith=200, height=200")
	});

	button5.addEventListener('click', function(){
		question.innerHTML = "Then let's see some cute puppies :)";
		question.style.fontSize = "30px";
		question.style.color = "black";
		button5.style.display='none';
		button4.style.display='none';
		button3.style.display='none';
		button2.style.display='none';
		button1.style.display='none';
		puppypic.style.display='block';
		button6.style.display='block';
		button7.style.display='block';
		button8.style.display='block';
		button9.style.display='block';
	});

	button6.addEventListener('click', function(){
		puppypic.src = "images/1.jpg";
	});

	button7.addEventListener('click', function(){
		puppypic.src = "images/2.jpg";
	});

	button8.addEventListener('click', function(){
		puppypic.src = "images/3.jpg";
	});

	button9.addEventListener('click', function(){
		puppypic.src = "images/4.jpg";
	});
});


