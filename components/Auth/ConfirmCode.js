import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Button from '../Button'
import { Auth } from 'aws-amplify';
function ConfirmCode(){
	const [username, setUsername] = useState('')
	const [code, setCode] = useState('')
	const router = useRouter()
	const confirm = async ()=> {
	    try {
      		await Auth.confirmSignUp(username, code);
        	alert('success')
        	router.push('/login')
	    } catch (error) {
	    	alert(error)
	    	router.push('/confirmation')
	    }
	}

	const resendCode = async () => {
		try {
        	await Auth.resendSignUp(username);
        	alert('success')
	    	router.push('/confirmation')
        	console.log('code resent successfully');
	    } catch (error) {
	    	alert(error)
	    	router.push('/confirmation')
	    }
	}

	return (
			<div className="h-full flex justify-center flex-col p-2 ">
				<span className="text-xl font-bold">Confirm your Code</span>
				<input onChange={({target}) => setUsername(target.value)} className="mt-4 p-2 border rounded" placeholder="Username"/>
				<input onChange={({target}) => setCode(target.value)} className="mt-4 p-2 border rounded" placeholder="Code"/>
				<Button loader={true} onClick={confirm} style="bg-blue-400 text-white rounded mt-4 p-2 font-bold w-full" title="Conform Now"/>
				<Button loader={true} onClick={resendCode} style="bg-blue-400 text-white rounded mt-4 p-2 font-bold w-full" title="Resend Code"/>
			</div>
		)
}

export default ConfirmCode 