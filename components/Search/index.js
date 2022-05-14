import React from 'react'
import Button from '../Button'
function Search(props){
	return (
			<div className="col-span-2">
				<input onChange={props.onChange} placeholder="Search" className="border-2 p-2 rounded"/>
				<Button onClick={props.onClick} title="Search" style="border-2 p-2 bg-blue-500 text-white rounded ml-3"/>
			</div>
		)
}

export default Search 