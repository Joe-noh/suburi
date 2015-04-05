import React from 'react/addons'

let NewMemberForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {name: "", age: 0}
  },

  handleSubmit(e) {
    e.preventDefault();

    let newMember = {
      name: this.state.name,
      age:  parseInt(this.state.age)
    }
    this.props.onNewMemberSubmit(newMember)
    this.resetState()
  },

  resetState() {
    this.setState(this.getInitialState())
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" valueLink={this.linkState("name")} />
        <input type="number" valueLink={this.linkState("age")} />
        <button className="submit">Add</button>
      </form>
    )
  }
})

export default NewMemberForm
