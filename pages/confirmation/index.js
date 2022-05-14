import Card from '/components/Card'
import ConfirmCode from '/components/Auth/ConfirmCode'
import {withSSRContext} from 'aws-amplify'

const Confirmation = () => (
		<>
			<Card style="w-72 h-72 shadow-lg rounded relative top-10 border">
				<ConfirmCode/>
			</Card>
		</>
	)

export default Confirmation

export async function getServerSideProps({req,res}){
	const {Auth} = withSSRContext({req})
    const user = await Auth.currentSession().then().catch(err => console.log(err))
    if (user) {
        // Redirect to login page
        return {
            redirect: {
                destination: '/programs',
                statusCode: 301
            }
        };
    }

    return {
    	props:{}
    }
}