import {useState} from 'react';

const NewToDoLists=(props)=>{
	
	return(<>

				<li className='addItems'> <li className='Items'>{props.data}</li>
				<i onClick={()=>{props.onselect(props.id)}}  className='deleteBtn fa fa-trash'> </i>
				</li>


	 < />)
};
export default NewToDoLists;	