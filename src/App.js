import React, { Component } from 'react';
import './App.css';
import ActivitiesCategory from './components/activitiesCategory';
import GraphPage from './components/graphPage';
import Header from './components/header'
import Inicio from './components/pantallainicial'
import SexCategory from './components/sexCategory'
import logo2 from '../src/IMG/Group.png'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      userGender: false,
      userActivity: false,
      currentPage: "initialPage"
    }
    
    this.selectActivity = this.selectActivity.bind(this);
    this.clickWomanButton  = this.clickWomanButton.bind(this);
    this.clickManButton  = this.clickManButton.bind(this);
    this.clickVamonButton = this.clickVamonButton.bind(this);
  }

  selectActivity(e) {
    this.setState({
      ...this.state,
      userActivity: e,
      currentPage: "graphPage"
    })
  }

  activitiesList() {
    const list = Object.keys(this.state.data["Ingreso medio y mediano mensual de las personas ocupadas por sexo, según rama de actividad 2017"]["Ingreso medio mensual"][ "Hombres"])

    return list

  }

  clickWomanButton (){
    this.setState({
      ...this.state,
      userGender:"Mujer",
      currentPage: "activitiesPage",
    })
  }

  clickManButton (){
    this.setState({
      ...this.state,
      userGender:"Hombre",
      currentPage: "activitiesPage",
    })
  }

  clickVamonButton(){
    this.setState({
      ...this.state,
      currentPage: "selectGender",
    })
  }

  render() {
    return (
      <div className="App">
      {this.state.currentPage !== "initialPage" &&
      <Header
      />}  
      {this.state.currentPage === "selectGender" && 
      <SexCategory
        onClickWomen={this.clickWomanButton}
        onClickMan={this.clickManButton}
        />}
      {this.state.currentPage === "activitiesPage" && 
      <ActivitiesCategory 
      onClick={this.selectActivity}
      activitiesList={this.activitiesList()}
      />}
      {this.state.currentPage === "graphPage" &&
      <GraphPage
      hombres={this.state.data["Ingreso medio y mediano mensual de las personas ocupadas por sexo, según rama de actividad 2017"]["Ingreso medio mensual"][ "Hombres"][this.state.userActivity]}
      mujeres={this.state.data["Ingreso medio y mediano mensual de las personas ocupadas por sexo, según rama de actividad 2017"]["Ingreso medio mensual"][ "Mujeres"][this.state.userActivity]}
      brecha={this.state.data["Ingreso medio y mediano mensual de las personas ocupadas por sexo, según rama de actividad 2017"]["Ingreso medio mensual"][ "Brecha"][this.state.userActivity]}
      actividad={this.state.userActivity}    
      />}
      {this.state.currentPage === "initialPage" &&
      <Inicio
      onClickVamos={this.clickVamonButton}
      />}
      </div>
    );
  }
}

export default App;
