import React from 'react';

import Tasks from './Tasks.jsx';

module.exports = React.createClass({
  render () {
    return (
      <div>
        <h1>Todo App</h1>
        <Tasks />
      </div>
    );
  }
});
