import React from 'react'
function CardWrapper(props){
	return (
			<div className=" mt-3 w-3/4 grid grid-cols-3 gap-4 content-start mb-4">
				{props.children}
			</div>
		)
}

export default CardWrapper 