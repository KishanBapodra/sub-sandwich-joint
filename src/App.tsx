import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Bread from './components/Bread';
import Veggie from './components/Veggie';
import Condiment from './components/Condiment';
import Order from './components/Order';
import Home from './components/Home';
import Cheese from './components/Cheese';
import Nav from './components/Nav';
import styles from './App.module.css'
 
export type Sandwich = {
  fBread: String,
  fCheese: String,
  fVeggies: String[],
  fCondiments: String[],
}

const initialState = {fBread: "", fCheese: "", fVeggies: [], fCondiments: []}

const App: React.FC = () => {
  
  const [sandwich, setSandwich] = useState<Sandwich>(initialState);
  
  const resetState = () => {
    setSandwich(initialState);
  }

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
    setSandwich({...sandwich, fCondiments: newCondiment});
  }

  return (
    <div className={styles.app}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home resetState={resetState}/>} />
        <Route path='/bread' element={<Bread breadType={breadType} sandwich={sandwich}/>} />
        <Route path='/cheese' element={<Cheese cheeseType={cheeseType} sandwich={sandwich} />} />
        <Route path='/veg' element={<Veggie addVeggie={addVeggie} sandwich={sandwich} />} />
        <Route path='/condiment' element={<Condiment addCondiment={addCondiment} sandwich={sandwich}/>} />
        <Route path='/order' element={<Order sandwich={sandwich}/>} />
      </Routes>
    </div>
  );
}

export default App;