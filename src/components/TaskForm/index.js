import React, { Component } from 'react';
import {v4 as uuid} from 'uuid'
import Popup from 'reactjs-popup';
import './index.css'

class TaskForm extends Component {
  state = {
        title:'',
        description:'',
    };
  

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title,description } = this.state;
    const newTask = {
      id: uuid(),
      title,
      description,
      completed: false,
      selectedLabels: []
    };
    this.props.addTask(newTask);
  }

  onChangeTitle=(e)=>{
    this.setState({title:e.target.value})
  }

  render() {
    return (
      <Popup trigger={<button className='add-task'>Add Task</button>} modal>
        {close => (
          <div className="modal">
            <h1 className='add'>Add Task</h1>
            <form onSubmit={(e) => { this.handleSubmit(e); close(); }} className='form'>
              <input className='input-el' type='text' onChange={this.onChangeTitle} value={this.state.title} placeholder='Enter Task Title'/>
              <input
                type="text"
                name="description"
                placeholder="Task Description"
                value={this.state.description}
                onChange={this.handleChange}
                required
                className='input-el'
              />
              <button type="submit" className='submit'>Save</button>
            </form>
          </div>
        )}
      </Popup>
    );
  }
}

export default TaskForm;
