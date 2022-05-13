import '../styles/globals.css'
import React from 'react'
import Layout from '/components/Layout/Main'
import Button from '/components/Button'
import { Amplify } from 'aws-amplify';
import awsExports from '/src/aws-exports';
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return (
  		<>
      		<Layout Component={Component} pageProps={pageProps} />
  		</>
  	)
}

export default MyApp
