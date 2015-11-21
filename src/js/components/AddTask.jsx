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
            value={this.state.task}
          />
          <button onClick={this.handleAddTask.bind(null, this.state.task)}>Add Task</button>
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

  handleAddTask (task) {
    // Use the callback provided by <App />
    this.props.onAddTask(task);
    this.setState({
      task: ''
    });
  },

  handleCancel () {
    this.setState({
      showing: false
    });
  }
});
