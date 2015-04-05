import React from 'react'
import MembersTable from './MembersTable'
import MembersStat from './MembersStat'
import NewMemberForm from './NewMemberForm'

let NameList = React.createClass({
  getInitialState() {
    return {
      members: []
    }
  },

  onNewMemberSubmit(member) {
    this.setState({
      members: this.state.members.concat([member]),
      numMembers: this.state.members.length
    })
  },

  render() {
    return (
      <div>
        <MembersTable members={this.state.members} />
        <MembersStat members={this.state.members}/>

        <NewMemberForm onNewMemberSubmit={this.onNewMemberSubmit}/>
      </div>
    )
  }
})

export default NameList
