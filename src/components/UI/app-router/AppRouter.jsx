import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import About from '../../../pages/About';
import Posts from '../../../pages/Posts';
import PostIdPage from '../../../pages/PostIdPage';
import {routes} from '../../../router';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route exact path="/posts" element={<Posts/>}/>
        <Route exact path="/posts/:id" element={<PostIdPage/>}/>
        {routes.map((route) => {
          return (
              <Route
                  exact={route.exact}
                  path={route.path}
                  element={route.component}
              />)
        })}
        <Route path="*" element={<Navigate to="/posts"/>}/>
      </Routes>
  );
};

export default AppRouter;