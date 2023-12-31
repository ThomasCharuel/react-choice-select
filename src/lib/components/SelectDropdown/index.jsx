import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CaretIcon from '../../assets/caret-down.svg';
import styles from './index.module.scss';

/**
 * A custom dropdown select component.
 *
 * @component
 * @example
 * // Usage:
 * // <SelectDropdown options={options} onChange={handleChange} />
 *
 * @param {Object[]} options - The options for the dropdown.
 * @param {string} options[].value - The value of the option.
 * @param {string} options[].label - The label of the option.
 * @param {function} onChange - The callback function triggered when the selected option changes.
 * @param {string} label - The selector label.
 * @param {string} [placeholder] - The placeholder text for the dropdown.
 * @returns {JSX.Element} The SelectDropdown component.
 */
export default function SelectDropdown({
  options,
  onChange,
  label = null,
  placeholder = 'Select ...',
}) {
  const componentRef = useRef(null); // ref the component to check for outside click
  const [choice, setChoice] = useState();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  // Handle click outside of the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!componentRef.current.contains(event.target)) {
        setDropdownIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleChoiceClick = (newChoice) => {
    setChoice(newChoice);
    onChange(newChoice.value);
    setDropdownIsOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownIsOpen((current) => !current);
  };

  return (
    <div
      className={`${styles.container} ${dropdownIsOpen && styles.container_opened}`}
      ref={componentRef}
    >
      {label && (
        <p className={styles.label} onClick={() => toggleDropdown()}>
          {label}
        </p>
      )}
      <div className={styles.header} onClick={() => toggleDropdown()}>
        <p className={styles.header__selected_value}>{choice ? choice.label : placeholder}</p>
        <img
          className={styles.header__icon}
          src={CaretIcon}
          alt=""
          width="0.6rem"
          height="0.6rem"
        />
      </div>
      {dropdownIsOpen && (
        <div className={styles.dropdown__menu}>
          {options.map((item, index) => (
            <div
              onClick={() => handleChoiceClick(item)}
              key={index}
              className={`${styles.dropdown__menu_item} ${
                choice && choice.value === item.value && styles.dropdown__menu_item_selected
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
