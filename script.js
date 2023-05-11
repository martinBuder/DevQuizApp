const htmlAsk = [
	{"question": 'Wer hat HTML erfunden?',
	"answer0": ['Robbie Williams'],
	"answer1": ['Lady Gaga'],
	"answer2": ['Tim Berners - Lee', 'true'],
	"answer3": ['Justin Bieber']
	},
	{"question": 'Was bedeutet HTML?',
	"answer0": ['Hypertext Markup Language', true],
	"answer1": ['Nudelgericht'],
	"answer2": ['ein Test'],
	"answer3": ['Automarke']
	},
	{"question": 'Wie viele Buchstaben hat HTML',
	"answer0": ['5'],
	"answer1": ['2'],
	"answer2": ['ca. 25'],
	"answer3": ['4', true]
	},
];

var cssAsk = [{"question": 'Wer hat CSS erfunden?',
"answer0": ['Robbie Williams'],
"answer1": ['Lady Gaga'],
"answer2": ['Tim Berners - Lee', 'true'],
"answer3": ['Justin Bieber']
},
{"question": 'Was bedeutet CSS?',
"answer0": ['Hypertext Markup Language', true],
"answer1": ['Nudelgericht'],
"answer2": ['ein Test'],
"answer3": ['Automarke']
},
{"question": 'Wie viele Buchstaben hat CSS',
"answer0": ['5'],
"answer1": ['2'],
"answer2": ['ca. 25'],
"answer3": ['4', true]
},
];

var jsAsk = [{
"question": 'Wer hat Javascript erfunden?',
"answer0": ['Robbie Williams'],
"answer1": ['Lady Gaga'],
"answer2": ['Tim Berners - Lee', 'true'],
"answer3": ['Justin Bieber']
},
{"question": 'Was bedeutet Javascript?',
"answer0": ['Hypertext Markup Language', true],
"answer1": ['Nudelgericht'],
"answer2": ['ein Test'],
"answer3": ['Automarke']
},
{"question": 'Wie viele Buchstaben hat Javascript',
"answer0": ['5'],
"answer1": ['2'],
"answer2": ['ca. 25'],
"answer3": ['10', true]
},
];

var javaAsk = [
	{"question": 'Wer hat Java erfunden?',
	"answer0": ['Robbie Williams'],
	"answer1": ['Lady Gaga'],
	"answer2": ['Tim Berners - Lee', 'true'],
	"answer3": ['Justin Bieber']
	},
	{"question": 'Was bedeutet Java?',
	"answer0": ['Hypertext Markup Language', true],
	"answer1": ['Nudelgericht'],
	"answer2": ['ein Test'],
	"answer3": ['Automarke']
	},
	{"question": 'Wie viele Buchstaben hat Java',
	"answer0": ['5'],
	"answer1": ['2'],
	"answer2": ['ca. 25'],
	"answer3": ['4', true]
	},
];

let content;
let counter = 0;

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

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

function renderQuizStarting(Quiz) {
	content.innerHTML = askStartingHtml(Quiz);
}

function askStartingHtml(Quiz) {

	return /*html */ `
			<h2>Welcome to<br>
					The Awesome <span class="uppercase">${Quiz}</span> Quiz</h2>
				<p>Ready for the Challange?</p>
				<button type="button" class="btn btn-lg" onclick="startQuizHtml('${Quiz}')">START NOW</button>
			</div>`
}

function startQuizHtml(Quiz) { //ist kein html code 

	let quizAsk = window[Quiz.toLowerCase() + 'Ask']
	alert(quizAsk)
	alert((Quiz.toLowerCase() + 'Ask').length)
	let quizArray = window[Quiz.toLowerCase() + 'Ask'];
	alert(quizArray)
	for (let i = 0; i < quizArray.length; i++) {
			content.innerHTML = quizHtml(quizArray, i);
	}
}

function quizHtml(quizArray, i) {
alert(quizArray)
	return /*html*/ `
	<div class="quizcard">
  <div class="card-body">
    <h5 class="card-title">${quizArray[i]['question']}</h5>
  </div>
  <ul class="list-group list-group-flush">
			<div id="answers"></div>
    <li class="list-group-item" id="answer0" onclick="checkAnswer(i)">${quizArray[i]['answer0'][0]}</li>
    <li class="list-group-item" id="answer1" onclick="checkAnswer(1)">${quizArray[i]['answer1'][0]}</li>
    <li class="list-group-item" id="answer2" onclick="checkAnswer(2)">${quizArray[i]['answer2'][0]}</li>
				<li class="list-group-item" id="answer3" onclick="checkAnswer(3)">${quizArray[i]['answer3'][i]}</li>
  </ul>
  <div class="card-body">
    <button href="#" class="card-link"><</a>
    <button href="#" class="card-link" id="nextAsk" disabled onclick="startQuizHtml('${Quiz}')">></button>
  </div>
</div>`;
}

function checkAnswer(i) {
	let answers = document.getElementById('answers');

	if (htmlAsk[0][`answer${i}`].includes('true')) {
		document.getElementById(`answer${i}`).classList.add('green');
		AUDIO_SUCCESS.play();
		counter++;
		answers.classList.add('noOnclick')
	} else {
		document.getElementById(`answer${i}`).	classList.add('red');
		AUDIO_FAIL.play();

			for (let j = 0; j < 4; j++) {
				if (htmlAsk[0][`answer${j}`].includes('true')) {
					document.getElementById(`answer${j}`).classList.add('green');
					answers.classList.add('noOnclick')
			}
	}
	answers.classList.add('noOnclick')
	document.getElementById('nextAsk').disabled = false;
}
}

// var testAsk = [1, 2, 2, 5, 1]

// function startTest() {
// 	startQuizHtml('Test')
// }

// function startQuizHtml(Maus) { 
// 	let quizName = window[Maus.toLowerCase() + 'Ask'];
// 	alert(quizName.length)
// 	alert(quizName);
// }

