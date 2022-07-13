import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <h1>Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Diminui 1</button>
        <button onClick={() => setCounter(counter + 1)}>Aumenta 1</button>
      </div>
    </div>
  );
}

export default Counter;
