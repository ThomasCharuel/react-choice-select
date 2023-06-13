"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectDropdown;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _caretDown = _interopRequireDefault(require("../../assets/caret-down.svg"));
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function SelectDropdown(_ref) {
  let {
    placeholder = 'Select ...',
    label,
    choices,
    onValueChange
  } = _ref;
  const componentRef = (0, _react.useRef)(null); // ref the component to check for outside click
  const [choice, setChoice] = (0, _react.useState)();
  const [dropdownIsOpen, setDropdownIsOpen] = (0, _react.useState)(false);

  // Handle click outside of the component
  (0, _react.useEffect)(() => {
    const handleClickOutside = event => {
      if (!componentRef.current.contains(event.target)) {
        setDropdownIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  const handleChoiceClick = newChoice => {
    setChoice(newChoice);
    onValueChange(newChoice.value);
    setDropdownIsOpen(false);
  };
  const toggleDropdown = () => {
    setDropdownIsOpen(current => !current);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_indexModule.default.container, " ").concat(dropdownIsOpen && _indexModule.default.container_opened),
    ref: componentRef
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _indexModule.default.label,
    onClick: () => toggleDropdown()
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.header,
    onClick: () => toggleDropdown()
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _indexModule.default.header__selected_value
  }, choice ? choice.label : placeholder), /*#__PURE__*/_react.default.createElement("img", {
    className: _indexModule.default.header__icon,
    src: _caretDown.default,
    alt: "",
    width: "0.6rem",
    height: "0.6rem"
  })), dropdownIsOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.dropdown__menu
  }, choices.map((item, index) => /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => handleChoiceClick(item),
    key: index,
    className: "".concat(_indexModule.default.dropdown__menu_item, " ").concat(choice && choice.value === item.value && _indexModule.default.dropdown__menu_item_selected)
  }, item.label))));
}
SelectDropdown.propTypes = {
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  choices: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.any.isRequired
  })).isRequired,
  onValueChange: _propTypes.default.func.isRequired
};