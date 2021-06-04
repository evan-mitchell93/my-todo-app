import React, {useState} from 'react';

const TodoForm = ({addTask}) =>{

    const [input, setInput] = useState('');

    const changeHandler = (e) => {
        setInput(e.currentTarget.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(input !== ""){
            addTask(input);
            setInput("");
        }
        else{
            alert("Cannot add blank todo");
        }
    }

    return (
        <form onSubmit={submitHandler} class="w3-container w3-left-align">
            <input value={input} type="text" onChange={changeHandler} placeHolder="Enter new todo" />
            <button class="w3-btn w3-round w3-amber w3-margin-left">Add Todo</button>
        </form>
    );
};

export default TodoForm;