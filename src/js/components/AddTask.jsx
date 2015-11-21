import React from 'react';

module.exports = React.createClass({
  getInitialState () {
    return {
      task: '',
      showing: false
    };
  },

  render () {
    return (
      <div>
        {this.renderInputArea()}
        <a onClick={this.handleClick}>Add Task</a>
      </div>
    )
  },

  renderInputArea () {
    if (this.state.showing) {
      return (
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.task}
          />
          <button onClick={this.handleAddTask}>Add Task</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
      )
    }
  },

  handleChange (e) {
    this.setState({
      task: e.target.value
    });
  },

  handleClick (e) {
    e.preventDefault();
    this.setState({
      showing: true
    })
  },

  handleAddTask () {
    // Use the callback provided by <App />
    var task = this.state.task;
    if (task) {
      this.props.onAddTask(task);
      this.setState({
        task: ''
      });
    }
  },

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleAddTask(this.state.task);
    }
  },

  handleCancel () {
    this.setState({
      showing: false
    });
  }
});
