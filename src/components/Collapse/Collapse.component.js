import React from 'react';
import { CheckBoxContainer, CollapseElement, FocusableDiv } from './Collapse.style';

const Collapse = () => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  return (<CollapseElement>
    <h2>Focusable Div Method</h2>
    <div>
      <FocusableDiv tabIndex="0">
        <span>Div Element 0</span>
        <div>{lorem}</div>
      </FocusableDiv>
      <FocusableDiv tabIndex="1">
        <span>Div Element 1</span>
        <div>{lorem}</div>
      </FocusableDiv>
      <FocusableDiv tabIndex="2">
        <span>Div Element 2</span>
        <div>{lorem}</div>
      </FocusableDiv>
    </div>


    <h2>CheckBox Method</h2>
    <CheckBoxContainer>
        <label htmlFor="check0">Checkbox Element 0</label>
        <input type="checkbox" id="check0"/>
        <div>{lorem}</div>
    </CheckBoxContainer>
    <CheckBoxContainer>
        <label htmlFor="check1">Checkbox Element 1</label>
        <input type="checkbox" id="check1"/>
        <div>{lorem}</div>
    </CheckBoxContainer>
    <CheckBoxContainer>
        <label htmlFor="check2">Checkbox Element 2</label>
        <input type="checkbox" id="check2"/>
        <div>{lorem}</div>
    </CheckBoxContainer>


    <h2>Radio Method</h2>
    <CheckBoxContainer>
        <label htmlFor="radio0">Checkbox Element 0</label>
        <input name="radio-method" type="radio" id="radio0"/>
        <div>{lorem}</div>
    </CheckBoxContainer>
    <CheckBoxContainer>
        <label htmlFor="radio1">Checkbox Element 1</label>
        <input name="radio-method" type="radio" id="radio1"/>
        <div>{lorem}</div>
    </CheckBoxContainer>
    <CheckBoxContainer>
        <label htmlFor="radio2">Checkbox Element 2</label>
        <input name="radio-method" type="radio" id="radio2"/>
        <div>{lorem}</div>
    </CheckBoxContainer>
  </CollapseElement>);
};

export default Collapse;
