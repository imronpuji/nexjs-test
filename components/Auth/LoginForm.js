import React, {useState} from 'react'
import Button from '../Button'
import { Auth } from 'aws-amplify';
function LoginForm(){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	const signIn = async ()=> {
		try {
	        const user = await Auth.signIn(email, password);
	    } catch (error) {
	        console.log('error signing in', error);
	    }
	}
	return (
			<div className="h-full flex justify-center flex-col p-2 ">
				<span className="text-xl font-bold">Login</span>
				<span className="text-sm text-gray-400">to your account</span>
				<input onChange={({target}) => setEmail(target.value)} className="mt-4 p-2 border rounded" placeholder="Email"/>

				<input onChange={({target}) => setPassword(target.value)} className="mt-4 p-2 border rounded" placeholder="Password"/>
				<Button onClick={signIn} style="bg-blue-400 text-white rounded mt-4 p-2 font-bold" title="Login"/>
			</div>
		)
}

export default LoginForm 