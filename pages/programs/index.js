import React, {useState} from 'react'
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { UntitledModel } from '/src/models';
import Search from '/components/Search'
import FilterWrapper from '/components/Search/FilterWrapper'
import CardWrapper from '/components/Card/CardWrapper'
import Card from '/components/Card'
import Badge from '/components/Badge'
import CardBody from '/components/Card/CardBody'
import CardHeader from '/components/Card/CardHeader'
import {useRouter} from 'next/router'
import Pagination from '/components/Pagination'
const Course = ({data, page}) => {
		const [keyword, setkeyword] = useState('')
		const [publish, setPublish] = useState('')

		const router = useRouter()
		const onChangeSearch= (event) => {
			let value = event.target.value
			setkeyword(value)

		}

		const search = () => {
			router.query.keyword = keyword
			router.push(router)
		}

		const handleDetail = (id) => {
			router.push(`/programs/detail?id=${id}`)
		}

		return (
			<>
				<FilterWrapper>
					<Search onChange={onChangeSearch} onClick={search}/>
				</FilterWrapper>
				<CardWrapper>
				{
					data.map(val => {
						return (
							<Card key={val.id} style="w-1/3 w-72 shadow-lg rounded border hover:mouse-cursor hover:shadow-xl" onClick={()=>handleDetail(val.id)}>
								<CardHeader url={val.program_thumbnail_url}/>
								<Badge  title={val.type} style=" p-2 bg-blue-500 rounded text-white font-lg m-3"/>
								<CardBody title={val.summary} price={val.price} provider={val.provider_name}/>
							</Card>
						)
					})	
				}
				</CardWrapper>
				<Pagination currentPage={page} totalPage={[1,2,3,4,5]}/>
				
			</>
			)
	}

export async function getServerSideProps({query}) {
	const {keyword, page} = query
	let data;
	if(keyword){
		console.log(keyword)
		data = await DataStore.query(UntitledModel, c => c.summary('contains', keyword),  {
			page:parseInt(query.page - 1),
			limit:5,

		})
	} else {
		data = await DataStore.query(UntitledModel, Predicates.ALL,  {
			page:query?.page ? parseInt(query.page - 1) : 0 ,
			limit:5,

		})	
	}

	data = JSON.parse(JSON.stringify(data))
	return {
		props:{data, page:page  ? page:null}
	}

}

export default Course