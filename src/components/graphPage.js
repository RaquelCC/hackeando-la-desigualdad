import React from 'react';
import CanvasJSReact from '../canvas/canvasjs.react';
import './graphPage.css';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function GraphPage(props) {
    CanvasJS.addColorSet("yellow",
                [//colorSet Array

                "#F1B82B",
                "#F1B82B",                
                ])
    const options = {
        colorSet: "yellow",
        animationEnabled: true,
        exportEnabled: false,
        theme: "light2", //"light1", "dark1", "dark2"
        width: 250,
        height: 200,
        title:{
            text: ""
        },
        axisX:{
            title: props.actividad,
            gridThickness: 0,
            tickLength: 20,
            interval: 1,
           },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabel: "{y}", 
            //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { label:"Mujeres", y: props.mujeres},
                { label:"Hombres", y: props.hombres}
            ]
        }]
    }
    
    return (
        <div className="flex">
    <div className="canvas-container">
    <div className="graph-info-container"><span className="graph-info1">Tu sueldo es un</span><span className="graph-info2"> {Math.abs(props.brecha)}% {(props.brecha < 1) && (props.userGender === "Mujer") ? "menos" : "más"} </span></div>
        <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
        />

        <div className="te-parece-justo">Te parece justo?</div>
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
        <div className="generemos-cambio" onClick={props.moreInfoPage}>generemos un cambio   <i class="fas fa-arrow-right flecha-cambio"></i></div>
        </div>
    );
}

export default GraphPage;