import React from 'react'
import Link from 'next/link'
function Nav(){

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
	        			<Link href="/login">Categorize</Link>
	        		</li>
	        		<li className="pl-8 pr-8 pt-2 pb-2 text-base rounded hover:bg-white hover:text-black ">
	        			<Link href="/programs">Programs</Link>
	        		</li>
	        		<li className="pl-8 pr-8 pt-2 pb-2 text-base rounded hover:bg-white hover:text-black ">
	        			<Link href="/blog">Blog</Link>
	        		</li>
	        		<li className="border-2 rounded pl-8 pr-8 pt-2 pb-2 text-base rounded hover:bg-white hover:text-black ">
	        			<Link href="/login">Login</Link>
	        		</li>
	        	</ul>
	      	</nav>
		)
}

export default Nav