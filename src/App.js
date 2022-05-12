import { Component } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Dishes from "./components/Dishes/Dishes"

class App extends Component {
	dishes = [
		{
			id: 1,
			name: "Pierogi z serem",
			ingredients: "Mąka, Jajka, Woda, Olej, Cukier, Ser",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		{
			id: 2,
			name: "Spaghetti",
			ingredients: "Mięso, Makaron, Pomidory, Czosnek, Cebula, Bazylia",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
	]

	state = {
		dishes: [this.dishes],
	}

	searchHandler(term) {
		const dishes = [...this.dishes].filter(x =>
			x.name.toLowerCase().includes(term.toLowerCase())
		)
		this.setState({ dishes })
	}

	render() {
		return (
			<div className='App'>
				<Header onSearch={term => this.searchHandler(term)} />
				<Menu />
				<Dishes dishes={this.state.dishes} />
			</div>
		)
	}
}

export default App
