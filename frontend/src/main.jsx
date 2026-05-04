import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Navebar from './components/Navebar.jsx';
import Futter from './components/Futter.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navebar/>
    <App />
    <Futter />
  </BrowserRouter>,
)
