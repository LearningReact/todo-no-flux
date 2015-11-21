import React from 'react';

module.exports = React.createClass({
  render () {
    var item = this.props.item;
    return (
      <li
        className={'item ' + (item.completed ? 'completed' : '')}
        key={item.id}
        onClick={this.handleClick.bind(null, item.id)}
        >
          {item.task}
      </li>
    );
  },

  handleClick (id) {
    this.props.onToggleCompletion(id);
  }
});
