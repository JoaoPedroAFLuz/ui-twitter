import { Sparkle } from 'phosphor-react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar';

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/JoaoPedroLuz57.png"
                alt="João Pedro Luz"
              />

              <textarea id="tweet" placeholder="What's happening?"></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>
);
