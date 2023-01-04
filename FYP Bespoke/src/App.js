import React from 'react';
import Home from './Pages/Home';
import EarnMoney from './Pages/EarnMoney';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';

function App() {

  let component 
  switch (window.location.pathname)
  {
    case"/":
    component = <Home />
    break

    case"/EarnMoney":
    component = <EarnMoney />
    break

    case"/Shop":
    component = <Shop />
  }



  return (
    <div className="App">
      <Navbar></Navbar>
      {component}
     
      
    </div>
      
  );
}

export default App;
