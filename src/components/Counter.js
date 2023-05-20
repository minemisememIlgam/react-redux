import { decrement, toZero } from "../actions";
import { increment } from "../actions";
import { random } from "../actions";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.value);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count is: {counter} </h1>
      <button onClick={() => dispatch(decrement)}>DEC</button>
      <button onClick={() => dispatch(increment)}>INC</button>
      <button onClick={() => dispatch(random)}>RND</button>
      <button onClick={() => dispatch(toZero)}>Zero it!</button>
    </div>
  );
};

export default Counter;
