import React from 'react';

module.exports = React.createClass({
  getInitialState () {
    return {
      task: ''
    };
  },

  render () {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.task} />
        <button>Add Task</button>
        <button>Cancel</button>
      </div>
    )
  },

  handleChange (e) {
    this.setState({
      task: e.target.value
    });
  }
});
