import "./App.sass";
import { useState, useEffect } from "react";

function App() {
	
	const [currMode, setCurrMode] = useState("Session");

	const [isNewSession, setIsNewSession] = useState(true);

	const [isActive, setIsActive] = useState(false);

	const [currSessionLength, setCurrSessionLength] = useState(25);

	const [currBreakLength, setCurrBreakLength] = useState(5);

	const [currTime, setCurrTime] = useState(currSessionLength * 60);


	useEffect(() => {
		let interval = null;
		if (isActive && currTime > - 1) {
			interval = setInterval(() => {
				setCurrTime((currTime) => currTime - 1);
			}, 1000);
		} else if (!isActive) {
			clearInterval(interval);
		} else if (currTime == -1 && currMode == "Session") {
			playBeep();
			setCurrMode("Break");
			setCurrTime(currBreakLength * 60);
			clearInterval(interval);
		} else if (currTime == -1 && currMode == "Break") {
			playBeep();
			setCurrMode("Session");
			setCurrTime(currSessionLength * 60);
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, currTime]);

	function toggleActivity() {
		if (isNewSession) {
			setCurrTime(currSessionLength * 60);
			setIsNewSession(false);
		}
		setIsActive(!isActive);
	}

	function toggleDefault() {
		setCurrMode("Session");
		setCurrSessionLength(25);
		setCurrBreakLength(5);
		setCurrTime(currSessionLength * 60);
		setIsActive(false);
		stopBeep();
		setIsNewSession(true);
	}

	function sessionIncr() {
		if (currSessionLength < 60) {
			setCurrSessionLength(currSessionLength + 1);
		}
	}

	function sessionDecr() {
		if (currSessionLength > 1) {
			setCurrSessionLength(currSessionLength - 1);
		}
	}

	function breakIncr() {
		if (currBreakLength < 60) {
			setCurrBreakLength(currBreakLength + 1);
		}
	}

	function breakDecr() {
		if (currBreakLength > 1) {
			setCurrBreakLength(currBreakLength - 1);
		}
	}

	function toFullTime(seconds) {
		let minutes = 0;
		while (seconds > 59) {
			seconds = seconds - 60;
			minutes++;
		}
		let minutesToDisplay = minutes.toString()
		let secondsToDisplay = seconds.toString();
		if (minutes < 10) {
			minutesToDisplay = "0" + minutesToDisplay
		} if (seconds < 10) {
			secondsToDisplay = "0" + secondsToDisplay
		}
		return minutesToDisplay + ":" + secondsToDisplay;
	
	}

	function playBeep() {
		let beep = document.getElementById("beep");
		beep.volume = 0.2;
		beep.play();
	}

	function stopBeep() {
		let beep = document.getElementById("beep");
		beep.pause();
		beep.load();
	}

	return (
		<div className="App">
			<section id="timer-section">
				<div id="timer-label">
					{currMode}
				</div>
				<div id="time-left">{toFullTime(currTime)}</div>
				<div>
					<button id="start_stop" onClick={toggleActivity}>
						{isActive ? <img src="pause.png" /> : <img src="play.png" />}
					</button>
					<button id="reset" onClick={toggleDefault}>
						<img src="replay.png" />
					</button>
				</div>
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
						<div id="session-length">{currSessionLength}</div>
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
						<div id="break-length">{currBreakLength}</div>
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
			<audio id="beep" src="beep.wav"></audio>
		</div>
	);
}

export default App;
