
import './App.css';
import React, {useState} from 'react';

//src files
import data from "./todos.json";

//components
import Header from "./Header";
import ToDos from "./ToDos";
import TodoForm from "./ToDoForm";

function App() {

    const [toDos, setToDos] = useState(data);

    //state to prevent tasks from having same ids
    const [todoSize, setToDoSize] = useState(toDos.length);

    //updates finished state
    const toggle = (id) => {
        let mapped = toDos.map(task => {
            return task.id === Number(id) ? {...task, finished: !task.finished} : {...task};
        });
        setToDos(mapped);
    }

    //removes finished tasks from todos list
    const filterFinished = () => {
        let filtered = toDos.filter(task => {
            return !task.finished;
        });
        setToDos(filtered);
    }

    // adds a new task to the original todos list
    const addTask = (input) =>{
        let temp = [...toDos];
        let newSize = todoSize + 1;
        temp = [...temp, {id:newSize, task: input, finished: false}]
        setToDos(temp);
        setToDoSize(newSize);
    }

    return ( 
    <div className = "App" >
        <Header /> 
        <ToDos toDos={toDos} toggle={toggle} filterFinished={filterFinished} />
        <TodoForm addTask={addTask} />
    </div>
    );
}

export default App;