import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SelectDropdown } from './lib';

const App = () => {
  const [selectedOption, setSelectedOption] = useState();

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
  ];

  return (
    <div>
      <SelectDropdown
        choices={options}
        onValueChange={handleOptionChange}
        placeholder="Select an option"
        label="Option"
      />
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
