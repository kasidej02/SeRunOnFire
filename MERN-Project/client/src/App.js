import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import Form from './components/Form/Form';
import Profile from './components/profile/profile';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
    
  return (
    <BrowserRouter>
      <div maxWidth="xl" padding='0'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={() => <Redirect to="/posts"/>} />
          <Route path='/posts' exact component={Home} />
          <Route path='/posts/create' exact component={Form} />
          <Route path='/posts/search' exact component={Home} />
          <Route path='/posts/:id' exact component={PostDetails} />
          <Route path='/auth' exact component={() => (!user? <Auth/>: <Redirect to="/posts"/>)} />
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
