import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    LOGIN,
    LOGOUT,
    FETCH_CODERS,
    FETCH_PORTFOLIO,
    SAVE_PORTFOLIO,
    SAVE_PROJECT
} from './types';

export const fetchCoders = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    // dispatch({ type: FETCH_CODERS, payload: res.data });
};

export const login = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: check login status
    // Link to dashboard
    // dispatch({ type: LOGIN, payload: true });
};

export const logout = () => async dispatch => {
    // await logout();
    // Link to logout
    // dispatch({ type: LOGOUT, payload: false });
};

export const fetchPortfolio = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    // dispatch({ type: FETCH_PORTFOLIO, payload: res.data });
};

export const savePortfolio = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    // Link to myportfolio
    // dispatch({ type: FETCH_CODERS });
};

export const saveProject = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    // Link to myportfolio
    // dispatch({ type: SAVE_PROJECT });
};

// sync sample
export function fetchOOXX(city) {
    // const request = axios.get(url);
    // return {
    //     type: TYPE,
    //     payload: payload
    // };
}
