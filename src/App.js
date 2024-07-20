import React from 'react';
import Reset from './components/auth/Reset';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Front End/Home/Home';
import Forget from './components/auth/Forget';
import Update from './components/auth/Update';
import Login from './components/auth/Login';
import Todo from './components/Front End/Todo';
import Correction from './components/auth/Correction';
import RegisteredUser from './components/Front End/RegisteredUsers';
import NoPage from './components/auth/NoPage';
import './scss/App.scss'
import TodoList from './components/Front End/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/Forget' element={<Forget />} />
        <Route path='./update' element={<Update />} />
        <Route path='.home' element={<Home/>} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/correction' element={<Correction/> } />
        <Route path='/registeredUser' element={<RegisteredUser/> } />
        <Route path='*' element={<NoPage />} />
        <Route path='/todoList' element={<TodoList />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
