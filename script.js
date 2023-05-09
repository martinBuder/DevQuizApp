let htmlAsk = [];
let cssAsk = [];
let jsAsk = [];
let javaAsk = [];

function render() {
	let content = document.getElementById('content');
	content.innerHTML = ``;
	content.innerHTML += firstContentHtml();
}

function firstContentHtml() {
	return /*html */ `
			<h2>Welcome to the 
					Quiz</h2>
				<p>Please select your Code-Langlauge.</p>
				<button type="button" class="btn btn-lg">Large button</button>
			</div>`
}

function renderHtmlAsk() {
	let content = document.getElementById('content');
	content.innerHTML = ``;
	content.innerHTML += firstContentHtml();
}