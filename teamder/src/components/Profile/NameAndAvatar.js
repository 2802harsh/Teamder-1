import React from 'react';
import {Avatar} from '@material-ui/core';
import './Profile.css';

const NameAndAvatar = (props) => {
    function getInitials(name)
    {
        var initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }
    return <div className="name-and-avatar">
        <div className="avatar-container">
            {props.src === null || props.src === '' || typeof props.src === 'undefined'? <Avatar className="avatar">{getInitials(props.myname)}</Avatar> : <Avatar className="avatar" alt={props.name} src={props.src} />}
        </div>
        <div className="name-container">
            <h1> {props.myname} </h1>
        </div> 
    </div>
}

export default NameAndAvatar;