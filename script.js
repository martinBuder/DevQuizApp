let htmlAsk = [
	{"question": 'Wer hat HTML erfunden?',
	"answer0": ['Robbie Williams'],
	"answer1": ['Lady Gaga'],
	"answer2": ['Tim Berners - Lee', 'true'],
	"answer3": ['Justin Bieber']
	},
];// idee if includes true background green else red


let cssAsk = [];
let jsAsk = [];
let javaAsk = [];

let content;
let counter = 0;

function render() {
	content = document.getElementById('content');
	content.innerHTML = firstContentHtml();
}

function firstContentHtml() {
	return /*html */ `
			<h2>Welcome to the 
					Quiz</h2>
				<p>Please select your Code-Langlauge.</p>
				<button type="button" class="opacityNone">Large button</button>
			</div>`
}

function renderHtmlAsk() {
	content.innerHTML = askHtml('Html');
}

function renderCssAsk() {
	content.innerHTML = askHtml('Css');
}

function renderJsAsk() {
	content.innerHTML = askHtml('Js');
}

function renderJavaAsk() {
	content.innerHTML = askHtml('Java');
}

function askHtml(Quiz) {
	return /*html */ `
			<h2>Welcome to<br>
					The Awesome <span class="uppercase">${Quiz}</span> Quiz</h2>
				<p>Ready for the Challange?</p>
				<button type="button" class="btn btn-lg" onclick="startQuiz${Quiz}()">START NOW</button>
			</div>`
}

function startQuizHtml() { //ist kein html code 
	content.innerHTML = quizHtml(); 
}

function quizHtml() {

	return /*html*/ `
	<div class="quizcard">
  <div class="card-body">
    <h5 class="card-title">${htmlAsk[0]['question']}</h5>
  </div>
  <ul class="list-group list-group-flush">
			<div id="answers"></div>
    <li class="list-group-item" id="answer0" onclick="checkAnswer(0)">${htmlAsk[0]['answer0'][0]}</li>
    <li class="list-group-item" id="answer1" onclick="checkAnswer(1)">${htmlAsk[0]['answer1'][0]}</li>
    <li class="list-group-item" id="answer2" onclick="checkAnswer(2)">${htmlAsk[0]['answer2'][0]}</li>
				<li class="list-group-item" id="answer3" onclick="checkAnswer(3)">${htmlAsk[0]['answer3'][0]}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link"><</a>
    <a href="#" class="card-link">></a>
  </div>
</div>`;
}

function checkAnswer(i) {
	let answers = document.getElementById('answers');

	if (htmlAsk[0][`answer${i}`].includes('true')) {
		document.getElementById(`answer${i}`).classList.add('green');
		counter++
	} else {
		document.getElementById(`answer${i}`).classList.add('red');
	}
	answers.classList.add('noOnclick')
}