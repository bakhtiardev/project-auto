import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormData } from './components/form/FormData'
import Home from './components/home/Home'
function App() {
  // const [count, setCount] = useState(0)
     const [login, setLogin] = useState<boolean>(false);
    //  console.log(login);
//  if(!login){
//   return <FormData setLogin={setLogin}/>
//  }else{
  return <Home setLogin={setLogin}/>
//  }
}

export default App
