import { Component } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Dishes from "./components/Dishes/Dishes"
import Loading from "./components/UI/Loading/Loading"

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
		dishes: [],
		loading: true,
	}

	searchHandler(term) {
		const dishes = [...this.dishes].filter(x =>
			x.name.toLowerCase().includes(term.toLowerCase())
		)
		this.setState({ dishes })
	}

	//getting datas from backend

	componentDidMount() {
		setTimeout(() => {
			this.setState({ dishes: this.dishes, loading: false })
		}, 1000)
	}

	render() {
		console.log("komponent wyrenderowany")

		return (
			<div className='App'>
				<Header onSearch={term => this.searchHandler(term)} />
				<Menu />
				{this.state.loading ? (
					<Loading />
				) : (
					<Dishes dishes={this.state.dishes} />
				)}
			</div>
		)
	}
}

export default App
