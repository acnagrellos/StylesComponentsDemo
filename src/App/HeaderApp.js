import React from 'react';

const HeaderApp = ({ name, logo }) => {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <div>{`Esta es la app ${name}`}</div>
        </header>
    );
};

export { HeaderApp };