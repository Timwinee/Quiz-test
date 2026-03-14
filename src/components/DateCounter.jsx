import { useReducer, useState } from 'react';

const initialState = {
    count:0,
    step:1,
}

function reducer(state, action){
    console.log(state, action)
    return state + action
}

const date = new Date()
function DateCounter() {

    const [state, dispatch] = useReducer(reducer, initialState)
    

//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
    const {count, step} = state

  const currentDate = new Date(date)
  currentDate.setDate(date.getDate() + count)

  const dec = function () {
    dispatch({type:"decrement"})
  };

  const inc = function () {
    dispatch({type:"increment"})
  };

  const defineCount = function (e) {
    dispatch({type:"setcount", payload:Number(e.target.value)})
  };

  const defineStep = function (e) {
    dispatch({type:"setStep", payload:Number(e.target.value)});
  };

  const reset = function () {
    dispatch({type:"reset"})
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} className='outline-2 text-center' />
        <button onClick={inc}>+</button>
      </div>

      <p>{currentDate.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;