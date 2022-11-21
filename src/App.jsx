import "./App.sass";

function App() {
	return (
		<div className="App">
			<section id="timer-section">
				<div id="timer-label">Session</div>
				<div id="time-left">21:37</div>
				<button id="start_stop">
					<img src="/public/play.png" />
					<img src="/public/pause.png" />
					<img src="/public/replay.png" />
				</button>
			</section>
			<section id="control-section">
				<section className="control-item">
					<div id="session-label" className="control-label">
						Session length:
					</div>
					<div className="length-control-section">
						<button className="length-control-button">+</button>
						<div id="session-length">25</div>
						<button className="length-control-button">-</button>
					</div>
				</section>
				<section className="control-item">
					<div id="break-label" className="control-label">
						Break length:
					</div>
					<div className="length-control-section">
						<button className="length-control-button">+</button>
						<div id="break-length">5</div>
						<button className="length-control-button">-</button>
					</div>
				</section>
			</section>
		</div>
	);
}

export default App;
