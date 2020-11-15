

function ToDo({n, name, setName}){

	function deleteHandler(){
		setName(name.filter((el) => el.id !== n.id))
	}

	return(
		<>
			<h2>{n.newName}</h2>
			<button onClick={deleteHandler}>Delete</button>
		</>
	);
}



export default ToDo;