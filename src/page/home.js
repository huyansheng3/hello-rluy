import React from 'react'
import { connect } from 'rluy'

const Home = props => {
  return <div>home</div>
}

const mapState = state => {
  return {
    ...state.admin,
  }
}

export default connect(mapState)(Home)
