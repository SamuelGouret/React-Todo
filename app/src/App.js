import React from 'react';
import Header from './components/header';
import Todo from './components/todo';
import List from './components/list';

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <List />
    </div>
  );
}

export default App;
