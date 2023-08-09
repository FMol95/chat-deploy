import { useState } from "react";
import styles from "./Input.module.css";

function Input({ onSendChange }) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onClickSend = () => {
    if (onSendChange) {
      onSendChange(value);
      setValue("");
    }
  };

  return (
    <div className={styles.inputField}>
      <input
        type="text"
        placeholder="Start typing!"
        className={styles.input}
        onChange={onChange}
        value={value}
      />
      <button className={styles.button} onClick={onClickSend}>
        Send Message
      </button>
    </div>
  );
}

export default Input;
