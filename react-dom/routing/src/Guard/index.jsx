import { Redirect, Route } from 'react-router-dom'

const Guard = props => {
    const isAuth = false;
    return isAuth ? <Route {...props} /> : <Redirect to='/login' />

}

export { Guard }