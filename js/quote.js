// QUOTES API
const quoteContent = document.getElementById("quote-content");
const quoteAuthor = document.querySelector(".quote-author");
const quoteUrl = "https://type.fit/api/quotes";

async function getQuote(url) {
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

async function generateRandomQuote() {
	const quoteList = await getQuote(quoteUrl);
	const randomNumber = Math.floor(Math.random() * quoteList.length);
	const { text, author } = quoteList[randomNumber];
	return [text, author];
}

function displayQuote() {
	let x = setInterval(async () => {
		const data = await generateRandomQuote();
		const [txt, person] = data;
		document.querySelector(".quote-content").style.opacity = "0";
		quoteAuthor.style.opacity = "0";
		setTimeout(function () {
			quoteContent.textContent = txt;
			person === null
				? (quoteAuthor.textContent = "- Unknown")
				: (quoteAuthor.textContent = `- ${person}`);
			document.querySelector(".quote-content").style.opacity = "1";
			quoteAuthor.style.opacity = "1";
		}, 600);
	}, 8000);
}

displayQuote();
