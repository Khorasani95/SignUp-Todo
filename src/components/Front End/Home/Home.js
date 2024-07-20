import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import Card from '../Card/Card';
import './Home.scss';

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <Header />
      <div className='content'>
        <div className='row mx-auto'>
          <div className="col">
            <Card title="Users" clickHandler={() => navigate('/registeredUser')} />
          </div>

          <div className="col">
            <Card title="Todos" clickHandler={() => navigate('/todoList')} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home;