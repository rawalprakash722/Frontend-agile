import { Component } from "react";

import {Route} from 'react-router-dom'
import Register from './Register'
import Login from "./Login";
import Logout from "./Logout";
import RestaurantRequest from "./RestaurantRequest";
import ViewRestaurantRequest from './ViewRestaurantRequest';
import ListFoods from './FoodCategory';
import AddRestuarant from './Restaurant';
import AddFood from "./Foods";
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
                  <Route path='/food/cat' component={ListFoods} />
                  <Route path='/restaurant/add' component={AddRestuarant} />
                  <Route path='/add/food' component={AddFood} />

                   </div>
                   
                   </div>
            </div>
            
        )
    }
}

export default Container