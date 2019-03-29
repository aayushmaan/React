/**
*
* Login
*
*/

import React from 'react';
import validator from 'email-validator';
import TextInput from "../TextInput";
import styles from './styles.css';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  };


  state = {};

  login = () => { //we can choose between arrow and bind function here
    //console.log("login button clicked",this.emailField.value);
    const email = this.emailField.value();
    if(!validator.validate(email)) {
      //console.error('not a valid email!');
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }

    this.setState({
      errorText:null,
    });

    this.props.login(email);
  }

  render() {

    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        > Login with your email
        </div>

        <TextInput
          placeholder="Your email"
          ref={(f) => {this.emailField = f; }}
          errorText={this.state.errorText}
        />
        
        <div
          className={styles.actionContainer}
        >
          <div
            className={styles.button}
            onClick={this.props.cancelLogin}
          >
            cancel
          </div>
          <div
            className={styles.button}
            onClick={this.login}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
