
import React, {useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)
    return (
      <div className="hello">
        <button data-testid="counter-button" onClick={() => setCount(count + 1)}>{count}</button>
      </div>
    );
}
