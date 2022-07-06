import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login'
import Page404 from '../pages/notFount/notFound';
import PrivateRoute from './privateRoute'
export default function Urls() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<PrivateRoute />}>
                    <Route exact path='/' element={<Login />} />
                </Route>
                <Route path='*' element={<Page404 />} />
            </Routes>

        </>
    );
}
