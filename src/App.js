import React from 'react';
import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import MyNavbar from './components/UI/navbar/MyNavbar';
import AppRouter from './components/UI/app-router/AppRouter';

function App() {
    return (
        <BrowserRouter>
            <MyNavbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
