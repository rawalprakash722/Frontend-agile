import { Component,state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Login extends Component{
    state = {
        email : "",
        password : "",
        chkLogin:false
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/users/login", this.state)
        .then((response)=>{
            console.log(response);
            alert("Login Success")
            this.setState({
                chkLogin:true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(this.state.chkLogin==true){
            //redirect to dashboard
            
            return  window.location.href='/'
            
            



        }
        return(
           
                <div id="login">
               
                <form>
                <h1>User Login</h1>

                    
                    <p>Email<input type="text" name="email" value={this.state.email} onChange={this.changeHandler}/></p>
                    <p>Password<input type="password" name="password" value={this.state.password} onChange={this.changeHandler} /></p>
                    <p><input className="btn btn-primary" type="submit" onClick={this.submitLogin}  /></p>
                    
                </form>
                </div>
           
        )
    }
}
export default Login;