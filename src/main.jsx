import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CodeSnippetApp } from './CodeSnippetApp';

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CodeSnippetApp />
    </BrowserRouter>
  </React.StrictMode>,
)
