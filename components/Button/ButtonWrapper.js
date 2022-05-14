import React, {useState} from 'react'
import {useRouter} from 'next/router'
function buttonWrapper (Components) {
	const buttonComponent = (props) => {
		const router = useRouter()
		router.events?.on('routeChangeStart', url => {
			setLoading(false)
		});
		const [loading, setLoading] = useState(false)
		const handleChange = () => {
			if(props.loader){
				setLoading(!loading)
			}
		}

		return (

				<span onClick={() => handleChange()}>
					{
						!loading ? <Components  {...props}/> : <Components {...props} spinner={<span>loading...</span>} />
					}
				</span>
			)

	}

	return buttonComponent
}

export default buttonWrapper