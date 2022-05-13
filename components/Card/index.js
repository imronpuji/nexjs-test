import React from 'react'
function Card(props){
	return (
			<div  className={props.style} onClick={props.onClick}>
				{props.children}
			</div>
		)
}

export default Card 