import React from 'react';
import styled from 'styled-components';

const TextField = (props) => (
  <div className={props.className}>
    <TextFieldTitle>
      Enter grid size
    </TextFieldTitle>
    <TextFieldInput
      error={props.error}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
    {props.error ? (<Error>{props.error}</Error>) : null}
  </div>
);

const StyledTextField = styled(TextField)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextFieldTitle = styled.div`
  font-size: 14px;
  color: #666677;
  font-style: italic;
  line-height: 18px;
  margin-bottom: 5px;
`;

const TextFieldInput = styled.input`
  border: 1px solid ${props => props.error ? 'red' : '#DCE5EB'};
  width: 150px;
  height: 40px;
  padding-left: 15px;
  border-radius: 3px;
  outline: none;
  font-weight: 300;
  font-size: 14px;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    color: #474E70;
    font-size: 14px;
    font-family: Source Sans Pro, sans-serif;
  }
  &::-moz-placeholder {
    color: #474E70;
    font-size: 14px;
    font-family: Source Sans Pro, sans-serif;
  }
  &:-ms-input-placeholder {
    color: #474E70;
    font-size: 14px;
    font-family: Source Sans Pro, sans-serif;
  }
  &:-moz-placeholder {
    color: #474E70;
    font-size: 14px;
    font-family: Source Sans Pro, sans-serif;
  }
`;

const Error = styled.div`
  position: absolute;
  top: 100%;
  color: red;
  font-size: 14px;
`;

export default StyledTextField;