import React from 'react'
import { connect } from 'rluy'

const RluyComponent = props => {
  return <div>{props.count}</div>
}

const mapState = state => {
  return {
    ...state.admin,
  }
}

export default connect(mapState)(RluyComponent)
