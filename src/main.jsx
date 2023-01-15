import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CodeSnippet } from './CodeSnippet'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CodeSnippet />
    </BrowserRouter>
  </React.StrictMode>,
)
