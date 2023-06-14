# React Choice Select

The `react-choice-select` package provides a customizable and accessible `SelectDropdown` component for React applications.
This component allows users to select options from a dropdown menu.

## Installation

To install the package, use npm or yarn:

```bash
npm install react-choice-select
```

or

```bash
yarn add react-choice-select
```

## Usage

1. Import the `SelectDropdown` component in your React file:

```jsx
import { SelectDropdown } from 'react-choice-select';
```

2. Use the `SelectDropdown` component in your JSX code:

```jsx
<SelectDropdown options={...} onChange={...} />
```

## Props

The `SelectDropdown` components accepts the following props:

- `options` (array): An array of options to populate the dropdown. Each option should be an object with `label` and `value`properties.
- `onChange` (function): A callback function invoked when the selected option changes. It receives the selected option's value as a parameter.
- `label` (string, optional): The selector label.
- `placeholder` (string, optional): The placeholder text to display when no option is selected.

## Examples

```jsx
import React, { useState } from 'react';
import { SelectDropdown } from './lib';

const MyComponent = () => {
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
        options={options}
        onChange={handleOptionChange}
        label="Option"
        placeholder="Select an option"
      />
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default MyComponent;
```

## License

This package is licensed under the ISC License.
