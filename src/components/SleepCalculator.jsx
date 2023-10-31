import moment from "moment";
import { useEffect, useState } from "react";

export default function SleepCalculator() {
  const [state, setState] = useState({
    averageSleep: "00:00", // Tilføj gennemsnit til komponentens tilstand
  });

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data !== null) {
          const entries = Object.entries(data);
          const latestEntries = entries.slice(-7); // Tag de seneste 7 elementer
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
  
            const formattedTime = moment()
              .startOf("day")
              .minutes(averageSleep)
              .format("HH:mm");

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

  return(
        <> 
        {state.averageSleep} 
        </>
  ) 
}

