import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Button from '../Button'
import { Auth } from 'aws-amplify';
function SignupForm(){
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const router = useRouter()
	const signUp = async ()=> {

		try {
	        const {user} = await Auth.signUp({username, password, attributes: {
                email,     
            }});
            router.push('/confirmation')
	        console.log(user)
	    } catch (error) {
	    	alert(error)
	    	router.push('/signup')
	        console.log('error signing in', error);
	    }
	}
	return (
			<div className="h-full flex justify-center flex-col p-2 ">
				<span className="text-xl font-bold">Sign Up</span>
				<span className="text-sm text-gray-400">it's free</span>
				<input onChange={({target}) => setUsername(target.value)} className="mt-4 p-2 border rounded" placeholder="Username"/>
				<input onChange={({target}) => setEmail(target.value)} className="mt-4 p-2 border rounded" placeholder="Email"/>
				<input onChange={({target}) => setPassword(target.value)} className="mt-4 p-2 border rounded" placeholder="Password"/>
				<Button loader={true} onClick={signUp} style="bg-blue-400 text-white rounded mt-4 p-2 font-bold w-full" title="Join"/>
			</div>
		)
}

export default SignupForm 