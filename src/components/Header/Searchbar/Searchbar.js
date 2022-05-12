import { useState } from "react"
import styled from "styled-components"

const StyledSearch = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const StyledInput = styled.input`
	margin: 15px 15px;
	max-width: 300px;
	font-size: 18px;
`

const StyledBtn = styled.button`
	text-transform: uppercase;
	font-size: 18px;
`

function Searchbar(props) {
	const [term, setTerm] = useState("")

	const search = () => {
		props.onSearch(term)
	}
	const onKeyDownHandler = e => {
		if (e.key === "Enter") {
			search()
		}
	}

	return (
		<StyledSearch>
			<StyledInput
				value={term}
				onKeyDown={onKeyDownHandler}
				onChange={e => setTerm(e.target.value)}
				type='text'
				placeholder='Szukaj...'></StyledInput>
			<StyledBtn onClick={search}>Szukaj</StyledBtn>
		</StyledSearch>
	)
}

export default Searchbar
