import React from 'react';

const formStyle = {
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#4E4C4C',
    color:'#FFCCFF',
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

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#F2AD40',
    width: '100%',
    fontSize: '15px',
    color: '#2F2D6B',
    display: 'block'
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
    const ImieRef = React.useRef();
    const NazwiskoRef = React.useRef();
    const usernameRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const passwordConfirmRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            Imie: ImieRef.current.value,
            Nazwisko: NazwiskoRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            passwordConfirm: passwordConfirmRef.current.value
        };
        onSubmit(data);
    };
    return (
        <form style={formStyle} onSubmit={handleSubmit} >
            <Field ref={ImieRef} label="Imię:" type="text" />
            <Field ref={NazwiskoRef} label="Nazwisko:" type="text" />
            <Field ref={usernameRef} label="Nazwa użytkownika:" type="text" />
            <Field ref={emailRef} label="Email:" type="text" />
            <Field ref={passwordRef} label="Hasło:" type="password" />
            <Field ref={passwordConfirmRef} label="Potwierdź hasło:" type="password" />
            <div>
                <button style={submitStyle} type="submit">Zarejestruj</button>
            </div>
        </form>
    );
};

export default Form