// JavaScript Document
function popup(){
	$("#dialog").dialog();
}

function clickHandler(e){
	popup();
}

document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('button').addEventListener('click', clickHandler);
});

$(document).ready(function() {
    $('a').css({'background-color': 'yellow'});
});

