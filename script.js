/*var arr = [1,2,3,4,5];
function questions(job){
	var a;
	if(job === 'teacher'){
		a = 'How many years do teach';
	}else if (job === 'prgrammer'){
		a = 'How many program do you create';
	}else if (job === 'electric'){
		a = 'How many times have you been beaten with electricity';
	}else{
		a = 'fuck off';
	}
	return function(name){
		console.log(a + ', ' + name);
	}
}
var teacher = questions('teacher');
console.log(teacher('Potya'));
var ele = questions('electric');
console.log(ele('Potya'));*/

// Funny quiz
window.onload = newQuestion;
// init the score
	var score = 0;
// questions that had happened
	var logList = [];
// init the array of questions
	var listOfQuestions = [

		new Question('Is js the most cool language in the world', ['yes', 'no'], 'yes'),
		new Question('What is the closure', ['Capobelity to get the value from the parrent function', 'When something is to close to each other'], 'Capobelity to get the value from the parrent function'),
		new Question('What is the ansver 2 + 2', ['4', '5'], '4'),
		new Question('Who is the president of U.S.A in nowadays', ['Tramp', 'Putin', 'Leibovich', 'Hillary'], 'Tramp'),
		new Question('How many people in average left out Ukraine from 2012 to 2017 years', ['7 000 000', '5', '6 000 000', '12 000 000'], '12 000 000'),

	];

function getRandom(){
	var randomValue = Math.floor(Math.random() * (listOfQuestions.length - 1));
	return randomValue;
}

function newQuestion(){

// get the random question
	var rand = getRandom();
// IIFE
	(function(quest, fn){
		if(logList.indexOf(quest) == -1){
			logList.push(quest);
			console.log(' ');
			console.log(' ');
			console.log(quest);
			showTheAnsvers();
			console.log(' ');
			var query = prompt(quest);
			fn(query);
		}else{
			newQuestion();
		}
	})(listOfQuestions[rand].question, check)
// Check your chose
	function check(val){
		if(listOfQuestions[rand].ansver[val] == listOfQuestions[rand].correctAnsver){
			score++;
			console.log('You are right');
			console.log('Your score is' + ' ' + score);
		}else{
			console.log('Dude it\'s  fucking wrong');
		}
		setTimeout(newQuestion, 2000);
	}
// Show the ansvers
	function showTheAnsvers(){
		for(var i = 0; i < listOfQuestions[rand].ansver.length; i++){
			console.log( i + ' ' + ':' + ' ' + listOfQuestions[rand].ansver[i]);
		}
	}
}
// Constructor of questions
function Question(question, ansver, correctAnsver){
	this.question = question;
	this.ansver = ansver;
	this.correctAnsver = correctAnsver;
}
	

















