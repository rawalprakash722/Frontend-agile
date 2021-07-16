import React,{ Component } from "react";
import {Route, Link} from 'react-router-dom';
import axios from 'axios';


class ViewRestaurantRequest extends Component{
    state = {
        users : [],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    componentDidMount(){
        axios.get("http://localhost:90/users/show",this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                users : response.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    

       
    render(){
        return(
            <div id="prd">
                
               
            {this.state.users.map((user)=>{
                        return (

                            
                            
                        <div className="col-lg-6" id="prd">


                            <div id="marg"></div>
                            
                            
                            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">User Type</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{user.fullname}</th>
      <td>{user.email}</td>
      <td>{user.role}</td>
      
    </tr>
    <tr></tr>
    </tbody>
    </table>
    
    <p><button className="btn btn-danger">Delete</button></p>

    
                            </div>
                            
                        
                            ) 
                    })
                }
                </div>


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
            email:this.state.email,
            password:"123456789",
            role:'restaurant'
        }
        axios.post("http://localhost:90/users/signup",data).then(alert("Register Successfull")).catch(error=>{console.log(error);})
    }
    render(){
        return(
            <div id="reg">
           <h1>Restaurant Register</h1>
           
           <form>
           <div className="form-group"><input type="Text" className="form-control" placeholder="Name" value={this.state.fullname} onChange={(event)=>{this.setState({fullname:event.target.value})}}/>
           </div>
           <div className="form-group"><input type="Text" className="form-control" placeholder="Email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
           </div>
          
          
   
           
           
           <div class="form-group"><input type="submit" onClick={this.sendUserData} className="btn btn-primary" /></div>
            </form>
            </div>
              
    )
        
    }
}
export default ViewRestaurantRequest;