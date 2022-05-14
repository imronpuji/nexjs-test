import { DataStore, Predicates } from '@aws-amplify/datastore';
import { UntitledModel } from '/src/models';
import Card from '/components/Card'
import CardHeader from '/components/Card/CardHeader'
import CardBody from '/components/Card/CardBody'
import Button from '/components/Button'
import Divider from '/components/Divider'
import WithAuth from '/components/Auth/withAuth'
const Course = ({data}) => (
		<div  className="grid grid-cols-3 gap-4 w-5/6">
			<span className="col-span-2">
				<Card style="w-full h-full shadow-lg">
					<Button title="Program" style="p-3 bg-cyan-500 text-white w-full text-left text-lg font-bold"/>
					<Card style="h-32 bg-blue-100 grid grid-cols-3 gap-4">
						<Card style="h-32">
							<CardBody provider="Level"/>
							<CardBody style="mb-2 font-lg font-bold ml-3" titleWithoutDots={data.level}/>
						</Card>
						<Card style="h-32">
							<CardBody provider="Training Days"/>
							<CardBody style="mb-2 font-lg font-bold ml-3" titleWithoutDots={`${data.training_duration} Days`}/>
						</Card>
						<Card style="h-32">
							<CardBody provider="Duration Per Day"/>
							<CardBody style="mb-2 font-lg font-bold ml-3" titleWithoutDots={`${data.training_duration} Hours`}/>
						</Card>
					</Card>
					<Divider style="mt-6 mb-6"/>
					<CardBody style="mb-2 font-lg font-bold ml-3" titleWithoutDots="Suitabel For"/>
					<CardBody description={data.title}/>
					<Divider style="mt-6 mb-6"/>
					<CardBody style="font-lg font-bold ml-3" titleWithoutDots="Program Summary"/>
					<CardBody description={data.summary}/>
					<Divider style="mt-6 mb-6"/>
					<CardBody style="font-lg font-bold ml-3" titleWithoutDots="Trainer"/>
					<CardBody description={data.provider_name}/>
				</Card>
			</span>
			<span>
				<Card style=" w-full rounded shadow-lg rouded">
					<CardHeader url={data?.program_thumbnail_url}/>
					<CardBody price={data?.price}/>
					<Button title="Chat With Us" style="p-2 bg-blue-500 text-white w-full"/>
					<Divider style="mt-6 mb-6 border"/>
					<CardBody title="Have a question ?" provider="chat directly with the training provider"/>
					<Button title="Contact Provider" style="p-2 w-32 text-sm font-weight ml-2 border-blue-400 text-cyan-600 rounded border w-full"/>
					<Divider style="mt-6 mb-6 border"/>
					<CardBody style="mb-2 font-lg font-bold ml-3" titleWithoutDots="Class Type"/>
					<Button title={data.type} style="p-2 w-32 text-sm font-weight ml-2 bg-blue-500 text-white rounded w-full"/>
					<Divider style="mt-6 mb-6 border"/>
					<CardBody style="mb-2 font-lg font-bold ml-3" titleWithoutDots="Delivery Method"/>
					<Button title="Offline" style="mb-2 p-2 w-20 text-sm font-weight ml-2 border-blue-400 text-cyan-600 rounded border w-full"/>
					<Button title="Online" style="p-2 w-20 text-sm font-weight ml-2 border-blue-400 text-cyan-600 rounded border w-full"/>
				</Card>
			</span>
		</div>
	)
export const getServerSideProps = WithAuth( async ({query}) => {
	let data;
	data = await DataStore.query(UntitledModel, query.id)
	data = JSON.parse(JSON.stringify(data))
	return {
		props:{data}
	}
})


export default Course