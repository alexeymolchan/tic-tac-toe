import React from 'react';
import styled from 'styled-components';

const Button = (props) => (
  <div
    onClick={props.onClick}
    className={props.className}
  >
    {props.title}
  </div>
);

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  border-radius: 3px;
  background-color: ${props => props.backgroundColor};
  z-index: 0;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  position: relative;
  overflow: hidden;
  transition: .3s;
  &:after {
    position: absolute;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    background-color: ${props => props.activeBackgroundColor};
    height: 120%;
    left: -10%;
    transform: skewX(15deg);
    z-index: -1;
  }
  
  &:hover {
    cursor: pointer;
    color: ${props => props.activeColor};
    &:after {
      left: -10%;
      width: 120%;
    }
  }
`;

StyledButton.defaultProps = {
  title: 'Start',
  color: '#fb9f9f',
  width: '70px',
  height: '30px',
  activeBackgroundColor: '#fb9f9f',
  backgroundColor: '#FFF',
  activeColor: '#FFF',
};

export default StyledButton;