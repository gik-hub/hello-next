import React, { useState } from 'react';

const InputElement = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        placeholder="Enter your name"
        onChange={e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
      />
      <br />
      {inputText}
      <hr /> <br />
      <ul>
        {historyList.map(record => {
          return <div> {record} </div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
