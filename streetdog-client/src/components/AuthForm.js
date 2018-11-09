import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signup ? 'signup' : 'signin';
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        // console.log("LOGGED IN SUCCESSFULLY!");
        this.props.history.push('/');
      })
      .catch(() => {
        return;
      })

  }



  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const {
      heading,
      buttonText,
      signup,
      errors, 
      removeError,
      history
    } = this.props;

    if(errors.message) {
      const unlisten = history.listen(() => {
        removeError()
        unlisten()
      })
    }

    return ( 
      <div>
        <div className="row justify-content-md-center text-center">
        <form onSubmit={this.handleSubmit}>
          <h2>{heading}</h2>
          {errors.message && (
            <div className="alert alert-danger">{errors.message}</div>
          )}
          <label htmlFor='email'>Email:</label>
          <input
            className="form-control"
            id='email'
            name='email'
            onChange={this.handleChange}
            value={email}
            type="text"
          />
          <label htmlFor='password'>Password:</label>
          <input
            className="form-control"
            id='password'
            name='password'
            onChange={this.handleChange}
            value={password}
            type="password"
          />
          { signup && (
            <div>
              <label htmlFor="username">Username:</label>
              <input
                className='form-control'
                id='username'
                name='username'
                onChange={this.handleChange}
                value={username}
                type='text'
              />
              <label htmlFor="image-url">Image Url:</label>
              <input
                className='form-control'
                id='image-url'
                name='profileImageUrl'
                onChange={this.handleChange}
                value={profileImageUrl}
                type="text"
              />
            </div>
          )}
          <button type='submit' className="btn btn-primary btn-block btn-lg">
            {buttonText}
          </button>
        </form>
        </div>
      </div>
    );
  }
}  
 
export default AuthForm;