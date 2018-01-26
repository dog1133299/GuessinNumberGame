function s(e){
	return document.querySelector(e);
};

var count=0;
var randomNumber;
var max;
var input;
document.addEventListener("DOMContentLoaded", function() {
   
   var levels=document.querySelectorAll('#page1 button');
   for (var i = 0; i < levels.length; i++) {
   	levels[i].addEventListener('click',loadGame);
   }
});


function loadGame(level){

	

	s('#page1').style.display='none';
	s('#page2').style.display='block';
	s('#page2 input').focus();
	max =parseInt(level.target.getAttribute("data-n"));
	randomNumber=Math.ceil(Math.random()*max);
	console.log(randomNumber);
	
	s('#page2 h1 span').innerHTML=max;
	s('#page2 input').addEventListener("keypress",enter);
	s('#page2 button').addEventListener('click',compare);


	s('#page3 button').addEventListener('click',function(){
		s('#page2 input').removeEventListener("keypress",enter);
		s('#page2 button').removeEventListener('click',compare);
		reset();
	});

};

function saveNumber(n){
	s('.used span').innerHTML=s('.used span').innerHTML+' '+n;
};

function enter(e){
		if (e.keyCode==13) {
			s('#page2 button').click();
		}
};
function compare(){

		input = parseInt(s('#page2 input').value);

		if (input===randomNumber) {
			//console.log('ran'+randomNumber);
			//console.log('in'+input);
			s('#page2').style.display='none';
			s('#page3').style.display='block';
			s('.win span').innerHTML= ++count;
			s('#page3 h2 span').innerHTML=randomNumber;
		}else if (input<randomNumber) {
			s('.tries span').innerHTML=++count;
			
			s('.response').innerHTML='Too low !';
			saveNumber(input);
		}else if (input>randomNumber) {
			s('.tries span').innerHTML=++count;
			s('.response').innerHTML='Too High!';
			saveNumber(input);
		}else{
			s('.response').innerHTML='Please enter a number!';
		}
};
function reset(){
	count=0;
	s('.response').innerHTML='';
	s('.used span').innerHTML='';
	s('.tries span').innerHTML='0';
	s('#page3').style.display='none';
	s('#page1').style.display='block';

}