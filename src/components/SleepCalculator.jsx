// Denne side er kodet af: Sofie Hyllen

import moment from "moment";
import { useEffect, useState } from "react";

//Denne funktion udregner gennemsnittet af brugerens søvntimer for de seneste 7 dage
export default function SleepCalculator() {
  const [state, setState] = useState({
    averageSleep: "00:00", // Den gennemsnitlige søvn som stater ved 00:00
  });

  // Her hentes timerne fra Firebase-databasen
  useEffect(() => {
    async function fetchData() {
      const url =
        "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
      
        try {
        const response = await fetch(url); //Her hentes dataene fra url'en vha. fetch
        const data = await response.json();

        if (data !== null) { // Håndterer data, hvis det eksisterer
          const entries = Object.entries(data);
          const latestEntries = entries.slice(-7); // Henter de seneste 7 elementer

          const hoursSlept = latestEntries.map(
            ([, entry]) => {
                //Her konverteres de hentede data til et array af objekter med værdierne timer, minutter og sekunder
                const [hours, minutes, seconds] = entry.hs.split(':'); 
                return { hours: parseInt(hours), minutes: parseInt(minutes), seconds: parseInt(seconds) };
              }
            );
  
            //Her beregnes den samlede søvntid i minutter
            const totalSleep = hoursSlept.reduce(
              (total, { hours, minutes }) => total + hours * 60 + minutes,
              0
            );
            
            //Her beregnes gennemsnittet ved at dividere den samlede søvntid, med antallet af søvntider
            const averageSleep = totalSleep / hoursSlept.length;
  
            // Her formateres gennemsnittet med moment.js
            const formattedTime = moment()
              .startOf("day")
              .minutes(averageSleep)
              .format("HH:mm");

            setState((prev) => ({ //Tilstanden opdateres med det gennemsnitlige søvntidspunkt
            ...prev,
            averageSleep: formattedTime,
          }));
        } else { //Hvis der ikke findes data i databasen, udskrives fejlmeldingen i konsollen
          console.log("Ingen data fundet i databasen.");
        }
      } catch (error) { //Hvis der opstår en fejl under hentningen af dataene, udskrives denne melding i konsollen
        console.error("Fejl under hentning af data:", error);
      }
    }
    fetchData();
  }, []);

  // Returnerer den gennemsnitlige søvntid
  return(
        <> 
        {state.averageSleep} 
        </>
  ) 
}

