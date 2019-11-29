import React from 'react';

function Header () {
    return (
        <header style={headerStyle}>
            <h1 style={h1Style}>To Do List</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '6px',
}

const h1Style ={
    fontFamily: 'Montserrat',
    fontSize: '3rem',
    color: 'dodgerblue',
}



export default Header;
