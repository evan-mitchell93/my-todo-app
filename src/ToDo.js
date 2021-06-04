import React from 'react';

const ToDo = ({todo, toggle}) => {

    const clickHandler = (e) => {
        e.preventDefault();
        toggle(e.currentTarget.id);
    }

    return (
        <div class="w3-card-4 clickable w3-left-align" id={todo.id} onClick={clickHandler}>
            <div class="w3-container w3-teal">
                <div className={todo.finished ? "done" : ""}>
                    <h3>{todo.task} </h3>
                </div>
            </div>
        </div>
    )
}

export default ToDo;