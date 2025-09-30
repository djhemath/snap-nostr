import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  history.replaceState({ path: currentPath }, currentPath, currentPath);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
