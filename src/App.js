import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { clickButton } from './actions';

class App extends Component {
  state = {
    input: ''
  }
  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    const { newValue, clickButton } = this.props;
    return (
      <div className="App">
      <span>Testando as funcionalidades do React com Redux - Puxar palavra do input e imprimir o resultado <br/><br/></span>
        <span>Texto: </span>
        <input onChange={this.onInputChange} value={this.state.input} type="text" />
        <button
          onClick={() => clickButton(this.state.input)}
        >
          Atualizar
        </button>

        <div>
          <b>{newValue}</b>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newValue: state.clickButton.newValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ clickButton }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);