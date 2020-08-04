import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import ErrorBoundry from './components/errorBoundry/errorBoundry';
import Services from './services/services';
import {ServicesProvider} from './components/servicesContext/servicesContext';
import App from './components/app/app'

import store from './store'

const services = new Services();


ReactDOM.render(
  <Provider store={ store }>
    <ErrorBoundry>
      <ServicesProvider value={ services }>
        <Router>
          <App />
        </Router>
      </ServicesProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

