import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const { name, img, born, club, salary, nationality,  position} = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className="user-container py-2">
            <img src={img} alt="" />
            <h5> <FontAwesomeIcon icon={faUser} /> {name}</h5>
            <p> <strong>Born</strong> : {born}</p>
            <p> <strong>Club</strong> : {club}</p>
            <p> <strong>Nationality</strong> : {nationality}</p>
            <p> <strong>Position</strong> : {position}</p>
            <h6> <strong>Salary</strong> : ${salary}</h6>
            <button className="btn btn-danger" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faCheck} /> Select Player</button>
        </div>
    );
};

export default Player;