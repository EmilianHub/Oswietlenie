import React from 'react';
import "./log.css"


const formStyle = {
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: 'Black',
    color:'Green',
    width: '50vh',
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    padding: '5px',
    boxSizing: 'border-box',
    width: '100%'
};



const Field = React.forwardRef(({label, type}, ref) => {
    return (
        <div>
            <label style={labelStyle} >{label}</label>
            <input ref={ref} type={type} style={inputStyle} />
        </div>
    );
});


const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,

        };
        onSubmit(data);
    };
    return (
        <form style={formStyle} onSubmit={handleSubmit} >
            <Field ref={usernameRef} label="Nazwa użytkownika:" type="text" />
            <Field ref={passwordRef} label="Hasło:" type="password" />

            <div>
                <button className="button" type="submit">Zaloguj</button>
            </div>
        </form>
    );
};

export default Form