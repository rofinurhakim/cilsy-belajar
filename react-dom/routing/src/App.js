import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Todos } from './views/Todo';
import { AddTodos } from './views/AddTodo';
import { Todo } from './views/todos'
import  Login  from './views/login'
import { Guard } from './Guard/index'
import CounterRedux from './views/CounterRedux'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Todos} exact path="/" />
        <Guard component={AddTodos} path='/add-todo' />
        <Redirect from='/tambah=todos' to='/add-todos' />
        <Route component={Login} path='/login' />
        <Route component= {CounterRedux} path= '/counter' />
        <Route component={Todo}  exact={true} path='/:slug' />
       
        
        
        
      </Switch>
    </Router>
  );
}

export default App;
