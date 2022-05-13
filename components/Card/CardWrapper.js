import React from 'react'
function CardWrapper(props){
	return (
			<div className="w-4/5 mt-3 flex flex-row flex-wrap mb-4 ">
				{props.children}
			</div>
		)
}

export default CardWrapper 