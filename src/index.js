import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthState from './context/auth/AuthState';
import TodosState from './context/todos/TodosState';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDP5X8zo8TcNWk331hjWFSZTxsl2NtZVS0',
  authDomain: 'practice-aug-2020-todo-app.firebaseapp.com',
  databaseURL: 'https://practice-aug-2020-todo-app.firebaseio.com',
  projectId: 'practice-aug-2020-todo-app',
  storageBucket: 'practice-aug-2020-todo-app.appspot.com',
  messagingSenderId: '980408949602',
  appId: '1:980408949602:web:f31d3fbc8d7177b300ea3b',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.functions().useFunctionsEmulator('http://localhost:5001');

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <TodosState>
        <App />
      </TodosState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);
