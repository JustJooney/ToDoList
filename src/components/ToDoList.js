import ToDo from './ToDo';
import styled from 'styled-components';

function ToDoList({name, setName}){
	console.log(name);


	return(
		<List>
			<Card>
				<h1>Work</h1>
				{name.filter((names) => names.option === "Work").map((filteredNames) => (
					<div>
						<ToDo name={name} setName={setName} n={filteredNames} key={filteredNames}/>
					</div>
				))}
			</Card>
			<Card>
				<h1>Home</h1>
				{name.filter((names) => names.option === "Home").map((filteredNames) => (
					<ToDo name={name} setName={setName} n={filteredNames}/>
				))}
			</Card>
		</List>
	);
}

const List = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Card = styled.div`
	height: auto;
	width: 20%;
	text-align: center;
	background: lightblue;
	margin: 2rem;
	h1{
		background: cyan;
	}
`

export default ToDoList;