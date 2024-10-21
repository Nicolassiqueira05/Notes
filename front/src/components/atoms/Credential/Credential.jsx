import { useState } from "react";
import "./Credential.css";

function Credential({ getValue, placeHolder }) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(e) {
    let newValue = e.target.value;
    setInputValue(newValue);
    getValue(newValue);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    if (!inputValue) {
      setIsFocused(false);
    }
  }

  return (
    <div id="credential" className={`credential ${isFocused || inputValue ? 'input-active' : ''}`}>
      <input
        className="credentialinput"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
      />
      <p className="placeholder">{placeHolder}</p>
    </div>
  );
}

export default Credential;