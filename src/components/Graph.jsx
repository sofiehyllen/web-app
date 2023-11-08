// Denne side er kodet af: Sofie Hyllen

import { motion } from 'framer-motion';
import { itemAnimation } from './Animationer';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import moment from 'moment';


//Vi benytter chart.js biblioteket: https://www.chartjs.org/ 
//Biblioteket benyttes til at skrive en graf over den tid, brugeren har sovet pr. nat, de seneste 7 dage
export default function Graph() {
    const [state, setState] = useState({ //Her oprettes 2 statevariable ved hjælp af useState
    labels: [], //Dette array holdes tomt, da dagen for hvert hentet datasæt skal stå her
    datasets: [
        {
        label: "Sleepdata",
        backgroundColor: 'rgba(231, 115, 96, 1)',
        borderRadius: '8',
        data: [], //Dette array holdes tomt, da de hentede søvndata skal være her
        },
        {
        label: 'Psudodata', //Dette datasæt oprettes udelukkende grundet æstetik, da det giver de gennemsigtige søjler i baggrunden
        backgroundColor: 'rgba(240, 238, 230, 0.1)',
        borderRadius: '8',
        data: [10, 10, 10, 10, 10, 10, 10],
        },
    ],
    });

    useEffect(() => {
        async function fetchData() {
            //Definerer URL for den firebase-database funktionen skal hente data fra
            const url = 'https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json'; 
            try {
                //Her bruges fetch til at hente dataene og svaret konverteres til JSON
                const response = await fetch(url); 
                const data = await response.json();

                //Vi benytter moment.js biblioteket: https://momentjs.com/
                //Biblioteket benyttes her til formatering af datoen
                const formattedDay = (date) => { 
                    const dayLetter = moment(date).format("dddd").charAt(0);
                    return dayLetter;
                }
            
                if (data !== null) { //Her tjekkes om der er data
                const entries = Object.entries(data);
                const latestEntries = entries.slice(-7); // Henter de seneste 7 elementer
            
                //Her oprettes arrays af de hentede oplysninger
                const sleepData = latestEntries.map(([, entry]) => parseFloat(entry.hs)); // Parse konverter til tal
                const dayData = latestEntries.map(([, entry]) => formattedDay(entry.date)); 

                setState((prev) => ({ //Her opdateres vores state til de nye data
                    ...prev,
                    labels: dayData,
                    datasets: [
                    {
                        ...prev.datasets[0],
                        data: sleepData,
                    },
                    ...prev.datasets.slice(1), //Vi beholder andre datasets (pseudo-datasættet) uændrede
                    ],
                }));
                } else { //Hvis der ikke findes data i databasen, udskrives fejlmeldingen i konsollen
                console.log('Ingen data fundet i databasen.');
                }
                } catch (error) { //Hvis der opstår en fejl under hentningen af dataene, udskrives denne melding i konsollen
                console.error('Fejl under hentning af data:', error);
                }
            }
        fetchData();
    }, []);

  return ( 
    //Her retuneres vores bar-chart (søjlediagram)
    //Diagrammet styles på baggrund af de konfigurationsindstillinger som chart.js tilbyder 
    <motion.div variants={itemAnimation} className='spacing-top' id='graph'>
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
    </motion.div>
  );
}
