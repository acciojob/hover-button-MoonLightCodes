//your code here
window.addEventListener('load',()=>{
	let b = document.createElement('button');
	b.setAttribute('id','btn');
	b.setAttribute('type','submit');
	b.classList.add('btn');
	b.innerText='Submit';
	document.querySelector('div').append(b);
	
})