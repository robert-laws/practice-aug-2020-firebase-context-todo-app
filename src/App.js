import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import { useAuth } from './components/auth/useAuth';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import LoginPage from './components/auth/LoginPage';
import TodoPage from './components/todos/TodoPage';
import UserProfile from './components/user/UserProfile';
import AuthContext from './context/auth/authContext';
import UserState from './context/user/UserState';

function App() {
  // const { isLoading, user } = useAuth();
  // console.log(user);

  const authContext = useContext(AuthContext);
  const { isLoading, user } = authContext;

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <ProtectedRoute
            isAuthed={!!user}
            isLoading={isLoading}
            path='/'
            exact
          >
            <TodoPage />
          </ProtectedRoute>
          <ProtectedRoute
            isAuthed={!!user}
            isLoading={isLoading}
            path='/user'
            exact
          >
            <UserState>
              <UserProfile userId={user} />
            </UserState>
          </ProtectedRoute>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
