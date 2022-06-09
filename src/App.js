import React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
function Afficher(props){
    const [Seconde, setSeconde] = useState('');

    useEffect(() => {
        let intervalle = setInterval(() => setSeconde(new Date().toLocaleTimeString()),1000);
        return function() {
            clearInterval(intervalle);
        }
    })
    return(
        <h1 class ="texte">{Seconde}</h1>
    );
}
function Timer(props){
    const {initialHeure = 0,initialMinute = 0,initialSeconds = 0} = props;
    const [ heures, setHeure ] = useState(initialHeure);
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    setHeure(heures - 1);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {heures < 10 ?  `0${heures}` : heures}:{minutes < 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}
function App() {
    const[hValeur, setHValeur] = useState('');
    const[mValeur, setMValeur] = useState('');
    const[sValeur, setSValeur] = useState('');
   return(
       <>
        <input type ="text " placeholder='Hours here' onChange={(e) => setHValeur(e.target.value)}/>
        <input type ="text " placeholder='Minutes here' onChange={(e) => setMValeur(e.target.value)}/>
        <input type ="text " placeholder='Seconds here' onChange={(e) => setSValeur(e.target.value)}/>
        <Timer initialHeure={hValeur} initialMinute={mValeur} initialSeconds={sValeur}/>
       </>
   );
}
export default App;

