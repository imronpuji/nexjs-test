import Card from '/components/Card'
import LoginForm from '/components/Auth/LoginForm'
import {withSSRContext} from 'aws-amplify'

const Login = () => (
		<>
			<Card style="w-72 h-72 shadow-lg rounded relative top-10 border">
				<LoginForm/>
			</Card>
		</>
	)

export default Login

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