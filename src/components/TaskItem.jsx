import React from 'react';

const TaskItem = ({ task, index, removeTask }) => {
    return (
        <li>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => removeTask(index)}>Remove</button>
        </li>
    );
};

export default TaskItem;
