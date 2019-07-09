import React, { Component } from 'react';
import List from './components/priorities/List';
import TaskForm from './components/priorities/TaskForm';
import TaskFilter from './components/priorities/TaskFilter';


class App extends Component {
  state = {
    tasks: [
      { id: 1, name: 'Perform a site audit', complete: true },
      { id: 2, name: 'Perform a competitor analysis', complete: false },
      { id: 3, name: 'Map out the site architecture', complete: false }
    ],
    filter: 'All'
  }

  visibleItems = () => {
    const { tasks, filter } = this.state;
    switch(filter) {
      case "Active ":
        return tasks.filter( t => !t.complete )
      case "Complete ":
        return tasks.filter( t => t.complete )
      default:
        return tasks;
    }
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  handleClick = (id) => {
    const { tasks } = this.state
    this.setState({
      tasks: tasks.map( task => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete
          }
        }
        return task
      })
    })
  }

  getUniqId = () => {
    // NOTE We are just using this as a helper function 
    // for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addItem = (name) => {
    const { tasks } = this.state
    const newTask = { id: this.getUniqId(), name, complete: false }
    this.setState({ tasks: [newTask, ...tasks] })
  }

  render() {
    const { tasks, filter } = this.state
    return (
      <div>
        <TaskForm addItem={this.addItem} />
        <h1>SEO Priorities List</h1>
        <TaskFilter filter={filter} setFilter={this.setFilter} />
        <List name='SEO Priorities List' items={this.visibleItems()} taskClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
