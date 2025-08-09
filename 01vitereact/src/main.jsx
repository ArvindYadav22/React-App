import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Arv from './arv.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Arv/>
  </StrictMode>,
)
