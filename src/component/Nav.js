import React from 'react';

const Nav = ({mode, onChangeMode}) => {

    const navList = ['VIEW', 'ADD', 'EDIT'];

    return <div className='navWrap'>
        {navList.map((row, idx) => {
            return (
                <a
                    key={idx}
                    title={row}
                    className={`navItem ${mode === row && 'active'}`}
                    href={'/'+row}
                    onClick={event => {
                        event.preventDefault();
                        onChangeMode(event.target.title);
                }}>{row}</a>
            );
        })}
        {/* <a title='VIEW' className={`navItem ${(props.mode === "VIEW") && 'active'}`} href='/view' onClick={event => {
            event.preventDefault();
            props.onChangeMode(event.target.title);
        }}>VIEW</a>
        <a title='ADD' className={`navItem ${(props.mode === "ADD") && 'active'}`} href='/add' onClick={event => {
            event.preventDefault();
            props.onChangeMode(event.target.title);
        }}>ADD</a>
        <a title='EDIT' className={`navItem ${(props.mode === "EDIT") && 'active'}`} href='/edit' onClick={event => {
            event.preventDefault();
            props.onChangeMode(event.target.title);
        }}>EDIT</a> */}
    </div>
};

export default Nav;