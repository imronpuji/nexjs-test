import React from 'react'
import Image from 'next/image'
import Card from './index'
function CardHeader({url}){
	return (
			<div>
			{
				url ? (
					<Image
						className="rounded h-48 w-full"
						src={url}
						width="400"
						height="300"
					    alt="Picture of the author"
					/>
				)  : 
					<Image
						className="rounded h-48 w-full"
						src="https://res.cloudinary.com/dxczqkbzu/image/upload/v1652445254/undraw_Clean_up_re_504g_keijje.png"
						width="400"
						height="300"
					    alt="Picture of the author"
					/>
			}
			</div>
		)
}

export default CardHeader 