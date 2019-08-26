import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AllCampuses from './allCampuses'
import AllStudents from './allStudents'

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Welcome</Link>
          <Link to='/campuses'>All Campuses</Link>
          <Link to='/students'>All Students</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript</h1>
          <p>Check out our campus locations and star students!</p>
          <Switch>
            <Route path='/campuses' component={AllCampuses} />
            <Route path='/students' component={AllStudents} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default Root
