import React from 'react';

module.exports = React.createClass({
  render () {
    return (
      <div>
        <div>{this.renderItemCount()}</div>
        <button onClick={this.handleClick.bind(null, 'all')}>All</button>
        <button onClick={this.handleClick.bind(null, 'active')}>Active</button>
        <button onClick={this.handleClick.bind(null, 'completed')}>Completed</button>
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  },

  renderItemCount () {
    if (this.props.itemsRemaining === 1) {
      return '1 item remaining';
    } else {
      return this.props.itemsRemaining + ' items remaining';
    }
  },

  handleClick (filterType) {
    this.props.onChangeFilter(filterType);
  },

  handleClear () {
    this.props.onClearCompleted();
  }
});
