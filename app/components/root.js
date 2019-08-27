import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AllCampuses from './allCampuses'
import AllStudents from './allStudents'
import SingleStudentDetail from './singleStudentDetail';
import SingleCampusDetail from './singleCampusDetail'
import AddStudentForm from './addStudent'
import AddCampusForm from './addCampus'

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Welcome</Link>
          <Link to='/campuses'>All Campuses</Link>
          <Link to='/students'>All Students</Link>
          <Link to ='/addCampus'>Add A Campus</Link>
          <Link to ='/addStudent'>Add A Student</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript</h1>
          <p>Check out our campus locations and star students!</p>
          <Switch>
            <Route exact path='/' component={AllCampuses} />
            <Route exact path='/campuses' component={AllCampuses} />
            <Route exact path='/campuses/:id' component={SingleCampusDetail} />
            <Route exact path='/addCampus' component={AddCampusForm} />

            <Route exact path='/students' component={AllStudents} />
            <Route exact path='/students/:id' component={SingleStudentDetail} />
            <Route exact path='/addStudent' component={AddStudentForm} />
            
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}
function NoMatch({location}) {
  return (
    <div>
      <h1>
        No Match for <code>{location.pathname}</code>
      </h1>
    </div>
  )
}

export default Root
