// Denne side er kodet af: Karoline Lerche & Sofie Hyllen

import moment from "moment";
import { useEffect, useState } from "react";

export default function SleepCalculator() {
  // Initialisering af tilstanden
  const [state, setState] = useState({
    averageSleep: "00:00", // Tilføj gennemsnit til komponentens tilstand
  });

  // Hent data fra Firebase-databasen
  useEffect(() => {
    async function fetchData() {
      const url =
        "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
      try {
        const response = await fetch(url);
        const data = await response.json();

        // Håndterer data, hvis det eksisterer
        if (data !== null) {
          // Behandling af de seneste 7 elementer
          const entries = Object.entries(data);
          const latestEntries = entries.slice(-7); // Tag de seneste 7 elementer
          // Konverter timer til minutter og beregn gennemsnitlig søvn
          const hoursSlept = latestEntries.map(
            ([, entry]) => {
                const [hours, minutes, seconds] = entry.hs.split(':');
                return { hours: parseInt(hours), minutes: parseInt(minutes), seconds: parseInt(seconds) };
              }
            );
  
            const totalSleep = hoursSlept.reduce(
              (total, { hours, minutes }) => total + hours * 60 + minutes,
              0
            );
  
            const averageSleep = totalSleep / hoursSlept.length;
  
            // Formater gennemsnitlig søvntid
            const formattedTime = moment()
              .startOf("day")
              .minutes(averageSleep)
              .format("HH:mm");

          // Opdater tilstanden med det gennemsnitlige søvntidspunkt
          setState((prev) => ({
            ...prev,
            averageSleep: formattedTime, // Opdater gennemsnit i tilstanden
          }));
        } else {
          console.log("Ingen data fundet i databasen.");
        }
      } catch (error) {
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

