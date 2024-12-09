import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);

/**
 * ✅ Challenge 1: set up the BrowserRouter and Routes!
 * Note: nothing will render to the page yet.
 */
/**
 * ✅ Challenge 2:
 * 1. Create an "About" component (just render another h1 that says
 *    "About page" or something more interesting of your choosing).
 * 2. Create a new Route to render the About component when the path
 *    is /about
 */
////// NOTE: refactored and moved routing to app, and home page to Home.jsx
