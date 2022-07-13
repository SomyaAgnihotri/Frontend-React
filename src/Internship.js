import { Component } from "react";
import pic from './pic.jpeg';
import './Internship.css'
class Internship extends Component{
    render(){
        return(<div className="Main">
             <img src={pic} alt="logo"/>

            <div className="line"></div>  
            <div className="line-left"></div>
            <div className="line-right"></div>
           <div className="login-box"> 
           <div className="top"></div>
            <div className="middle"></div>
            <div className="side"></div>
            <h2>It's a delight to have you  onboard</h2>
            <form>
                <div className = "user-box">
                    <p>
                    Help us you know better .<br></br>
                    <i>(This is how we optimize Wobot as per your business needs)
                    </i>
                    </p>
                <input type="text" placeholder="Company Name" class="form-control" /> <br></br>
                {/* <input type="text" placeholder="Industry" class="form-control" /> <br></br> */}
                <select name="Industry" id="Industry" placeholder="Industry">
                <option value="Automobile">Industry</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Finance">Finance</option>
                </select> <br></br> <br></br> <br></br> 
                <div className="Company"> Company Size <br></br></div>    
            <button type="button" className="button1"> 1-20 </button> <button type="button" className="button2">21-50</button> <button type="button" className="button3">51-200</button> <button type="button" className="button4">201-500</button> <button type="button" className="button5">500+</button>
                </div>
            <a href = "blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Get Started
                </a>  
            </form>
            </div>    
            <div className="Privacy">
                Terms of Use | Privacy Policy
            </div> 
        </div>
        );
    }
}
export default Internship;