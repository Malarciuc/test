window.addEventListener('load',function(){
	document.querySelector("#sum").addEventListener('click', function(){
		let x = parseInt(document.querySelector("#x").value);
		let y = parseInt(document.querySelector("#y").value);
		document.querySelector("#res").innerHTML =  x + y;
	})

	let cont = document.querySelector('#container') ;
	cont.addEventListener('mousemove', function(){
		cont.classList.add('color-red');
	})
	cont.addEventListener('mouseleave', function(){
		cont.classList.remove('color-red');
	})

	let but = document.querySelector('#btn4');
	but.addEventListener('click', function(){
		for(var i = 1; i<=10; i++){
			var para = document.createElement('p');
			para.innerHTML = "Paragraful {{i}}";
			if(i % 2 == 0)
				para.classList.add('red');
			else
				para.classList.add('green');
			document.getElementById('p').appendChild(para);
		}
	})
})