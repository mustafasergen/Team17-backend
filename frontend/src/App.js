import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import MyProfileScreen from './screens/MyProfileScreen'
import FanatikaScreen from './screens/FanatikaScreen'



function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/fanatika' component={FanatikaScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/my/profile' component={MyProfileScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />


        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
