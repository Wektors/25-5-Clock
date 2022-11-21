import "./Timer.sass";

function Timer() {
    return (
			<section id="timer-section">
				<div id="timer-label">Session</div>
				<div id="time-left">21:37</div>
				<button id="start_stop">
					<img src="play.png" />
					<img src="pause.png" />
					<img src="replay.png" />
				</button>
			</section>
		);
}

export default Timer;