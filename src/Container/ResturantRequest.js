import { Component } from "react";
import axios from 'axios'


class RestaurantRequest extends Component{
    state={
        fullname:"",
        password:"",
        email:"",
        role:""
    }
    sendUserData = ( ) =>{
        const data={
            fullname:this.state.fullname,
           
        }
        axios.post("http://localhost:90/users/signup",data).then(alert("Register Successfull")).catch(error=>{console.log(error);})
    }
    render(){
        return(
            <div id="reg">
           <h1>Restaurant Register</h1>
           
            
        )
    }
}

export default RestaurantRequest