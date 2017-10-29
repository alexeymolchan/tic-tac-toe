import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import xIcon from '../../assets/icons/x.svg';
import oIcon from '../../assets/icons/oIcon.svg';

const FieldContainer  = (props) => (
  <div className={props.className}>
    {props.finished ? (
      <ResultContainer>
        <Text>
          {props.result}
        </Text>
        <Button
          onClick={props.onResetButtonClick}
          backgroundColor="#F8EDD1"
          color="#D88A8A"
          activeBackgroundColor="#D88A8A"
          activeColor="#F8EDD1"
          title="Reset"
        />
      </ResultContainer>
    ) : (
      props.items.map((item, index) => (
        <Field countOfRows={props.countOfRows} key={index} active={!item} onClick={() => props.onFieldClick(index)}>
          {item ? (
            <Icon src={item === 'x' ? xIcon : oIcon} />
          ) : null}
        </Field>
        ))
    )}
    
  </div>
);

const StyledFieldContainer = styled(FieldContainer)`
  display: flex;
  width: ${props => props.finished ? 'auto': '95%'};
  height: ${props => props.finished ? 'auto': '95%'};
  flex-wrap: wrap;
  background-color: #FCFCFC;
  border-radius: 5px;
  padding: ${props => props.finished ? '50px' : '5px'};
`;

const Field = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #FFF;
  width: calc((100%/ ${props => props.countOfRows}) - 10px);
  height: calc((100% / ${props => props.countOfRows}) - 10px);
  background-color: #bbaacc;
  margin: 5px;
  cursor: pointer;
  pointer-events: ${props => props.active ? 'auto' : 'none'};
  border-radius: 5px;
  box-sizing: border-box;
  &:hover {
    background-color: ${props => props.active ? '#666677' : '#bbaacc'};
  }
`;

const Text = styled.div`
  display: flex;
  flex: 1,
  text-align: center;
  padding: 20px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Icon = styled.img`
  width: 60%;
  height: 60%;
`;

export default StyledFieldContainer;