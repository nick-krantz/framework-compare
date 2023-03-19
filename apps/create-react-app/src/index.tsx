import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SpotifyProvider } from './providers/SpotifyProvider/SpotifyProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <SpotifyProvider>
      <App />
    </SpotifyProvider>
);
