import React from "react";
import { increase, decrease, reset } from "./counterSlice";
import styles from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

export function Counter() {
  const stateCount = useSelector((state) => state.counter.count);
  let [addValue, setAddValue] = React.useState(0);
  function onChangeHandle(e) {
    setAddValue(e.target.value);
  }
  function onResetHandle(e) {
    dispatch(reset());
    setAddValue(0);
  }
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(increase({ Value: addValue }))}
        >
          +
        </button>
        <span className={styles.value}>{stateCount}</span>
        <button
          className={styles.button}
          onClick={() => dispatch(decrease({ Value: addValue }))}
        >
          -
        </button>
      </div>
      <div>
        <input name="addValue" value={addValue} onChange={onChangeHandle} />
      </div>
      <button onClick={onResetHandle}>reset</button>
    </div>
  );
}
