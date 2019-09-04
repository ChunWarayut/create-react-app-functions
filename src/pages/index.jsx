import React from 'react';
import '../styles/App.css';
import Route from '../route';

function DefaultApp() {
  return (
    <main>
      <h1>Create React App By ChunWarayut</h1>
      <h2>
        Subscribe with
        <a
          href="https://github.com/ChunWarayut"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub Now
        </a>
        !
      </h2>
      <Route />
    </main>
  );
}

export default DefaultApp;
