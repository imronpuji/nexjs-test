import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import styles from '/styles/Home.module.css'
import Router from 'next/router'
import NProgress from 'nextjs-progressbar'
function Main({Component, pageProps}){
	return (
			<div>
				<NProgress color="#fff"/>
				<Nav/>
				<main  className={styles.main}>
					 <Component {...pageProps}/>
				</main>
			</div>
		)
}
export default Main