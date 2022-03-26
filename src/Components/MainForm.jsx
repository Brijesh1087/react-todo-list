import {useState} from 'react';
import Form from "./FormComponent";
import AddDataForm from "./AddDataForm";


const MainForm=()=>{
	let [FormData,setFormData]=useState([])
	const RecieveData=(e)=>{
		// setFormData({user:e.username,date:e.date,email:e.email})
		setFormData((optData)=>{
			return (..optData,user:e.username,date:e.date,email:e.email)
		})
		}
	return(<>
		<Form SendData={RecieveData}/>
		<AddDataForm AddData={FormData} />


		< />)
};

export default MainForm;