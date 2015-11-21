import React from 'react';

module.exports = React.createClass({
  render () {
    var tasks = this.props.tasks.map((item => {
      return <li className={'item ' + (item.completed ? 'completed' : '')} key={item.id} onClick={this.handleClick.bind(null, item.id)}>
        {item.task}
      </li>
    }));

    return (
      <ul>
        {tasks}
      </ul>
    );
  },

  handleClick (id) {
    this.props.onToggleCompletion(id);
  }
});
