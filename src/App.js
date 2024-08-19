import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TaskForm from './components/TaskForm';
import './App.css';

class App extends Component {
    state = {
      tasks: [],
      labels: []
    };
  

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const labels = JSON.parse(localStorage.getItem('labels')) || [];
    this.setState({ tasks, labels });
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    localStorage.setItem('labels', JSON.stringify(this.state.labels));
  }

  addSelectedLabel=(data)=>{
    const {tasks}=this.state
    const task=tasks.find(e=>e.id===data.id)
    if(task){
      task.label=data.label
    }
  }

  addTask = (newTask) => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
  }

  editTask = (updatedTask) => {
    const tasks = this.state.tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.setState({ tasks });
  }

  deleteTask = (taskId) => {
    const tasks = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({ tasks });
  }

  toggleComplete = (taskId) => {
    const tasks = this.state.tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks });
  }

  addLabel = (newLabel) => {
    this.setState(prevState => ({
      labels: [...prevState.labels, newLabel]
    }));
  }

  removeTasks=()=>{
    localStorage.removeItem('tasks')
    this.setState({tasks:[]})
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div className="App">
        <h1>Todos Application</h1>
        <div className='add-remove-container'>
          <TaskForm addTask={this.addTask} labels={this.state.labels} />
          <button onClick={this.removeTasks}>remove Tasks</button>
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleComplete={this.toggleComplete}
          editTask={this.editTask}
          deleteTask={this.deleteTask}
          labels={this.state.labels}
          addLabel={this.addLabel}
          addSelectedLabel={this.addSelectedLabel}
        />
        
      </div>
    );
  }
}

export default App;
