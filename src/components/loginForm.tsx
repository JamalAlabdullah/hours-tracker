import { Component } from "react";
import { Redirect } from "react-router-dom";
import login from "../auth/auth";

const Evaluate = (props:any) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Redirect to="/home" />
  }
  return <label>{props.reason}</label>
}

class LoginForm extends Component <any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      isLoggedIn: true,
      reason: ""
    };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const reason = this.state.reason;
    return (
      <div className="container">
        <h1>Log in</h1>
        <form  onSubmit={ async (event: any) => {
            event.preventDefault();
            const username = event.target.username.value;
            const password = event.target.password.value;

            console.log("username: ", username);
            console.log("password: ", password);
          
            const {success, reason} =  await login(username, password);
            if(!success) {
                this.setState({isLoggedIn: false, reason});
            }
            if (success) {
              this.setState({isLoggedIn: true, reason});
            }

        }}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input name="username" id="username" type="text" className="form-control" />
            </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="text" className="form-control" /></div>
            <Evaluate isLoggedIn={isLoggedIn} reason={reason} />
            <button type="submit">Login</button>
        </form>
        
      </div>
    );
  }
}

export default LoginForm;

