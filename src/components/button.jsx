import React from 'react';

const Button = ({ label, whenClicked }) => {
return <button onClick={whenClicked}>{label}</button>;
}

export default Button; 