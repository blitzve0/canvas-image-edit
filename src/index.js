import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HasprCursor from 'haspr-cursor' // Import Wrapper
import 'haspr-cursor/dist/cursor.css' // Import Style sheet

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HasprCursor>
      <App />
    </HasprCursor>
  </React.StrictMode>
)
