import React from 'react'
import Image from 'next/image'
import Card from './index'
function CardHeader({url}){
	return (
			<div>
			{
				url ? (
					<Image
						className="h-48 w-full"
						src={url}
						width="500"
						height="500"
					    alt="Picture of the author"
					/>
				)  : 
					<div>
						<Card style="w-full h-72" component={
							<span className="font-xl font-bold">No Picture</span>
						}/>
					</div>
			}
			</div>
		)
}

export default CardHeader 