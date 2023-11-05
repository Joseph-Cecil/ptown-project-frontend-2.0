import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import '@mantine/notifications/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
    </Router>
    </MantineProvider>
  </React.StrictMode>,
)
