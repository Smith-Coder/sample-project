import React from 'react'
import { useState } from 'react';
import Alert from '../Alert/Alert';
function button() {
    let text = "Alert"
    const [showComponent, setComponent] = useState(false);
    const handleAlertClose = () => {
        setComponent(false);
    };
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => showComponent == false ? setComponent(true) : setComponent(false)}
            >{text}</button>

            {showComponent && <Alert onClose={handleAlertClose}>This is an alert</Alert>}
        </div>
    )
}
export default button