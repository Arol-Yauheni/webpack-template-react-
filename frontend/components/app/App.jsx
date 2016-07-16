import React from 'react';

import News from '../news/News';
import Comments from '../comments/Comments';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
        <News />
        <Comments />
      </div>
    );
  }
}
