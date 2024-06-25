// import { useState } from 'react'
//install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AddService from './components/AddService';
import Service from './components/Service';

function App() {

  return (
    <>
      
    <AddService>
        {/*loop for services*/}
        <Service name={"osama"} service={"frontend"} isrecommended={true}/>
    </AddService>
    </>
  )
}

export default App
