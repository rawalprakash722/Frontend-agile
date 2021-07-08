import 'jquery';
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.js'
import Header from './Header/Header'

import Container from './Container/Container'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <div><Header></Header></div>

   
     <div><Container></Container></div>
     
    
    
    </div>
   
    </BrowserRouter>
  );
}

export default App;
