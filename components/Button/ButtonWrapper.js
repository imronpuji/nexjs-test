import React, {useState} from 'react'
import {useRouter} from 'next/router'
function ButtonWrapper (Components) {
	const ButtonComponent = (props) => {
		const router = useRouter()
		const [loading, setLoading] = useState(false)
		router.events?.on('routeChangeStart', url => {
			setLoading(false)
		});
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

	return ButtonComponent
}

export default ButtonWrapper