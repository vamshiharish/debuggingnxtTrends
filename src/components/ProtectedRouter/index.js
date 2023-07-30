import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRouter = props => {
  const token = Cookies.get('jwt-token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRouter
