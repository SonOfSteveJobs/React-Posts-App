import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import cl from './MyNavbar.module.css'
import MyButton from '../button/MyButton';
import {AuthContext} from '../../../context';

const MyNavbar = () => {
    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={cl.navbar}>
            <MyButton onClick={logout}>Exit</MyButton>
            <div className={cl.navbar__links}>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default MyNavbar;