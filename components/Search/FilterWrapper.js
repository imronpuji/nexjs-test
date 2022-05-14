import React from 'react'
function FilterWrapper(props){
	return (
			<div className="mt-3 w-3/4 grid grid-cols-3 gap-2 content-end mb-4">
				{props.children}
			</div>
		)
}

export default FilterWrapper 