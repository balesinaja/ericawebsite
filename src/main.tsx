// Patch window.fetch property descriptor if it is read-only / getter-only
try {
  let _fetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get: () => _fetch,
    set: (val) => { _fetch = val; },
    configurable: true,
    enumerable: true
  });
} catch (_) {
  // ignore if redefine fails
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
