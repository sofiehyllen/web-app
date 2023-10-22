import 'react';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto'
import 'react-chartjs-2' 
import Chart from 'chart.js/auto';

const state = {
  labels: ['M', 'T', 'W','T', 'F', 'S', 'S'],
  datasets: [
    {
        label: 'Sleepgraph',
        backgroundColor: 'rgba(231, 115, 96, 1)',
        borderRadius: '8',
        data: [6.3, 7.4, 7.1, 9.5, 4.7, 6, 6.5]
    },
    {
        label: 'Psudodata',
        backgroundColor: 'rgba(240, 238, 230, 0.1)',
        borderRadius: '8',
        data: [10, 10, 10, 10, 10, 10, 10]
    }
  ]
};

Chart.defaults.datasets.bar.maxBarThickness = 28;
Chart.defaults.font.family = 'mundial';
Chart.defaults.font.weight = 100;

export default function Graph() {
    return (
      <div className='spacing-top' id='graph'>
        <Bar
          data={state}
          options={{
            responsive:true, //Gør grafen responsive
            maintainAspectRatio: false, //Gør at grafen ikke forbliver lille hvis viewporten forstørres 
            plugins:{ 
                legend:false, //Fjerner overskrift
            }, 
            scales:{
                x: {
                    stacked:true,
                    border: {display:false},
                    grid:{
                        display:false,
                    },
                    ticks:{
                        count:7,
                        color:'rgba(240, 238, 230, 1)',
                        font:{
                            size: 17,
                        }
                    }
                },
                y: {
                    beginAtZero:true,
                    border: {display:false},
                    grid:{
                        color: 'rgba(67, 55, 112)',
                        lineWidth: 2,
                        tickLength: 0,
                    },
                    ticks:{
                        padding: 5,
                        count:6,
                        stepSize: 2,
                        color: 'rgba(240, 238, 230, 0.7)',
                        font:{
                            size: 12,
                        }
                    }
                }
            }
          }}/>
      </div>
    );
  }
