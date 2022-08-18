import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
 
type Sandwich = {
  fBread: String,
  fCheese: String,
  fVeggies: String[],
  fCondiments: String[],
}

const App: React.FC = () => {
  
  const [sandwich, setSandwich] = useState<Sandwich>({fBread: "", fCheese: "", fVeggies: [], fCondiments: []});
  
  const breadType = (bread: String) => {
    setSandwich({...sandwich, fBread: bread});
  }

  const cheeseType = (cheese: String) => {
    setSandwich({...sandwich, fCheese: cheese })
  }

  const addVeggie = (veggie: String) => {
    
    let newVeggie: String[];
    if(!sandwich.fVeggies.includes(veggie)){
    newVeggie = [...sandwich.fVeggies, veggie];
    } else {
      newVeggie = sandwich.fVeggies.filter(veg => veg !== veggie)
    }
    setSandwich({...sandwich, fVeggies: newVeggie});
  }

  const addCondiment = (condiment: String) => {

    let newCondiment
    if(!sandwich.fCondiments.includes(condiment)) {
      newCondiment = [...sandwich.fCondiments, condiment];
    } else {
      newCondiment = sandwich.fCondiments.filter(sauce => sauce !== condiment);
    }
    setSandwich({...sandwich, fVeggies: newCondiment});
  }

  return (
    <>
      <Routes>
        
      </Routes>
    </>
  );
}

export default App;
