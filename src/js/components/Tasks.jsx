import React from 'react';

module.exports = React.createClass({
  render () {
    var tasks = this.props.tasks.map((item => {
      return <li className="task" key={item.id}>
        {item.task}
      </li>
    }));

    return (
      <ul>
        {tasks}
      </ul>
    );
  }
});
