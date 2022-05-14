import React from 'react'
function List(props){
	return ( <div className={props.style}>
			<ul>
				{
					props.data.map((val) => (
						<li>{}</li>
					))
				}
			</ul>
		</div>)
}

export default List 