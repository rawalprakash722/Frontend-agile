import { Component } from "react";

import {Route} from 'react-router-dom'
import Register from './Register'

class Container extends Component{
    render(){
     
        return(
            <div className="">
                <div className=''>
                    <div className=''>
                  <Route path="/users/signup" component={Register} />
                

                   </div>
                   
                   </div>
            </div>
            
        )
    }
}

export default Container