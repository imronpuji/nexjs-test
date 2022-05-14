import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WithAuth from '/components/Auth/withAuth'
export default function Home({greeting}) {
  return (
    <>
      <h1 className="font-xl font-bold">{greeting}</h1>
    </>
  )
}

export const getServerSideProps = WithAuth(() => {
	return {
		props :{greeting:'Welcome'}
	}
})
