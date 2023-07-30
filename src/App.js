import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'
import ProtectedRouter from './components/ProtectedRouter'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRouter exact path="/" component={Home} />
    <ProtectedRouter exact path="/product" component={Products} />
    <ProtectedRouter exact path="/cart" component={Cart} />

    <Route component={NotFound} />
  </Switch>
)

export default App
