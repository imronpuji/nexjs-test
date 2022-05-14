import Image from 'next/image'
import React from 'react'
const Banner = () => {
	return (
		<div className="border-2 flex h-72">
			<Image
				className=""
				src="https://res.cloudinary.com/dxczqkbzu/image/upload/v1652448658/xps-Gi3iUJ1FwxI-unsplash_qyqi3k.jpg"
			    alt="Picture of the author"

			/>
		</div>
		)
}

export default Banner