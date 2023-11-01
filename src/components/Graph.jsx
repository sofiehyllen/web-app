import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'react-chartjs-2';
import moment from 'moment';


export default function Graph() {
    const [state, setState] = useState({
    labels: [],
    datasets: [
        {
        label: "Sleepdata",
        backgroundColor: 'rgba(231, 115, 96, 1)',
        borderRadius: '8',
        data: [],
        },
        {
        label: 'Psudodata',
        backgroundColor: 'rgba(240, 238, 230, 0.1)',
        borderRadius: '8',
        data: [10, 10, 10, 10, 10, 10, 10],
        },
    ],
    });


  
    useEffect(() => {
    async function fetchData() {
        const url = 'https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json';
        try {
            const response = await fetch(url);
            const data = await response.json();

            const formattedDay = (date) => {
                const dayLetter = moment(date).format("dddd").charAt(0);
                return dayLetter;
            }
        
            if (data !== null) {
            const entries = Object.entries(data);
            const latestEntries = entries.slice(-7); // Tag de seneste 7 elementer
        
            const sleepData = latestEntries.map(([, entry]) => parseFloat(entry.hs)); // Konverter til tal
            const dayData = latestEntries.map(([, entry]) => formattedDay(entry.date)); 
            setState((prev) => ({
                ...prev,
                labels: dayData,
                datasets: [
                {
                    ...prev.datasets[0],
                    data: sleepData,
                },
                ...prev.datasets.slice(1), // behold andre datasets uændrede
                ],
            }));
            } else {
            console.log('Ingen data fundet i databasen.');
            }
            } catch (error) {
            console.error('Fejl under hentning af data:', error);
            }
        }
        
    fetchData();
    }, []);

  return (
    <div className='spacing-top' id='graph'>
      <Bar
        data={state}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: false,
          },
          scales: {
            x: {
              stacked: true,
              border: { display: false },
              grid: {
                display: false,
              },
              ticks: {
                count: 7,
                color: 'rgba(240, 238, 230, 1)',
                font: {
                  size: 17,
                },
              },
            },
            y: {
              beginAtZero: true,
              border: { display: false },
              grid: {
                color: 'rgba(67, 55, 112)',
                lineWidth: 2,
                tickLength: 0,
              },
              ticks: {
                padding: 5,
                count: 6,
                stepSize: 2,
                color: 'rgba(240, 238, 230, 0.7)',
                font: {
                  size: 12,
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
