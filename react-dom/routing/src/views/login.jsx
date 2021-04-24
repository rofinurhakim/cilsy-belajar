import React from 'react'
import { connect } from 'react-redux' 


const Login = (props) => {
    return (
        <div>
            <h1>
                login page {props.counter}
            </h1>
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};




export default connect(mapStateToProps)(Login);