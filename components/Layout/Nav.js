import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { Auth } from 'aws-amplify';
import Button from '/components/Button'
function Nav(){
	const[user, setUser] = useState('')
	const router = useRouter()
	async function getUser(){
		await Auth.currentAuthenticatedUser().then((res) => {
			const username = res.username 
			setUser(username)
		}).catch(() => {
			setUser(false)
		})
	}
	async function signOut(){
		setUser(false)
		await Auth.signOut()
		await router.push('/login')
	}
	useEffect(() => {
		getUser()
	})

	return (
			<nav className="bg-blue-500 w-full h-24 fixed top-0 left-0 right-0 m-0 flex z-40">
	        	<ul className="flex w-72 items-center justify-evenly">
	        		<li className="text-xl text-white">
	        			<Link href="/"> 
	        				<a>
	        					Pasar Trainer
	        				</a>	
	        			</Link>
	        		</li>
	        	</ul>
	        	<ul className="flex-1 w-32 justify-center">
	        	</ul>
	        	<ul className="flex-1 text-white w-32 flex justify-evenly items-center">
	        		<li className="pl-8 pr-8 pt-2 pb-2 text-base rounded hover:bg-white hover:text-black ">
	        			<Link href="/programs">Programs</Link>
	        		</li>
	        		{
	        			user && (<li>{user}</li>)
	        		}
	        		{
	        			user ? (
				        		<li className="border-2 rounded pl-8 pr-8 pt-2 pb-2 text-base rounded hover:bg-white hover:text-black ">
				        			<Button loader={true} onClick={() => signOut()} title="Logout"/>
				        		</li>
	        				) : (
		        				<>
					        		<li className="border-2 rounded pl-8 pr-8 pt-2 pb-2 text-base rounded hover:bg-white hover:text-black ">
					        			<Link href="/login">Login</Link>
					        		</li>
					        		<li className="border-2 rounded pl-8 pr-8 pt-2 pb-2 text-base rounded hover:bg-white hover:text-black ">
					        			<Link href="/signup">Join</Link>
					        		</li>
					        	</>
	        				)
	        		}
	        		
	        	</ul>
	      	</nav>
		)
}

export default Nav