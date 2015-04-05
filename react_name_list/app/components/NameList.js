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

  onDestroyMember(targetIndex) {
    let newMembers = this.state.members.filter(function(memebr, i) {
      return targetIndex !== i
    })

    this.setState({members: newMembers})
  },

  render() {
    return (
      <div>
        <MembersTable members={this.state.members} onDestroyMember={this.onDestroyMember}/>
        <MembersStat members={this.state.members}/>

        <NewMemberForm onNewMemberSubmit={this.onNewMemberSubmit}/>
      </div>
    )
  }
})

export default NameList
