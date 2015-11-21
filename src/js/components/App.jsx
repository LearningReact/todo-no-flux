import React from 'react';
import uuid from 'node-uuid';

import Tasks from './Tasks.jsx';
import AddTask from './AddTask.jsx';
import Filters from './Filters.jsx';

// Can pretend this data came from some external source
var tasks = [
  {id: 1, task: 'Take out trash', completed: false},
  {id: 2, task: 'Walk the cat', completed: false}
];

const ALL = 'all';
const COMPLETED = 'completed';
const ACTIVE = 'active';

module.exports = React.createClass({
  getInitialState () {
    return {
      tasks: tasks,
      showing: ACTIVE
    };
  },

  render () {
    return (
      <div>
        <h1>Todo App</h1>
        <Filters onChangeFilter={this.changeFilter} />
        <Tasks tasks={this.getTasks()} onToggleCompletion={this.handleToggleCompletion} />
        <AddTask onAddTask={this.handleAddTask} />
      </div>
    );
  },

  handleAddTask (task) {
    var newTask = {
      id: uuid.v4(),
      task: task,
      completed: false
    };
    this.setState({
      tasks: this.state.tasks.concat([newTask])
    });
  },

  handleToggleCompletion (id) {
    var taskIndex = this.findTask(id);
    var tasks = this.state.tasks.slice(0, taskIndex);

    // Add updated task
    var taskToUpdate = this.state.tasks[taskIndex];
    tasks.push({
      id: taskToUpdate.id,
      task: taskToUpdate.task,
      completed: !taskToUpdate.completed
    });

    // Concatentate remaining tasks
    tasks = tasks.concat(this.state.tasks.slice(taskIndex+1));
    this.setState({
      tasks: tasks
    })
  },

  findTask (id) {
    var tasks = this.state.tasks;
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        return i;
      }
    }
    throw new Error('unable to find task with id', id);
  },

  getTasks () {
    if (this.state.showing === ALL) {
      return this.state.tasks;
    }
    if (this.state.showing === ACTIVE) {
      return this.state.tasks.filter((task) => {
        return task.completed === false;
      });
    }
    if (this.state.showing === COMPLETED) {
      return this.state.tasks.filter((task) => {
        return task.completed === true;
      });
    }
  },

  changeFilter (filterType) {
    this.setState({
      showing: filterType
    });
  }
});
