const spoilerSection = document.querySelector(".spoiler");
// СПОЙЛЕРЫ
spoilerSection.addEventListener("click", function (event) {
	// При клике открывать спойлер
	if (spoilerBtn = event.target.closest('.spoiler__button')) {
		spoilerBtn.parentNode.classList.toggle('active');

	} else if (spoilerText = event.target.closest('.spoiler__text')) {
		spoilerText.parentNode.classList.add('active');
		// Закрыть спойлер (Всем элементам массива убирается класс active)
	} else {
		arrSpolers = spoilerSection.querySelectorAll('.spoiler__item')
		arrSpolers.forEach(el => {
			el.classList.remove('active');
		});
	}
});
