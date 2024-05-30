# Task Manager en React

Este proyecto es una aplicación simple de gestión de tareas construida con React. La aplicación permite a los usuarios añadir, visualizar y eliminar tareas. Este README proporciona una guía paso a paso sobre cómo funciona el proyecto, con explicaciones sobre el uso de `useState` y `onChange`.

## Descripción del Proyecto

La aplicación de gestión de tareas consta de los siguientes componentes:

- `TaskManager`: El componente principal que administra el estado de las tareas y coordina los demás componentes.
- `TaskForm`: Un formulario para añadir nuevas tareas.
- `TaskList`: Una lista que muestra todas las tareas.
- `TaskItem`: Un componente que muestra una tarea individual con la opción de eliminarla.

## Configuración del Proyecto

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/tu-usuario/task-manager.git
cd task-manager
```

2. Instalar Dependencias
Instala las dependencias del proyecto utilizando npm:

```bash
npm install
```
3. Ejecutar la Aplicación
Inicia la aplicación en modo de desarrollo:

```bash
npm run dev
```
Abre http://localhost:3000 en tu navegador para ver la aplicación.

Estructura de Archivos
La estructura principal de los archivos del proyecto es la siguiente:

```bash
/src
  /components
    TaskManager.jsx
    TaskForm.jsx
    TaskList.jsx
    TaskItem.jsx
  App.jsx
  index.js
  ```
### Explicación de useState
useState es un hook que permite añadir estado a los componentes funcionales en React. Se usa para declarar una variable de estado y una función para actualizar ese estado.

Ejemplo Básico de useState
```javascript

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>El contador es: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```
- **useState(0):** Declara una variable de estado count con un valor inicial de 0.

- ***setCount:*** Función para actualizar el estado de count.
Uso de useState en el Proyecto

En este proyecto, useState se utiliza para manejar el estado del formulario y la lista de tareas. Por ejemplo, en TaskManager:

```javascript
import React, { useState } from 'react';
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
```
- useState([]): Declara una variable de estado tasks que es un array vacío inicialmente.
- setTasks: Función para actualizar el estado de tasks.

### Explicación de onChange
El evento onChange se utiliza para detectar cambios en los campos de entrada (input). En React, onChange se maneja mediante una función que actualiza el estado del componente cada vez que el valor de un campo cambia.

Ejemplo Básico de onChange
```javascript
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value
  });
};
```
- **event.target.name:** Nombre del campo de entrada que cambió.
- **event.target.value:** Nuevo valor del campo de entrada.
### Uso de onChange en el Proyecto
En este proyecto, onChange se utiliza para manejar los cambios en los campos del formulario en TaskForm:

```javascript
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      addTask(formData);
      setFormData({ name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Task Name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          placeholder="Task Description"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};
export default TaskForm;
```
- **handleChange:** Función que actualiza el estado del formulario cada vez que cambia el valor de un campo.
- **handleSubmit:** Función que maneja el envío del formulario, añadiendo la nueva tarea si el campo name no está vacío.

⌨️con ❤️por [Toffy Caluga](https://github.com/toffycaluga)