import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/tabs';
import Clock from './components/clock';

const TABS = [
  {title: "Hello", content: "OMGOMGOMGOMGOMGOMGOMGOMGOMGOMG"},
  {title: "LOL", content: "LOLOLOLOLLOLOLOLOLOLOLOLOLOLOLOO"},
  {title: "KK", content: "YOUYOUYOUYOUYOUYOUYOUYOUYOUYOUYOUYOU"}
];

export const Root = () => (
    <div className="widgets-wrapper">
      <Tabs panes={TABS} />
      <Clock />
    </div>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />, document.getElementById("root"));
});
