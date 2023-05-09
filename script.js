let htmlAsk = [];
let cssAsk = [];
let jsAsk = [];
let javaAsk = [];

let content 

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
	content.innerHTML = askHtml('HTML');
}

function renderCssAsk() {
	content.innerHTML = askHtml('CSS');
}

function renderJsAsk() {
	content.innerHTML = askHtml('JS');
}

function renderJavaAsk() {
	content.innerHTML = askHtml('Java');
}

function askHtml(Quiz) {
	return /*html */ `
			<h2>Welcome to<br>
					The Awesome ${Quiz} Quiz</h2>
				<p>Ready for the Challange?</p>
				<button type="button" class="btn btn-lg" onclick="startQuiz${Quiz}()">START NOW</button>
			</div>`
}

