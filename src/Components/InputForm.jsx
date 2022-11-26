import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const InputForm = () => {
  const navigate = useNavigate();
  const { setCounter } = useContext(AppContext);
  return (
    <>
      {' '}
      <form>
        <input type='text' onChange={(e) => setCounter(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/countdown');
          }}
          type='submit'
        >
          submit
        </button>
      </form>
    </>
  );
};

export default InputForm;
