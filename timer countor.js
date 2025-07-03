let timeLeft = 60; // 1 minute in seconds
		let timer = document.getElementById('timer');

		function countdown() {
			let seconds = timeLeft;

			timer.innerHTML = `00:${seconds.toString().padStart(2, '0')}`;

			if (timeLeft > 0) {
				timeLeft--;
			} else {
				timer.innerHTML = "00:00";
				clearInterval(interval);
			}
		}

		let interval = setInterval(countdown, 1000);
		