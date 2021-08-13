import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/reducers/authReducer';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Token(props) {
    const dispatch = useDispatch()
    const { onLogin } = props;
    const query = useQuery();

    const token = query.get('token');
    const state = query.get('state');

    // Only accept token if state matches
    if (state === localStorage.getItem('state')) {
        dispatch(setToken({token}))
        localStorage.removeItem('state');
    }

    onLogin(token);
    return <Redirect to="/game" />;
}