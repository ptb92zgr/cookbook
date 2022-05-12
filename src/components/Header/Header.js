import Searchbar from "./Searchbar/Searchbar"
import background from "../../assets/images/bg.jpg"
import styled from "styled-components"

const StyledHeader = styled.header`
	position: relative;
	width: 100vw;
	height: 300px;
	background: url(${background});
	background-size: cover;
`

function Header(props) {
	return (
		<StyledHeader>
			<Searchbar onSearch={props.onSearch}/>
		</StyledHeader>
	)
}

export default Header
