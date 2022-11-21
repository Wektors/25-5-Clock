import "./Control.sass";

function Control() {
	return (
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
	);
}

export default Control;
