import React from 'react'
import ButtonWrapper from './ButtonWrapper'
function Button(props){
	return <button onClick={props.onClick} className={props.style}>{
		props.spinner ? props.spinner : props.title
	}</button>
}

export default ButtonWrapper(Button)