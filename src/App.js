import "./App.css";
import React from "react";
import Counter from "./components/Counter/Counter";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import { faker } from "@faker-js/faker";
class App extends React.Component {
	state = { num: [0, 0], cardImg: "", cardName: "" };
	changeCounter = (event) => {
		const btn = event.target.className;
		const num = this.state.num;
		if (btn === "prev-btn") this.setState({ num: [num[0] + 1, num[1]] });
		else this.setState({ num: [num[0], num[1] + 1] });
		this.getRandomData();
	};
	getRandomData = () => {
		this.setState({
			cardImg: faker.image.avatar(),
			cardName: faker.name.findName(),
		});
	};
	componentDidMount() {
		this.getRandomData();
	}
	render() {
		return (
			<div className="app">
				<header>
					<Counter
						num={this.state.num[0]}
						imgSrc="https://i.insider.com/5d153ffb21a8610215118302?width=1200&format=jpeg"
					/>
					<Counter
						num={this.state.num[1]}
						imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiIYYM8KuiWkiai8UolvXvoN7A1UF5cmboA&usqp=CAU"
					/>
				</header>
				<Card imgSrc={this.state.cardImg} name={this.state.cardName} />
				<footer>
					<Button
						onClick={this.changeCounter}
						className="prev-btn"
						text="Dislike"
					/>
					<Button
						onClick={this.changeCounter}
						className="next-btn"
						text="Like"
					/>
				</footer>
			</div>
		);
	}
}

export default App;
