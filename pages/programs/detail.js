import { DataStore, Predicates } from '@aws-amplify/datastore';
import { UntitledModel } from '/src/models';
const Course = ({id}) => (
		<>
			
			<h2>{id}</h2>
		</>
	)
export async function getServerSideProps({query}){
	let data;
	data = await DataStore.query(UntitledModel, query.id)
	console.log(data)	
	return {
		props:{id:2}
	}
}


export default Course