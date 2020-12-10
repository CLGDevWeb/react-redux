import '../src/styles/App.css';
import {useSelector, useDispatch } from 'react-redux';

function App() {

  const counter = useSelector(state => state.counter);
  const login = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})} >Increment</button>
      <button onClick={() => dispatch({type: "SIGN_IN"})} >Sign In</button>
      {login && (
        <p>Connected!</p>
      )}
    </div>
  );
}

export default App;
