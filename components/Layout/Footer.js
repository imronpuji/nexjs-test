import Image from 'next/image'
import styles from '/styles/Home.module.css'

function Footer(){
	return (
		<footer className="border-2">
	        <a
	          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
          	Powered by{' '}
          	Pasar Trainer
        	</a>
      	</footer>
		)
}

export default Footer