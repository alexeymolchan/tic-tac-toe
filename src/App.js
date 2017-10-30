import React, {Component} from 'react';
import styled from 'styled-components';
import FieldContainer from './components/FieldContainer';
import TextField from './components/TextField';
import Button from './components/Button';
import {isGameFinished, createFields, checkEmptyFields} from './utils';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gridSize: 0,
      items: [],
      started: false,
      finished: false,
      activePlayer: 1,
      result: null,
      error: null,
      players: [
        {id: 1, name: 'Player 1'},
        {id: 2, name: 'Player 2'},
      ],
    }
  }
  
  handleGridSizeChange = (e) => {
    const currentValue = Number(e.target.value);
    if (currentValue || currentValue === 0) {
      this.setState({
        gridSize: Number(e.target.value),
        error: '',
      });
    }
  };
  
  handleCreateGrid = () => {
    this.state.gridSize >= 3 ?
      this.state.gridSize <= 40 ?
        this.setState({
          items: createFields(this.state.gridSize),
          started: true,
        }) : this.setState({
        error: 'Grid size should be not more then 40',
      }) : this.setState({
      error: 'Grid size should be at least 3',
    });
    
  };
  
  checkForWinner = (fields, gridSize) => {
    const isEmptyFieldsExist = checkEmptyFields(fields);
    const isFinished = isGameFinished(fields, gridSize);
    
    if (!isEmptyFieldsExist) {
      this.setState({
        finished: true,
        result: 'This is draw',
      });
    }
    
    if (isFinished) {
      this.setState({
        finished: true,
        result: `${this.state.players.find(player => player.id !== this.state.activePlayer).name} won - Congrats!`,
      });
    }
  };
  
  handleFieldClick = (index) => {
    const mappedItems = this.state.items.map((item, i) => index === i ? this.state.activePlayer === 1 ? 'x' : 'o' : item);
    
    this.setState({
      items: mappedItems,
      activePlayer: this.state.activePlayer === 1 ? 2 : 1,
    }, () => this.checkForWinner(this.state.items, this.state.gridSize));
  };
  
  handleReset = () => {
    this.setState({
      gridSize: this.state.gridSize,
      items: [],
      result: null,
      activePlayer: 1,
      started: false,
      finished: false,
    })
  };
  
  
  render() {
    return (
      <div className={this.props.className}>
        {this.state.started ? (
          <FieldContainer
            countOfRows={this.state.gridSize}
            onFieldClick={this.handleFieldClick}
            items={this.state.items}
            finished={this.state.finished}
            result={this.state.result}
            onResetButtonClick={this.handleReset}
          />
        ) : (
          <TextFieldContainer>
            <TextField
              value={this.state.gridSize}
              onChange={this.handleGridSizeChange}
              error={this.state.error}
            />
            <Button onClick={this.handleCreateGrid}/>
          </TextFieldContainer>
        
        )}
      </div>
    );
  }
}

const StyledApp = styled(App)`
  display: flex;
  align-self: stretch;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
`;

const TextFieldContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  & > div:first-child {
    margin-right: 20px;
  }
  
  & > div:last-child {
    margin-bottom: 5px;
  }
`;

export default StyledApp;
