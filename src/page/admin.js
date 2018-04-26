import React from 'react'
import { connect } from 'react-redux'
import rluy from 'rluy'

console.log(rluy)

console.log('1')

const RluyComponent = props => {
  return <div>{props.count}</div>
}

const mapState = state => {
  return {
    ...state.admin,
  }
}

export default connect(mapState)(RluyComponent)
