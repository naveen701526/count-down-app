import { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountDown from './Components/CountDown';
import InputForm from './Components/InputForm';

export const AppContext = createContext(null);
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <AppContext.Provider value={{ counter, setCounter }}>
        <Routes>
          <Route path='/' element={<InputForm />} />
          <Route path='/countdown' element={<CountDown />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
