import React from 'react';
import { useState } from 'react';
import { TiDelete } from "react-icons/ti";
import LabelManager from '../LabelManager';
import './index.css';

const TodoItem = ({ addSelectedLabel,task, toggleComplete, editTask, deleteTask, addLabel, labels }) => {
  const [selectedLabels,setSelectedLabels]=useState(task.selectedLabels||[])

  const onChangeLabel = (event) => {
    const selectedLabel = event.target.value;
    if (!selectedLabels.includes(selectedLabel)) {
      const updatedLabels = [...selectedLabels, selectedLabel];
      setSelectedLabels(updatedLabels);
      task.selectedLabels = updatedLabels; 
      editTask(task); // Save the updated task to persist the changes
    }
  };

  
  return (
    <li className={task.completed ? 'todo-item open' : 'todo-item'}>
      <div className='checkbox-delete'>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <button onClick={() => deleteTask(task.id)} className='delete-btn'>
          <TiDelete size={20} color='red' />
        </button>
      </div>
      <div className='card-text'>
        <span className='title'>{task.title}</span>
      </div>
      <span className={task.completed ? 'completed' : ''}>{task.description}</span>
      <div className='btns-container'>
        <button onClick={() => editTask(task)}>Edit</button>
      </div>
      <div className='labels-list'>
        {selectedLabels.map(label=>(
          <span className='label'>{label}</span>
        ))}
      </div>
      <div className='select-container'>
        <select onChange={onChangeLabel}>
          {labels.map(e => (
            <option key={e.id} value={e.name} selected>{e.name}</option>
          ))}
        </select>
          <LabelManager labels={labels} addLabel={addLabel}/>
      </div>
    </li>
  );
};

export default TodoItem;
