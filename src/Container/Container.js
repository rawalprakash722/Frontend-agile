import { Component } from "react";

import {Route} from 'react-router-dom'
import Register from './Register'
import Login from "./Login";
class Container extends Component{
    render(){
     
        return(
            <div className="">
                <div className=''>
                    <div className=''>
                  <Route path="/users/signup" component={Register} />
                  <Route path="/users/login" component={Login} />
                

                   </div>
                   
                   </div>
            </div>
            
        )
    }
}

export default Container