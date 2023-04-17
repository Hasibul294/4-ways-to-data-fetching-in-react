import { Suspense, useState } from 'react'
import './App.css'
import QuoteWithFetch from "./components/fetch/QuoteWithFetch";
import QuoteWithAxios from './components/axios/QuoteWithAxios';
import QuoteWithSwr from './components/swr/QuoteWithSwr';

function App() {

  return (
    <div className="App">
      <h1>Get Quotes usind fetch api</h1>
      <QuoteWithFetch></QuoteWithFetch>
      <QuoteWithAxios></QuoteWithAxios>
      <Suspense fallback={<h1>Loading Data......</h1>}>
        <QuoteWithSwr></QuoteWithSwr>
      </Suspense>
    </div>
  );
}

export default App
