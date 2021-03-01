import React from 'react';
import './Select.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUsersCog } from '@fortawesome/free-solid-svg-icons';

const Select = (props) => {
    const select = props.select;
    const total = select.reduce((total, count) => total + count.salary, 0)

    return (
        <div className="select-cart p-4">
            <h3> <FontAwesomeIcon icon={faUsersCog} /> Total Player Selected: ({select.length})</h3>
            <hr/>
            {
                props.select.map( player => {
                    return (
                        <h6> <FontAwesomeIcon icon={faCheckCircle} /> <strong>{player.name}</strong> - ${player.salary}<hr/></h6>
                    )
                })
            }
            <h4 style={{color: '#020e3a', fontWeight: '700'}}>Total Cost: ${total}</h4>
        </div>
    );
};

export default Select;