//React
import {useState} from 'react';
//Styled Components
import GlobalStyle from './components/GlobalStyle';
//Components
import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

function App() {

    const [name, setName] = useState([]);

  return (
    <div className="App">
      <GlobalStyle />
      <CreateToDo name={name} setName={setName}/>
      <ToDoList name={name} setName={setName}/>
    </div>
  );
}

export default App;
