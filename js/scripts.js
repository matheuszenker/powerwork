$(function() {
	var timer = $("#timer");
	var btnStart = $("#btn-timer");
	var btnRelax = $("#btn-relax");
	var timeWork = 52;
	var timeRelax = 17;
	var name = 'Powerwork';

	function timerClock(nowTime, message) {
		var start = new Date;

		var refreshId = setInterval(function() {
			var total_seconds = (new Date - start) / 1000;   

			var hours = Math.floor(total_seconds / 3600);
			total_seconds = total_seconds % 3600;

			var minutes = Math.floor(total_seconds / 60);
			total_seconds = total_seconds % 60;

			var seconds = Math.floor(total_seconds);

			hours = pretty_time_string(hours);
			minutes = pretty_time_string(minutes);
			seconds = pretty_time_string(seconds);

			var currentTimeString = hours + ":" + minutes + ":" + seconds;

			if(seconds >= nowTime) {
				document.title = name + ' ' + message;
				btnStart.button('reset');
				btnRelax.button('reset');
				clearInterval(refreshId);
			}

			timer.text(currentTimeString);
		}, 1000);
	}

	function pretty_time_string(num) {
    	return ( num < 10 ? "0" : "" ) + num;
  	}

	btnStart.click(function(event) {
		btnStart.button('loading');
		timerClock(timeWork, '(RELAX)');
	});

	btnRelax.click(function(event) {
		btnRelax.button('loading');
		timerClock(timeRelax, '(ITS SHOWTIME AGAIN)');
	});
});