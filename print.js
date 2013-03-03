// JavaScript Document
function popup(){
	window.print();
}

function clickHandler(e){
	popup();
}

document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('button').addEventListener('click', clickHandler);
});