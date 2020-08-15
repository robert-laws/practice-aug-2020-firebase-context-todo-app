import React from 'react';
import TodosState from './context/todos/TodosState';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import TodoPage from './components/todos/TodoPage';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

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

function App() {
  return (
    <TodosState>
      <Header />
      <h1>Todo App</h1>
      <TodoPage />
      <Footer />
    </TodosState>
  );
}

export default App;
