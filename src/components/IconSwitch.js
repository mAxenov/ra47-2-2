import React from 'react';

function IconSwitch({ icon, onSwitch }) {
    console.log(icon)
    return (
        <span
            className="bth-toggle material-icons"
            onClick={() => onSwitch()}>
            {icon}
        </span>
    );
}

export default IconSwitch;