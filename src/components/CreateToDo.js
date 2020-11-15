import {useState} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';

function CreateToDo({name, setName}){

	const [option, setOption] = useState('Home');
	const [newName, setNewName] = useState('');

	function onSubmitHandler(e){
		setName([...name, {newName, option, id: uuidv4()}]);
		e.preventDefault();
	}

	function onInputChangeHandler(e){
		setNewName(e.target.value);
	}

	function onSelectChangeHandler(e){
		setOption(e.target.value);
	}


	return(
		<Form onSubmit={onSubmitHandler}>
			<h2>Create To Do</h2>
			<Input>
				<input type='text' value={newName} onChange={onInputChangeHandler} placeholder="To do" required/>
			</Input>
			<Option>
				<select value={option} onChange={onSelectChangeHandler}>
					<option value="Home">Home</option>
					<option value="Work">Work</option>
				</select>
				<button>Submit</button>
			</Option>
		</Form>
	);
}


const Form = styled.form`
	position: absolute;
	bottom: 0;
	right: 0;
	padding: 2rem;
	height: 50%;
	width: 25%;
	background: lightblue;
	margin: 2rem;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	border-radius: 10px;
	h2{
		text-align: center;
		font-size: 2rem;
		text-decoration: underline;
	}
`
const Input = styled.div`
	height: 20%;
	width: 100%;
	background: cyan;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	input{
		height: 80%;
		width: 100%;
		font-size: 1.5rem;
		border: none;
		&:focus{
			outline: none;
		}
	}
`

const Option = styled(Input)`
	width: 100%;
	select{
		width: 50%;
		height: 50%;
		outline: none;
		font-size: 1.25rem;
		margin-right: 2rem;
	}
	button{
		width: 50%;
		height: 50%;

	}
`


export default CreateToDo;