import { Component } from "react"
import PropTypes from "prop-types"
import Dish from "./Dish/Dish"
import styled from "styled-components"

const StyledDishes = styled.div`
	width: 100%;
`

const propTypes = {
	dishes: PropTypes.array.isRequired,
}

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

Dishes.propTypes = propTypes

export default Dishes
