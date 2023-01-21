import { useEffect,  useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function CountDown() {
  const { counter, setCounter } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter,setCounter]);

  return (
    <span>
      {counter}
      <br />
      <br />
      <button
        onClick={(e) => {
          navigate('/');
        }}
      >
        Go Back
      </button>
    </span>
  );
}

export default CountDown;
