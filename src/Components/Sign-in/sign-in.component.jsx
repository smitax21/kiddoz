import React from 'react';

import FormInput from '../Form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../Firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password : ''
        }
    }

        handleSubmit = event => {
            event.preventDefault();

            this.setState({email: '', password: ''})
        }

        handleChange = event => {
            const { value, name} = event.target;

            this.setState({[name]: value })
        }

        render() {
            return (
                <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>Sign-in with your email and password</span>
                    
                    <form handleChange={this.handleSubmit}>
                        <form >
                            <FormInput 
                                type="email" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.handleChange}
                                label="email"
                                required/>
                            <FormInput 
                                type="password" 
                                name="password" 
                                value={this.state.password}
                                handleChange={this.handleChange} 
                                label="password"
                                required/>

                            <div className='buttons'>
                                <CustomButton type="submit"> Sign in </CustomButton>
                                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                                        {' '} 
                                        Sign in with Google{' '}
                                </CustomButton>
                            </div>
                        </form>
                    </form>
                </div>
            )
        }
    }
    


export default SignIn;