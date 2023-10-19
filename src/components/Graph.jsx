import 'react';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto'
import 'react-chartjs-2' 


const state = {
  labels: ['M', 'T', 'W','T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'Sleepgraph',
      backgroundColor: '#E77360',
      data: [6.3, 7.4, 7.1, 8, 4.7, 6, 6.5]
    }
  ]
};

export default function Graph() {
    return (
      <div className='graph'>
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
                    grid:{display:false},
                    ticks:{
                        color:'#F0EEE6',
                        font:{
                            family: 'mundial',
                            size: 15,
                        }
                    }
                },
                y: {
                    grid:{
                        color: 'rgba(67, 55, 112)',
                        lineWidth: 2,

                    },
                    ticks:{
                        stepSize: 2,
                        color: 'rgba(240, 238, 230, 0.7)',
                        font:{
                            family: 'mundial',
                            weight: 100,
                            size: 12,
                        }
                    }
                }
            }
          }}/>
      </div>
    );
  }
