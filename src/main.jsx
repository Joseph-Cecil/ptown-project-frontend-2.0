import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import '@mantine/notifications/styles.css';
import { store } from './App/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <MantineProvider>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
    </Router>
    </MantineProvider>
    </Provider>
  </React.StrictMode>
)
