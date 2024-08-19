import React from 'react';
import TodoItem from '../TodoItem';
import './index.css'

const TodoList = ({ addSelectedLabel,addLabel,labels,tasks, toggleComplete, editTask, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
          labels={labels}
          addLabel={addLabel}
          addSelectedLabel={addSelectedLabel}
        />
      ))}
    </ul>
  );
};

export default TodoList;
