//@ts-check
import { useState } from 'react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

const HomePage = () => {

    const [signedUp, setSignedUp] = useState(false);

    const current_user = localStorage.getItem("current_user");

    if (current_user){
        return( <> Welcome to Takstrek {current_user} </>)
    }

    if (!signedUp) {
        return(
            <>
                <SignUpForm/>
                <div>
                    <h5> Already have an account? <button onClick={() => setSignedUp(true)}> Sign In</button></h5>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SignInForm/>
                <div>
                    <h5> Don't have an account? <button onClick={() => setSignedUp(false)}> Sign Up</button></h5>
                </div>
            </>
        )
        
    }   
}

export { HomePage}

