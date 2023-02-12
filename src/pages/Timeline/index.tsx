import { FormEvent, KeyboardEvent, useState } from 'react';

import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Tweet } from '../../components/Tweet';

import './styles.css';

export function Timeline() {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([
    'Meu terceiro tweet',
    'Meu segundo tweet',
    'Meu primeiro tweet',
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets((prevState) => [newTweet, ...prevState]);
    setNewTweet('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets((prevState) => [newTweet, ...prevState]);
      setNewTweet('');
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/JoaoPedroLuz57.png"
            alt="João Pedro Luz"
          />

          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onChange={(event) => setNewTweet(event.target.value)}
            onKeyDown={handleHotKeySubmit}
          ></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}
