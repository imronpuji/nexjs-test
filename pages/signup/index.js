import Card from '/components/Card'
import SignupForm from '/components/Auth/SignupForm'
import {withSSRContext} from 'aws-amplify'

const Register = () => (
		<>
			<Card style="w-72 h-72 shadow-lg rounded relative top-10 border">
				<SignupForm/>
			</Card>
		</>
	)

export default Register

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