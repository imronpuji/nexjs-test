import React from 'react'
import Button from '../Button'
import Link from 'next/link'
import {useRouter} from 'next/router'
function Pagination(props){
	const router = useRouter()
	const onMovingPage = (val) => {
		router.query.page = val 
		router.push(router)
	}
	const nextPage = () => {
		router.query.page = parseInt(props.currentPage) + 1 
		router.push(router)	
	}

	const prevPage = () => {
		router.query.page = parseInt(props.currentPage) - 1 
		router.push(router)	
	}
	return (
			<div className="flex">
				<Button onClick={prevPage} title="Prev" style="border-2 p-2 bg-blue-500 text-white rounded ml-3"/>
					{
						props.totalPage.map((val, index) => {
							if(props.currentPage == val){
								return (
									<Button onClick={()=>onMovingPage(val)} style="text-white p-2 m-3 bg-blue-500 rounded-full w-10 h-10" title={val}/>
								)	
							} else {
								return (
									<Button onClick={()=>onMovingPage(val)} style="p-2 m-3" title={val}/>
								)
							}
						})
					}

				<Button onClick={nextPage} title="Next" style="border-2 p-2 bg-blue-500 text-white rounded ml-3"/>
			</div>
		)
}

export default Pagination 