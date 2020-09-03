import React, {useState} from 'react';
import Header from './components/header';
import Todo from './components/todo';
import List from './components/list';

const initialFormData = Object.freeze({
  title: "",
  description: ""
});

function App() {

  const [formData, updateFormData] = useState(initialFormData);

  return (
    <div className="App">
      <Header formData={formData}/>
      <Todo formData={formData} updateFormData={updateFormData}/>
      <List />
    </div>
  );
}

export default App;
