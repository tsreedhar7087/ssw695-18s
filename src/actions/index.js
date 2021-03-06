import axios from 'axios';
import {
  LOGIN,
  SIGN_UP,
  LOGOUT,
  FETCH_CODERS,
  FETCH_PORTFOLIO,
  SAVE_PORTFOLIO,
  SAVE_PROJECT,
  SET_EDITTING_PROJECT,
  ADD_CONTACT,
  SET_CURRENT_CODER_PORTFOLIO
} from './types';

export const fetchCoders = () => async dispatch => {
  // const res = await axios.get('path'); // TODO: update path, check res and update payload
  dispatch({
    type: FETCH_CODERS,
    payload: [
      {
        name: 'Lily',
        role: 'Python Developer',
        exp: '2 years experience',
        projects: [
          {
            projectName: 'asdasadfasfasda',
            projectDescription: 'asdffdasdfsdasd!'
          },
          {
            projectName: 'eledasdasdgan',
            projectDescription: 'No waaaaaagh!'
          },
          {
            projectName: 'adahjgfhdgfgnhmgfnxbvdzsd',
            projectDescription: 'asdasdfasdfsadfadsa!'
          }
        ]
      },
      {
        name: 'Tom',
        role: 'Java Developer',
        exp: '6 years experience',
        projects: [
          {
            projectName: 'asdasdadasdasd',
            projectDescription: 'assdadasdasddasd!'
          },
          {
            projectName: 'eledasddasdasdaasdgan',
            projectDescription: 'No waaaadadasdaaagh!'
          },
          {
            projectName: 'adadasdasdasdsd',
            projectDescription: 'asddadasdadsa!'
          }
        ]
      },
      {
        name: 'Jack',
        role: 'Beef Developer',
        exp: '4 years experience',
        projects: [
          {
            projectName: 'asgdgsdgfdsdasda',
            projectDescription: 'aadasdasdsdasd!'
          },
          {
            projectName: 'eledasgdfgsdfgdasdgan',
            projectDescription: 'No wadadasdaaaaagh!'
          },
          {
            projectName: 'agsdfgsdasd',
            projectDescription: 'asdasfsdgafadsa!'
          }
        ]
      }
    ]
  });
};

export const login = (email, password, callback) => async dispatch => {
  dispatch({ type: LOGIN, payload: { email, password } }); // TODO: del this line
  callback(); // TODO: del this line
  return; // TODO: del this line
  const url = 'http://34.203.190.77:8080/rest-auth/login/';
  const data = {
    email,
    password
  };
  console.log(data);
  try {
    const res = await axios.post(url, data);
    console.log(res);
    // const user = {};
    // loginSuccess(user, callback);
  } catch (e) {
    console.error(e);
  }
  console.log('called');
};

export const loginSuccess = (user, callback) => async dispatch => {
  dispatch({ type: LOGIN, payload: user });
  // if callback
  callback();
};

export const signUp = (
  username,
  email,
  password1,
  password2,
  callback
) => async dispatch => {
  const url = 'http://34.203.190.77:8080/rest-auth/registration/';
  const data = {
    username,
    email,
    password1,
    password2
  };
  console.log(data);
  try {
    const res = await axios.post(url, data);
    console.log(res);
  } catch (e) {
    console.error(e);
  }

  dispatch({ type: SIGN_UP, payload: data });
  callback();
};

export const logout = () => {
  // set the user state to null in redux-store to make the user 'logged out'
  return { type: LOGOUT };
};

export const fetchPortfolio = () => async dispatch => {
  // const res = await axios.get('path'); // TODO: update path, check res and update payload
  dispatch({
    type: FETCH_PORTFOLIO,
    payload: {
      name: 'tom',
      email: 'tom@email.com',
      projects: [
        { projectName: 'theaks', projectDescription: 'Waaaaaagh!' },
        { projectName: 'elegan', projectDescription: 'No waaaaaagh!' },
        { projectName: 'beef', projectDescription: 'oh!' }
      ]
    }
  });
};

export const savePortfolio = () => async dispatch => {
  // const res = await axios.post('path', obj); // TODO: update path, check res and update payload
  dispatch({ type: SAVE_PORTFOLIO });
};

export const saveProject = () => async dispatch => {
  // const res = await axios.post('path', obj); // TODO: update path, check res and update payload
  dispatch({ type: SAVE_PROJECT });
};

// sync sample
export const fetchOOXX = city => {
  // return {
  //     type: TYPE,
  //     payload: payload
  // };
};

export const setEdittingProject = projectName => {
  return {
    type: SET_EDITTING_PROJECT,
    payload: projectName
  };
};

export const addContact = coderID => async dispatch => {
  console.log('addContact action called');

  dispatch({ type: ADD_CONTACT });
};

export const setCurrentCoderPortfolio = coderPortfolio => {
  console.log('setCurrentCoderPortfolio action called');
  return {
    type: SET_CURRENT_CODER_PORTFOLIO,
    payload: coderPortfolio
  };
};
