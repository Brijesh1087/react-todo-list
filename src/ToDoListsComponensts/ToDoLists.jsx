import "./ToDoLists.css";
import NewToDoLists from "./NewToDoLists"
import {useState} from 'react';

const ToDoLists=()=>{
	const [inputData,setInputData]=useState('')
	const [Items,setItems]=useState([])
	const InputHandler=(event)=>{
		setInputData(event.target.value)
	}
	const addItems=(e)=>{
		if(inputData.length>=3){
		e.preventDefault()
		setItems((opsItems)=>{
			return [...opsItems,inputData]
		})
		setInputData('')
	}
	}
	const deleteItems=(i)=>{
		setItems((oldItems)=>{
			return oldItems.filter((addEle,index)=>{
				return (i!= index)
			})
		})
		window.navigator.vibrate(1000)
	}

return(
	<> 
		<div className='container'>
			<div className='inner-container'>
			<h1 className='header'>ToDo List</h1>
				<form onSubmit={addItems}>
					<input placeholder='Add Items ...' value={inputData} required={true} maxLength='30' minLength='2'type="text" onChange={InputHandler} className='form-control' />
					<i onClick={addItems} className='btn 	fa fa-plus-square-o'>  </i>
				</form>
				<ol className='orderList'>
					{
						Items.map((items,i)=>{
							return(<>
								<NewToDoLists key={i} id={i} data={items} onselect={deleteItems} />
							 < />)
						})
					}
				</ol>
			</div>
		</div>
		< />
		)
	};

export default ToDoLists;