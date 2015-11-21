import React from 'react';
import uuid from 'node-uuid';

import Tasks from './Tasks.jsx';
import AddTask from './AddTask.jsx';

// Can pretend this data came from some external source
var tasks = [
  {id: 1, task: 'Take out trash'},
  {id: 2, task: 'Walk the cat'}
];

module.exports = React.createClass({
  getInitialState () {
    return {
      tasks: tasks
    };
  },

  render () {
    return (
      <div>
        <h1>Todo App</h1>
        <Tasks tasks={this.state.tasks} />
        <AddTask onAddTask={this.handleAddTask} />
      </div>
    );
  },

  handleAddTask (task) {
    var newTask = {
      id: uuid.v4(),
      task: task
    };
    this.setState({
      tasks: this.state.tasks.concat([newTask])
    });
  }
});
