import React from 'react';
import ReactDOM from 'react-dom/client';

import { Sidebar } from './components/Sidebar';
import { Tweet } from './components/Tweet';

import { Header } from './components/Header';
import { Separator } from './components/Separator';

import './global.css';

const tweets = [
  'Meu terceiro tweet',
  'Meu segundo tweet',
  'Meu primeiro tweet',
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

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

          <Separator />

          {tweets.map((tweet, index) => (
            <Tweet key={index} content={tweet} />
          ))}
        </main>
      </div>
    </div>
  </React.StrictMode>
);
