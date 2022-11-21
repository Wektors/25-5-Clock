import "./App.sass";
import { useState, useEffect } from "react";

function App() {
	const [currMode, setCurrMode] = useState("Session");

	const [isActive, setIsActive] = useState(false);

	const [currSessionLength, setCurrSessionLength] = useState(1500);

	const [currBreakLength, setCurrBreakLength] = useState(300);

	const [currTime, setCurrTime] = useState(currSessionLength);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setCurrTime((currTime) => currTime - 1);
			}, 1000);
		} else if (!isActive || currTime == 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, currTime]);

	function toggleActivity() {
		setIsActive(!isActive);
	}

	function reset() {
		setCurrTime(currSessionLength);
		setIsActive(false);
	}

	function sessionIncr() {
		setCurrSessionLength(currSessionLength + 60);
		setCurrTime(currSessionLength);
	}

	function sessionDecr() {
		setCurrSessionLength(currSessionLength - 60);
		setCurrTime(currSessionLength);
	}

	function breakIncr() {
		setCurrBreakLength(currBreakLength + 60);
	}

	function breakDecr() {
		setCurrBreakLength(currBreakLength - 60);
	}

	function toFullTime(seconds) {
		let minutes = 0;
		while (seconds > 59) {
			seconds = seconds - 60;
			minutes++;
		}

		let minutesToDisplay = minutes;

		if (minutes < 10) {
			minutesToDisplay = "0" + minutes;
		}

		let secondsToDisplay = seconds;

		if (seconds < 10) {
			secondsToDisplay = "0" + seconds;
		}
		return minutesToDisplay + ":" + secondsToDisplay;
	}

	function toMinutes(seconds) {
		let minutes = 0;
		while (seconds > 0) {
			seconds = seconds - 60;
			minutes++;
		}
		return minutes;
	}

	return (
		<div className="App">
			<section id="timer-section">
				<div id="timer-label">
					{currMode}
					{isActive}
				</div>
				<div id="time-left">{toFullTime(currTime)}</div>
				<button id="start_stop" onClick={toggleActivity}>
					{isActive ? <img src="pause.png" /> : <img src="play.png" />}
					<button id="reset" onClick={reset}>
						<img src="replay.png" />
					</button>
				</button>
			</section>
			<section id="control-section">
				<section className="control-item">
					<div id="session-label" className="control-label">
						Session length:
					</div>
					<div className="length-control-section">
						<button
							id="session-increment"
							className="length-control-button"
							onClick={sessionIncr}
						>
							+
						</button>
						<div id="session-length">{toMinutes(currSessionLength)}</div>
						<button
							id="session-decrement"
							className="length-control-button"
							onClick={sessionDecr}
						>
							-
						</button>
					</div>
				</section>
				<section className="control-item">
					<div id="break-label" className="control-label">
						Break length:
					</div>
					<div className="length-control-section">
						<button
							id="break-increment"
							className="length-control-button"
							onClick={breakIncr}
						>
							+
						</button>
						<div id="break-length">{toMinutes(currBreakLength)}</div>
						<button
							id="break-decrement"
							className="length-control-button"
							onClick={breakDecr}
						>
							-
						</button>
					</div>
				</section>
			</section>
		</div>
	);
}

export default App;
