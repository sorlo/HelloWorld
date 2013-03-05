// JavaScript Document
function popup(){
	$("#dialog").dialog();
	chrome.app.window.create('window.html', {
        top: 128,
        left: 428 + 5,
        width: 300,
        height: 300,
        minHeight: 300,
        maxWidth: 500,
        minWidth: 300
   });
}

function clickHandler(e){
	popup();
}

document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('button').addEventListener('click', clickHandler);
});

$(document).ready(function() {
    $( "#tabs" ).tabs();

});

