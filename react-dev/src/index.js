
import React from 'react';
import { createRoot } from 'react-dom/client';
import Route from "./routes"
import GlobalStyle from "./Styles/globlalStyle";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Route />
    <GlobalStyle />
  </React.StrictMode>
);
