import { FormEvent, useState } from 'react';

import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Tweet } from '../../components/Tweet';

import './styles.css';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState(['Concordo', 'Faz sentido']);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers((prevState) => [newAnswer, ...prevState]);
    setNewAnswer('');
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente a repellat quis magnam velit provident nemo quibusdam consequuntur eos, illum beatae voluptatum odit harum nostrum ad consequatur consectetur, quisquam vel!" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/JoaoPedroLuz57.png"
            alt="João Pedro Luz"
          />

          <textarea
            id="tweet"
            placeholder="Tweet your answer..."
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
          ></textarea>
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}
