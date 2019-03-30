import React from 'react';
import CanvasJSReact from '../canvas/canvasjs.react';
import './graphPage.css';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function GraphPage(props) {
    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light2", //"light1", "dark1", "dark2"
        width: 300,
        height: 300,
        title:{
            text: ""
        },
        axisX:{
            title: props.actividad,
            gridThickness: 0,
            tickLength: 10,
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
    <div className="canvas-container">
        <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
}

export default GraphPage;