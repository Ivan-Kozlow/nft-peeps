const spoilerSection = document.querySelector(".spoiler");
// СПОЙЛЕРЫ
spoilerSection.addEventListener("click", function (event) {
	// При клике открывать спойлер

	if (spoilerBtn = event.target.closest('.spoiler__button')) {
		spoilerBtn.parentNode.classList.toggle('active');
		arrSpolers = spoilerSection.querySelectorAll('.active')

		if (arrSpolers.length > 1) {
			arrSpolers.forEach(el => {
				el.classList.remove('active');
			});
			spoilerBtn.parentNode.classList.add('active');
		}

	} else if (spoilerText = event.target.closest('.spoiler__text')) {
		spoilerText.parentNode.classList.add('active');
		console.log('click on text');
		// Закрыть спойлер (Всем элементам массива убирается класс active)
	} else {
		arrSpolers.forEach(el => {
			el.classList.remove('active');
		});
		console.log('clear classes');
	}
});
