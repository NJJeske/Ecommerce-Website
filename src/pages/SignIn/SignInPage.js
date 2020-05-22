import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './SignInPage.scss';

const SignInPage = () => (
    <div className='sign-in-page'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInPage;