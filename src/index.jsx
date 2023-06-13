import React from 'react';
import ReactDOM from 'react-dom/client';
import { SelectDropdown } from './lib';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectDropdown
          label="Department"
          choices={[{ value: 1, label: 'one' }, { value: 2, label: 'two' }, ]}
          onValueChange={(value) => console.log(value)}
        />
  </React.StrictMode>,
);
