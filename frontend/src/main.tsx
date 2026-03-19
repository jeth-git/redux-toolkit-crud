import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import './index.css'
import App from './App.tsx'
import { store2 } from './store/store2.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store2}>
      <App />
    </Provider>
  </StrictMode>,
)
