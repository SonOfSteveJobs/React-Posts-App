import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {publicRoutes, privateRoutes} from '../../../router';
import {AuthContext} from '../../../context';
import Loader from '../loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map((route, index) => {
                    return (
                        <Route
                            exact={route.exact}
                            path={route.path}
                            element={route.component}
                            key={index + 1}
                        />)
                })}
                <Route path="*" element={<Navigate to="/posts"/>}/>
            </Routes>
            : <Routes>
                {publicRoutes.map((route, index) => {
                    return (
                        <Route
                            exact={route.exact}
                            path={route.path}
                            element={route.component}
                            key={index + 1}
                        />)
                })}
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>

    );
};

export default AppRouter;