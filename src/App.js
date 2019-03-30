import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import SexCategory from './components/sexCategory'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: props.data,
      selectSexCategory:null
    }
    this.clickWomanButton  = this.clickWomanButton.bind(this);
    this.clickManButton  = this.clickManButton.bind(this);

  }

  clickWomanButton (){
    this.setState({
      ...this.state,
      selectSexCategory:"Mujer"
    })
  }

  clickManButton (){
    this.setState({
      ...this.state,
      selectSexCategory:"Hombre"
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
        <Header />
        <SexCategory
        onClickWomen={this.clickWomanButton}
        onClickMan={this.clickManButton}
        />
      </div>
    );
  }
}

export default App;
