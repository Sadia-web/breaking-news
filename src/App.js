import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadLine from './components/TopHeadLine/TopHeadLine';
import Fragment from './components/Fragment/Fragment';


function App() {
  return (
    <div>
     <h2 className="text-center">React BootStrap</h2>
     <Header></Header>
     <TopHeadLine></TopHeadLine>
     <Fragment></Fragment>


     
    </div>
  );
}

export default App;
