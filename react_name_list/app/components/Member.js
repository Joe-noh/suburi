import React from 'react'

let Member = React.createClass({
  onDestroyMember() {
    this.props.onDestroyMember(this.props.memberId)
  },

  compomentWillReceiveProps() {
    console.log("woo")
  },

  render() {
    return (
      <tr className="member-row">
        <td>{this.props.name}</td>
        <td>{this.props.age}</td>
        <td><button onClick={this.onDestroyMember}>x</button></td>
      </tr>
    )
  }
})

export default Member
