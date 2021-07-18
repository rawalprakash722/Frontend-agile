import { Component } from "react";

import {Route} from 'react-router-dom'
import Register from './Register'
import Login from "./Login";
import Logout from "./Logout";
import RestaurantRequest from "./RestaurantRequest";
import ViewRestaurantRequest from './ViewRestaurantRequest';
class Container extends Component{
    render(){
     
        return(
            <div className="">
                <div className=''>
                    <div className=''>
                  <Route path="/users/signup" component={Register} />
                  <Route path="/users/login" component={Login} />
                  <Route path="/users/logout" component={Logout} />
                  <Route path='/restaurant/register' component={RestaurantRequest} />
                  <Route path='/user/show' component={ViewRestaurantRequest} />

                   </div>
                   
                   </div>
            </div>
            
        )
    }
}

export default Container