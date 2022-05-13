import React from 'react'
function CardHeader({url}){
	return (
			<div>
				<img
					className="h-48 w-full"
					src={url}
				    alt="Picture of the author"
				/>
			</div>
		)
}

export default CardHeader 