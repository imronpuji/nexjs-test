import React from 'react'

const Sort = (props) => {
	return (
			<div className="w-32">
				<div className="flex justify-center">
					<div className="mb-3 xl:w-96">
						<select onChange={props.onChange} className="form-select appearance-none
							block
							w-full
							px-3
							py-1.5
							text-base
							font-normal
							text-gray-700
							bg-white bg-clip-padding bg-no-repeat
							border border-solid border-gray-300
							rounded
							transition
							ease-in-out
							m-0
							focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
							<option disabled selected>Filter Price</option>
							<option value="ASCENDING">Price Low to High</option>
							<option value="DESCENDING">Price High to Low</option>
					    </select>
				  	</div>
				</div>
			</div>
		)
}	

export default Sort