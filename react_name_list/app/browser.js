import NameList from './components/NameList'
import React from 'react'

var members = [
  {name: "John", age: 25},
  {name: "Mary", age: 28}
]

React.render(<NameList members={members} />, document.getElementById('container'))
