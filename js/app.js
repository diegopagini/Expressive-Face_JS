/** @format */

function followingEyes() {
	const container = document.querySelector('.color-change');
	container.addEventListener('mousemove', (e) => {
		const eyes = document.querySelectorAll('.eye');
		[].forEach.call(eyes, function (eye) {
			let mouseX = eye.getBoundingClientRect().right;
			if (eye.classList.contains('left-eye')) {
				mouseX = eye.getBoundingClientRect().left;
			}
			let mouseY = eye.getBoundingClientRect().top;
			let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
			let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
			eye.style.transform = `rotate(${rotationDegrees}deg)`;
		});
	});
}
followingEyes();

function beHappy() {
	const faceContainer = document.querySelector('.face-container');
	const mouth = document.querySelector('.mouth');
	const tongue = document.querySelector('#tongue');
	faceContainer.addEventListener('mouseover', (e) => {
		mouth.classList.add('smile');
		tongue.classList.add('tongue');
		mouth.classList.remove('mouth');
	});
	faceContainer.addEventListener('mouseout', (e) => {
		mouth.classList.remove('smile');
		tongue.classList.remove('tongue');
		mouth.classList.add('mouth');
	});
}
beHappy();
