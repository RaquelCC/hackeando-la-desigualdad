import React, { Component } from 'react';
import './App.css';
import ActivitiesCategory from './components/activitiesCategory';
import GraphPage from './components/graphPage';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import SexCategory from './components/sexCategory'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      userGender: false,
      userActivity: false,
      currentPage: "selectGender"
    }
    
    this.selectActivity = this.selectActivity.bind(this);
    this.clickWomanButton  = this.clickWomanButton.bind(this);
    this.clickManButton  = this.clickManButton.bind(this);
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

  render() {
    return (
      <div className="App">
      <Header />
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
       
        
       
      </div>
    );
  }
}

export default App;
