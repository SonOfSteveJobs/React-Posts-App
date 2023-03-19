import React, {useState} from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
    const [value, setValue] = useState('Some text')

    return (
        <div className="App">
            <PostItem post={{id: 1, title: 'Javascript', body: 'Programming language'}}/>
            <PostItem post={{id: 2, title: 'Python', body: 'Another programming language'}}/>
        </div>
    );
}

export default App;
