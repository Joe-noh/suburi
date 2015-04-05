import React from 'react'

let Member = React.createClass({
  render() {
    return (
      <tr className="member-row">
        <td>{this.props.name}</td>
        <td>{this.props.age}</td>
      </tr>
    )
  }
})

export default Member
