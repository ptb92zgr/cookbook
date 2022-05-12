import PropTypes from "prop-types"
import styled from "styled-components"

const StyledDish = styled.div`
	width: 90%;
	background-color: rgb(233, 230, 230);
	margin: 10px auto;
	padding: 5px;
	border-radius: 10px;
`
const StyledBtn = styled.button`
	font-size: 16px;
`

const propTypes = {
	name: PropTypes.string.isRequired,
	ingredients: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

function Dish(props) {
	return (
		<StyledDish>
			<h3>{props.name}</h3>
			<h4>Potrzebne składniki:</h4>
			<p>{props.ingredients}</p>
			<h4>Opis przygotowania:</h4>
			<p>{props.description}</p>
			<StyledBtn>Czytaj więcej</StyledBtn>
		</StyledDish>
	)
}

Dish.propTypes = propTypes

export default Dish
