import React from 'react';

import './App.css';
//Components

import LoginClient from './components/clients/loginClient/LoginClient'
// import RegisterClient from './components/clients/registerClient/RegisterClient'
import PrivateRoute from './components/utils/PrivateRoute';
import HealthMetricForm from './components/clients/healthMetricForm/HealthMetricForm';
import Routes from './components/utils/Routes';
// import ClientLogin from './components/clients/loginClient/ClientLogin'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className='App'>
      <LoginClient/>
      <HealthMetricForm />
    </div>

  );
  }



export default App;
