import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = (props) => {
    const isLogin = localStorage.getItem('IsLogin')

    return isLogin === 'true' ? (
        <Route {...props} />
    ) : (
        <Redirect to='/login' />
    )
}