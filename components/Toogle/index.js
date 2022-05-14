import React from 'react'
const Toogle = (props) => {
	return (
				<div className="form-check">
			      	<input  onClick={props.onClick} name={props.name} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" checked={props.status}  value={props.name} id={props.id}/>
			      	<label className="form-check-label inline-block text-gray-800" htmlFor={props.for}>
			        	{props.title}
			      	</label>
			    </div>
		)
}

export default Toogle