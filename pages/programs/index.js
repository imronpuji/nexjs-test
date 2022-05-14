import React, {useState} from 'react'
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
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
import WithAuth from '/components/Auth/withAuth'
import Image from 'next/image'
import Toogle from '/components/Toogle'
import Sort from '/components/Sort'
import Spinner from '/components/Spinner'
const Course = ({data, page, count}) => {
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

	const sortingPrice = (event) => {
		router.query.sortedBy = event.target.value
		router.push(router)
	}

	const handlePublicCourse = (event) => {
		if(router.query?.public){
			router.query.public = []
			router.push(router)
		} else {
			router.query.public = 'hide'
			router.push(router)
		}
	}

	const handleInHouse = (event) => {
		if(router.query?.inHouse){
			router.query.inHouse = []
			router.push(router)
		} else {
			router.query.inHouse = 'hide'
			router.push(router)
		}
	}

	return (
		<>
			<FilterWrapper>
				<Search onChange={onChangeSearch} onClick={search}/>
				<Toogle onClick={handleInHouse} name="inhouse" title="in House Program" for="program" id="program"/>
			</FilterWrapper>
			<FilterWrapper>
				<Sort onChange={sortingPrice}/>
			</FilterWrapper>
			<CardWrapper>
			{
				data.map(val => {
					return (
						<Card key={val.id} style=" shadow-lg rounded border hover:cursor-pointer hover:shadow-xl" onClick={()=>handleDetail(val.id)}>
							<CardHeader url={val.program_thumbnail_url}/>
							<Badge  title={val.type} style=" p-2 bg-blue-500 rounded text-white font-lg m-3"/>
							<CardBody title={val.title} price={val.price} provider={val.provider_name}/>
						</Card>
					)
				})	
			}
			</CardWrapper>
			{
				data.length==0 ? (
					<Image 

						src="https://res.cloudinary.com/dxczqkbzu/image/upload/v1652445254/undraw_Clean_up_re_504g_keijje.png"
						width="400"
						height="300"
					    alt="Picture of the author"
					/>
					) : (
						<Pagination currentPage={page} totalPage={count}/>
					)
			}
			
		</>
		)
	}

export const getServerSideProps =  WithAuth(async ({query}) =>  {
	const {keyword, page, sortedBy, inHouse} = query
	let data;
	let count;
	if(inHouse && !keyword){
		count = await DataStore.query(UntitledModel, c => c.or( c =>  c.type('notContains', inHouse ? 'inhouse' : '' )))
		count = Math.ceil(count.length / 5)
		data = await DataStore.query(UntitledModel, c => c.or(c=> c.type('notContains', inHouse ? 'inhouse' : '')),  {
			page:parseInt(query.page - 1),
			limit:5,
			sort: sortedBy ? s => s.price(SortDirection[sortedBy]) : () => {}
		})
	}
	else if(keyword && inHouse){
		count = await DataStore.query(UntitledModel, c => c.and( c => c.title('contains', keyword).type('notContains', 'inhouse' )))
		count = Math.ceil(count.length / 5)
		data = await DataStore.query(UntitledModel, c => c.and(c=>c.title('contains', keyword).type('notContains', 'inhouse')),  {
			page:parseInt(query.page - 1),
			limit:5,
			sort: sortedBy ? s => s.price(SortDirection[sortedBy]) : () => {}
		})

	} else if(keyword && !inHouse){
		count = await DataStore.query(UntitledModel, c => c.or( c => c.title('contains', keyword)))
		count = Math.ceil(count.length / 5)
		data = await DataStore.query(UntitledModel, c => c.or(c=>c.title('contains', keyword)),  {
			page:parseInt(query.page - 1),
			limit:5,
			sort: sortedBy ? s => s.price(SortDirection[sortedBy]) : () => {}
		})
	} else {
		count = await DataStore.query(UntitledModel)
		count = Math.ceil(count.length / 5)
		data = await  DataStore.query(UntitledModel, Predicates.ALL,  {
			page:query?.page ? parseInt(query.page - 1) : 0 ,
			limit:5,
			sort: sortedBy ? s => s.price(SortDirection[sortedBy]) : () => {},
		})	
	}

	data = JSON.parse(JSON.stringify(data))

	const makeCountAsArray = []
	for(let i=1;i<=count;i++){
		makeCountAsArray.push(i)
	}
	console.log(makeCountAsArray)
	return {
		props:{data, page:page  ? page:null, count:makeCountAsArray}
	}

})

export default Course