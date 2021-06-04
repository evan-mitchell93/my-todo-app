import React from 'react';
import ToDo from './ToDo';

const ToDos = ({toDos, toggle, filterFinished}) => {
    return (
        <div class="w3-left-align">
            <button class="w3-btn w3-red w3-block w3-margin-bottom" onClick={filterFinished}>Delete Finished</button>
            {toDos.map(todo => {
                return (
                    <div>
                        <ToDo todo={todo} toggle={toggle} />
                        <br></br>
                    </div>
                )
            })}
        </div>
    );
};

export default ToDos;