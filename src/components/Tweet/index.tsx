import { Link } from 'react-router-dom';

import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';

import './styles.css';

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/JoaoPedroLuz57.png" alt="João Pedro Luz" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>João Pedro Luz </strong>
          <span>@joaopedroluz57</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
