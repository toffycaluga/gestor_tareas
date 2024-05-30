import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
    );
};

export default TaskManager;
