import React, {useState} from 'react';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('Some text')

  return (
    <div className="App">
        <div className="post">
          <div className="post__content">
            <strong>1. Javascript</strong>
            <div>
              Javascript - programming language.
            </div>
          </div>
          <div className="post__btn">
            <button>Delete</button>
          </div>
        </div>
    </div>
  );
}

export default App;
