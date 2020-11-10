import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../Firebase/firebase.utils';

import FormInput from '../Form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name] : value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign-in with your email and password</span>

                <form onSubmit={this.handleSubmit}> 
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        label='Email'
                        handleChange={this.handleChange} 
                        required 
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='PASSWORD'
                        handleChange={this.handleChange}
                        autoComplete='on' 
                        required 
                    />

                    <div className='buttons'>

                        <CustomButton type='submit' > SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '} 
                            SIGN IN WITH GOOGLE {' '}
                        </CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;