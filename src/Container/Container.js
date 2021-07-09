import { Component } from "react";

import {Route} from 'react-router-dom'
import Register from './Register'
import Login from "./Login";
import Logout from "./Logout";
class Container extends Component{
    render(){
     
        return(
            <div className="">
                <div className=''>
                    <div className=''>
                  <Route path="/users/signup" component={Register} />
                  <Route path="/users/login" component={Login} />
                  <Route path="/users/logout" component={Logout} />
                

                   </div>
                   
                   </div>
            </div>
            
        )
    }
}

export default Container