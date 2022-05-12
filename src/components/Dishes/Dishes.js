import { Component } from "react"
import Dish from "./Dish/Dish"
import styled from "styled-components"

const StyledDishes = styled.div`
	width: 100%;
`

class Dishes extends Component {
	render() {
		return (
			<StyledDishes>
				<h2>Potrawy:</h2>
				{this.props.dishes.map(dish => (
					<Dish key={dish.id} {...dish} />
				))}
			</StyledDishes>
		)
	}
}

export default Dishes
