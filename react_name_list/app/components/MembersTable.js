import React from 'react'
import Member from './Member'

let MembersTable = React.createClass({
  render() {
    var members = this.props.members.map(function(member, i) {
      return <Member key={i} memberId={i} name={member.name} age={member.age}
                     onDestroyMember={this.props.onDestroyMember}/>
    }.bind(this))

    return (
      <table className="members-table">
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {members}
      </table>
    )
  }
})

export default MembersTable
