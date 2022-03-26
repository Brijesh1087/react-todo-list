import "./FormComponent.css";
import {useState} from 'react';

const FormComponent=(props)=>{
	const [form,setForm]=useState({username:'',date:'',email:''})
	const Username=(e)=>{
		// console.log(e.target.value);
		setForm({...form,username:e.target.value})
	}
	const Date=(e)=>{
			setForm({...form,date:e.target.value})
	}
	const Email=(e)=>{
			setForm({...form,email:e.target.value})
	}		
	const submit=(event)=> {
		event.preventDefault()
		props.SendData(form)
	}
	
	return(
		<>
		<div className='container'>
		<form onSubmit={submit}>
		<div className='inner-container'>
			<label htmlFor="username">Username : </label>
			<input type="text" onChange={Username} id='username' className='input-control' />
			<label htmlFor="date">Date : </label>
			<input type="date" onChange={Date} id='date' className='input-control' />
			<label htmlFor="eamil">Email : </label>
			<input type="text" onChange={Email} id='eamil' className='input-control' />
			<input type="submit" value='Submit' id='btn' className='btn btn-sm' />
		</div>	
		</form>	
		</div>
		< />
		)
}

export default FormComponent;