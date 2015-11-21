import React from 'react';

import Tasks from './Tasks.jsx';

var tasks = [
  {id: 1, task: 'Take out trash'},
  {id: 2, task: 'Walk the cat'}
];

module.exports = React.createClass({
  render () {
    return (
      <div>
        <h1>Todo App</h1>
        <Tasks tasks={tasks} />
      </div>
    );
  }
});
