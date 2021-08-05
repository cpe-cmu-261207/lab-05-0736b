import React from 'react';
import { useState } from 'react'
import Header from './components/Header'
import Todo from './components/Todo'
import Footer from './components/Footer'

function App() {

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
  }

  return (
    <div>

      <Header/>

      <Todo/>

      <Footer/>

    </div>
  );
}

export default App;
