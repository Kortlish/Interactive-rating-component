const rate = document.querySelectorAll('.rating-item');
let starScore = 3;
const score = document.querySelector('.score');

const submitBtn = document.querySelector('.submit-btn');

const cardContent1 = document.querySelector('.card-content-1');
const cardContent2 = document.querySelector('.card-content-2');

submitBtn.addEventListener('click', onSubmit);
rate.forEach((btn) => {
	btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit() {
	cardContent1.classList.add('hide');
	score.textContent = starScore;
	cardContent2.classList.remove('hide');
}

function handleRatingBtnClick(event) {
	rate.forEach((btn) => {
		btn.classList.remove('active');
	});
	if (event.target.classList.contains('rating-item')) {
		event.target.classList.add('active');
	} else {
		event.target.parentElement.classList.add('active');
	}

	starScore = event.target.textContent;
	console.log(starScore);
}

// rate.addEventListener('click', () => {

//     return

// })
