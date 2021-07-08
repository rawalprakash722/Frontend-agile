import { Component } from "react";
import axios from 'axios'


class Register extends Component{
    state={
        fullname:"",
        password:"",
        email:""
       
    }
    sendUserData = ( ) =>{
        const data={
            fullname:this.state.fullname,
            email:this.state.email,
            password:this.state.password,
        }
        axios.post("http://localhost:90/users/signup",data).then(alert("Register Successfull")).catch(error=>{console.log(error);})
    }
    render(){
        return(
            <div id="reg">
           <h1>User Register</h1>
           
           <form>
           <div className="form-group"><input type="Text" className="form-control" placeholder="Name" value={this.state.fullname} onChange={(event)=>{this.setState({fullname:event.target.value})}}/>
           </div>
           <div className="form-group"><input type="Text" className="form-control" placeholder="Email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
           </div>
          
          
           <div className="form-group"><input type="Text" className="form-control" placeholder="Password" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}}/>
           </div>
           <div className="form-group"><input type="Password" className="form-control" placeholder="Confirm Password"/></div>
           
           
           <div class="form-group"><input type="submit" onClick={this.sendUserData} className="btn btn-primary" /></div>
            </form>
            </div>
            
        )
    }
}

export default Register