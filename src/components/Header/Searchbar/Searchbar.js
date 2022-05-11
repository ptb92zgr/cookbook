import React from "react";
import styled from 'styled-components'

const StyledInput = styled.input`
	width: 200px;
	margin: 10px;
	border-radius: 5px;
	padding: 5px;
	font-size: 20px;
	border: 1px solid black;
`

function Searchbar(){
    return (
			<>
				<StyledInput
					className='input'
					type='text'
					placeholder='Szukaj'></StyledInput>
				<button className='search__btn'>Szukaj</button>
			</>
		)
}

export default Searchbar