import React from "react";
import "./Counter.css";
class Counter extends React.Component {
	render() {
		return (
			<div className="counter">
				<img src={this.props.imgSrc} alt="" />
				<p className="text">{this.props.num}</p>
			</div>
		);
	}
}
export default Counter;
