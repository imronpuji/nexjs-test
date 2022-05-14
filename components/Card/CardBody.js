import React from 'react'
function CardBody(props){
	return (
			<div>
				<p className="mb-2 font-lg font-bold m-3">{props.title?.substring(0, 40)} {props?.title ? '...' : ''}</p>
				<span className={props.style}>{props?.titleWithoutDots}</span>
				<p className="text-justify font-base pl-3 pr-3">{props?.description}</p>
				<h1 className="mt-2 font-xl  font-bold m-3 text-cyan-600">{props?.price ? 'Rp' : ''} {props.price}</h1>
				<h2 className="mt-2 font-xl  m-3 text-blue">{props.provider}</h2>
			</div>
		)
}

export default CardBody 