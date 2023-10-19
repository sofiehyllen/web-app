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
      <div>
        <Bar
          data={state}
          options={{
            layout: {
                
            },
            plugins:{legend:false} //Fjerner overskrift
          }}/>
      </div>
    );
  }
