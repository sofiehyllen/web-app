// Denne side er kodet af: Sofie Hyllen

//Denne kode definerer to animationsobjekter som benyttes hele vejen igennem koden.
//Objekterne implementeres ved brug af framer-motion: https://www.framer.com/motion/ 

//'hidden' definere hvordan elementet skal opføre sig ved start af animationen.
//'visible' definerer hvordan elementet skal opføre sig under animationen. 

//Objektet containerAnimation starter med at være usynlig og skaleret ned til scale 0
//Under animationen bliver det 100% synligt og skaleres til fuld størrelse
export const containerAnimation = { 
    hidden: { opacity: 0, scale: 0 }, 
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .2,
        staggerChildren: .1
      }
    }
  };

//Objektet itemAnimation starter med at være usynligt og forskudt 5 px på y aksen
//Under animationen bliver det 100% synligt og y-forskydningen nulstilles
  export const itemAnimation = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {staggerChildren: .2}
    }
  };

    
    

  

