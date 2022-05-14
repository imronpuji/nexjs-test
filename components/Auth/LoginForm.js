import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Button from '../Button'
import { Auth } from 'aws-amplify';
function LoginForm(){
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()
	const signIn = async ()=> {
	    try {
	        const user = await Auth.signIn(username, password);
	        router.push('/programs')
	        console.log(user)
	    } catch (error) {
	    	alert(error)
	    	router.push('/login')
	        console.log('error signing in', error);
	    }
	}
	return (
			<div className="h-full flex justify-center flex-col p-2 ">
				<span className="text-xl font-bold">Login</span>
				<span className="text-sm text-gray-400">to your account</span>
				<input onChange={({target}) => setUsername(target.value)} className="mt-4 p-2 border rounded" placeholder="Username"/>

				<input onChange={({target}) => setPassword(target.value)} className="mt-4 p-2 border rounded" placeholder="Password"/>
				<Button loader={true} onClick={signIn} style="bg-blue-400 text-white rounded mt-4 p-2 font-bold w-full" title="Login"/>
			</div>
		)
}

export default LoginForm 