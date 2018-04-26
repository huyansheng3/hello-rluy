//router.js
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default component => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={component['home.js']} />
        <Route path="/admin" component={component['admin.js']} />
      </div>
    </Router>
  )
}
