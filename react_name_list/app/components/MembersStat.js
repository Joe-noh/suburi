import React from 'react'

let MembersStat = React.createClass({
  getInitialState() {
    return this.calcState(this.props.members)
  },

  componentWillReceiveProps(nextProps) {
    this.setState(this.calcState(nextProps.members))
  },

  calcState(members) {
    return {
      numWithUnit: this.countNumber(members),
      averageAge:  this.calcAverageAge(members)
    }
  },

  countNumber(members) {
    let num = members.length
    let unit = num < 2 ? "person" : "people"

    return `${num} ${unit}`
  },

  calcAverageAge(members) {
    if (members.length == 0) {
      return 0
    }

    let totalAge = members.map(function(member) {
      return member.age
    }).reduce(function(acc, age) {
      return acc + age
    })

    return Math.round(100 * totalAge / members.length) / 100
  },

  render() {
    return (
      <div>
        <div>{this.state.numWithUnit}</div>
        <div>{this.state.averageAge}</div>
      </div>
    )
  }
})

export default MembersStat
