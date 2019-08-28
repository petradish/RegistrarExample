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
          <div id='registrarheader'>
            <h1>Office of the Registrar</h1>
          </div>
        <nav>
          <Link className='link' activeClassName='active-link' to='/'>Welcome</Link>
          <Link className='link' activeClassName='active-link' to='/campuses'>All Campuses</Link>
          <Link className='link' activeClassName='active-link' to='/students'>All Students</Link>
          <Link className='link' activeClassName='active-link' to ='/addCampus'>Add A Campus</Link>
          <Link className='link' activeClassName='active-link' to ='/addStudent'>Add A Student</Link>
        </nav>
        <main>
          
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
        No Match for URL: ... <code>{location.pathname}</code>
      </h1>
      <h2>Please use one of the links above to navigate to the page you're looking for!</h2>
    </div>
  )
}

export default Root
