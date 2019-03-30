import React, { Component } from 'react';
import './App.css';
import ActivitiesCategory from './components/activitiesCategory';
import GraphPage from './components/graphPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      userGender: "Mujer",
      userActivity: false,
      currentPage: "activitiesPage"
    }
    
    this.selectActivity = this.selectActivity.bind(this);
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

  render() {
    return (
      <div className="App">

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
