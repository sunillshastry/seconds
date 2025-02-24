// Main Script

const taskbarBtn = document.getElementById('taskbar-btn');

taskbarBtn.addEventListener('click', function () {
	document.querySelector('.taskbar-icon').classList.toggle('icon-tgl');
	this.classList.toggle('taskbar-tgl');
	if (this.classList.contains('taskbar-tgl')) {
		document.querySelector('.taskbar-text').textContent = 'Less';
		document.querySelector('.extra-notifications').classList.add('open-noti');
		document.querySelector('.quote-container').classList.add('quote-hide');
		document.querySelector('.greeting-container').classList.add('greet-hide');
	} else {
		document.querySelector('.taskbar-text').textContent = 'More';
		document
			.querySelector('.extra-notifications')
			.classList.remove('open-noti');
		document.querySelector('.quote-container').classList.remove('quote-hide');
		document
			.querySelector('.greeting-container')
			.classList.remove('greet-hide');
	}
});
