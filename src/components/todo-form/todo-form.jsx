import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    // Fin an ability to add new task
    let newTodos = [...todos]
    newTodos.push(  {
      id: todos.length + 1,
      label: task,
      checked: false,
    })
    setTodos(newTodos)
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13 && task) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo} disabled={!task}>
        Add task
      </button>
    </div>
  );
};
